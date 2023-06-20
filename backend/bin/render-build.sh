#!/usr/bin/env bash

# exit on error
# set -o errexit

# Build the React app
# npm install --prefix backend/frontend
# npm run build --prefix backend/frontend

# Install Rails dependencies and migrate the database
# cd backend && bundle install
# cd backend && rails db:migrate
# Uncomment the following line if you want to seed the database on every build
# rails db:seed

# //////////////////////////////////////////////////////////////////////

#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
bundle install
rails db:migrate
rails db:seed #if needed
