#!/usr/bin/env bash
export NODE_ENV=test && npx sequelize-cli db:migrate
