#!/usr/bin/env bash
set -e
mkdir -p backups
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
docker exec $(docker ps -qf "ancestor=postgres:16-alpine") pg_dump -U haswell haswell_security > backups/haswell_security_$TIMESTAMP.sql
