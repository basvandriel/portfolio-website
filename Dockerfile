FROM node:22-alpine AS build
WORKDIR /app

# Update Alpine packages to latest security patches
RUN apk update && apk upgrade --no-cache

# Install dependencies
COPY package.json package-lock.json* ./
COPY pnpm-lock.yaml* ./
RUN npm ci --silent || true
RUN npm install --silent || true

# Copy source and build
COPY . .

# Build argument for analytics (default: disabled for test environments)
ARG ENABLE_ANALYTICS=false
ENV VITE_ENABLE_ANALYTICS=${ENABLE_ANALYTICS}

RUN npm run build

# --- Production stage ---
FROM nginx:alpine AS production

# Update packages to ensure latest security patches
RUN apk update && apk upgrade --no-cache

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from the builder
COPY --from=build /app/dist /usr/share/nginx/html

# Add custom nginx config for SPA routing
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
