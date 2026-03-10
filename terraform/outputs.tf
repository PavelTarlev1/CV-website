# terraform/outputs.tf
output "cloudfront_domain" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.cv_distribution.domain_name
}

output "cloudfront_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.cv_distribution.id
}

output "s3_bucket" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.cv_bucket.id
}

output "website_url" {
  description = "Website URL"
  value       = var.domain_name != "" ? "https://${var.domain_name}" : "https://${aws_cloudfront_distribution.cv_distribution.domain_name}"
}

