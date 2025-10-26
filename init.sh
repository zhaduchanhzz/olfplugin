#!/bin/bash
echo "Patch OnlyOffice default language..."

# Patch backend config
sed -i 's/"lang": "en"/"lang": "vi"/g' /etc/onlyoffice/documentserver/default.json || true

# Patch frontend config (tuỳ version, có thể khác folder, nên bạn check bằng find)
find /var/www/onlyoffice/documentserver/web-apps/ -type f -name "default.json" -exec sed -i 's/"lang": "en"/"lang": "vi"/g' {} \; || true

echo "Patch done. Starting DocumentServer..."

# Gọi lại entrypoint gốc
exec /app/ds/run-document-server.sh
