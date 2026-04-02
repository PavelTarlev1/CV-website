#!/bin/bash
# deploy.sh

set -e

# Fixed bucket name
BUCKET_NAME="pavel-tarlev-cv-20250218"
echo "📦 Using bucket name: $BUCKET_NAME"

echo "🚀 Building React app..."
npm run build

if command -v terraform &> /dev/null; then
    echo "🏗️  Deploying infrastructure with Terraform..."
    cd terraform
    terraform init
    terraform apply -var="bucket_name=$BUCKET_NAME" -auto-approve
    CLOUDFRONT_ID=$(terraform output -raw cloudfront_id)
    WEBSITE_URL=$(terraform output -raw website_url)
    cd ..
else
    echo "⚠️  Terraform not found, skipping infrastructure step."
    echo "   Assuming bucket and CloudFront already exist."
    CLOUDFRONT_ID="${CLOUDFRONT_ID:-}"
    WEBSITE_URL="https://<your-cloudfront-domain>"
fi

echo "📤 Uploading files to S3..."
aws s3 sync ./dist/ s3://$BUCKET_NAME/ --delete
aws s3 sync ./external-cv/ s3://$BUCKET_NAME/external-cv/

if [ -n "$CLOUDFRONT_ID" ]; then
    echo "✨ Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*"
else
    echo "⚠️  No CloudFront ID set — skipping cache invalidation."
    echo "   Set CLOUDFRONT_ID env var to enable: export CLOUDFRONT_ID=XXXXX"
fi

echo "✅ Deployment complete!"
echo "🌐 Your CV is live at: $WEBSITE_URL"
echo "📦 Bucket: $BUCKET_NAME"