#!/bin/sh

echo "Installing backend dependencies..."
cd Backend/
npm install

echo "Installing frontend dependencies..."
cd ../Frontend/
npm install

echo "Starting frontend..."
npm run dev &

cd ../Backend/
echo "Starting backend..."
npm run ganache-dev &