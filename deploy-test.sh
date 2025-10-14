#!/bin/sh
set -e

REGISTRY=vandriel.com:30050
IMAGE=basvandriel-website
TAG=test

# Build and push image
docker buildx build --platform linux/amd64 -t $REGISTRY/$IMAGE:$TAG --push .
docker push $REGISTRY/$IMAGE:$TAG


# Apply manifests to test namespace
kubectl apply -f basvandriel-website-deployment-test.yaml
kubectl apply -f basvandriel-website-service-test.yaml

# Rollout restart (if using :test or static tag)
kubectl rollout restart deployment/basvandriel-website-test

# Check status
kubectl get pods
