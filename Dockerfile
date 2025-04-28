# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only package files first for better caching
COPY package*.json ./
COPY tsconfig.json ./
COPY astro.config.mjs ./

# Install dependencies
RUN npm ci

# Copy only source files needed for build
COPY src/ ./src/
COPY public/ ./public/

# Build the project
RUN npm run build

# Production stage
FROM nginx:alpine

# Create log directories and set permissions
RUN mkdir -p /var/log/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chmod -R 755 /var/log/nginx

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy public assets
COPY --from=builder /app/public /usr/share/nginx/html/public

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create a volume for logs
VOLUME ["/var/log/nginx"]

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 