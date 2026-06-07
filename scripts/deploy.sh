#!/usr/bin/env bash
set -e
git pull origin main
docker compose -f infrastructure/docker/docker-compose.prod.yml --env-file .env.production up -d --build
