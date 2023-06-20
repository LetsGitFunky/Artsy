#!/usr/bin/env bash

# exit on error
set -o errexit

# Build the React app
npm install --prefix frontend
npm run build --prefix frontend

# Install Rails dependencies and migrate the database
bundle install
rails db:migrate
# Uncomment the following line if you want to seed the database on every build
# rails db:seed
