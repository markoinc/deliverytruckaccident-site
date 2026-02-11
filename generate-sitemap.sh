#!/bin/bash
DOMAIN="https://deliverytruckaccident.com"
echo '<?xml version="1.0" encoding="UTF-8"?>'
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

# Find all index.html files and convert to URLs
find dist -name "index.html" -type f | sort | while read file; do
  # Convert dist/path/index.html to /path/
  path="${file#dist}"
  path="${path%/index.html}/"
  if [ "$path" = "/" ]; then
    path="/"
  fi
  echo "<url><loc>${DOMAIN}${path}</loc></url>"
done

echo '</urlset>'
