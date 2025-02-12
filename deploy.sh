#!/bin/bash

# Exit if any command fails
set -e

# Define color codes
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Build the site with the production environment
echo "Building the site for production..."
JEKYLL_ENV=production bundle exec jekyll build

# Navigate to the _site directory
cd _site

# Initialize a new Git repo if it doesn't exist
if [ ! -d ".git" ]; then
  git init
  git remote add origin https://github.com/loganmorto/Bancru-Concrete.git
fi

# Check out the `gh-pages` branch
git branch -M gh-pages

# Ask for a commit message with green text
echo -e "${GREEN}Enter your commit message:${NC} "
read COMMIT_MESSAGE

# Add and commit changes
git add .
git commit -m "$COMMIT_MESSAGE"

# Push to the `gh-pages` branch
git push -f origin gh-pages

# Return to the project root
cd ..

echo "Deployment to 'gh-pages' branch complete!"
