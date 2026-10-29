# Stage 1: Build the React Application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package descriptors
COPY package*.json yarn.lock* ./

# Install dependencies
RUN npm ci --legacy-peer-deps || yarn install --frozen-lockfile || npm install

# Copy application source code
COPY . .

# Build production bundle
RUN npm run build

# Stage 2: Serve with lightweight Nginx
FROM nginx:alpine

# Copy custom Nginx configuration for Cloud Run
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Cloud Run defaults to container listening on port 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
