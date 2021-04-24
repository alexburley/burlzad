#!/bin/bash

# yarn install
npm run build
aws s3 cp ./build s3://burlzad --recursive