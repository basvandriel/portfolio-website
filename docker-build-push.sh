#!/bin/sh
# Build and push Docker image to vandriel.com:30050 as latest

set -e

REGISTRY=38.242.129.224:30050
IMAGE=basvandriel-website
TAG=latest

# Build the image


docker buildx build --platform linux/amd64 -t $REGISTRY/$IMAGE:$TAG .

# Push the image

docker push $REGISTRY/$IMAGE:$TAG

echo "Image pushed: $REGISTRY/$IMAGE:$TAG"