#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Setting permissions..."
chmod +x node_modules/.bin/react-scripts

echo "Building application..."
CI=false GENERATE_SOURCEMAP=false npm run build

echo "Build completed successfully!" 