#!/bin/bash
# deploy.sh

set -e

# Fixed bucket name
BUCKET_NAME="pavel-tarlev-cv-20250218"
echo "📦 Using bucket name: $BUCKET_NAME"

echo "🚀 Building React app..."
npm run build

echo "🏗️  Deploying infrastructure with Terraform..."
cd terraform

terraform init
terraform apply -var="bucket_name=$BUCKET_NAME" -auto-approve

# Get outputs
CLOUDFRONT_ID=$(terraform output -raw cloudfront_id)
WEBSITE_URL=$(terraform output -raw website_url)

cd ..

echo "📤 Uploading files to S3..."
aws s3 sync ./dist/ s3://$BUCKET_NAME/ --delete

echo "✨ Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*"

echo "✅ Deployment complete!"
echo "🌐 Your CV is live at: $WEBSITE_URL"
echo "📦 Bucket: $BUCKET_NAME"