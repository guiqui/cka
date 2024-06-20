rm -rf out/
rm -rf .next/
npm run build
aws profile
aws s3 rm s3://ckaweb--recursive
aws s3 sync out/ s3://ckaweb
# cf_id=E2IPKW2THS2VKY
# echo "Invalidating cloudfront cache"
# aws cloudfront create-invalidation --distribution-id $cf_id --paths  "/*"
# echo "Done cloudfront cache"
