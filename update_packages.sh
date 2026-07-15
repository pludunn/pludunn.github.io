git clone https://github.com/emareg/classlesscss.git /tmp/cssrepo
cp /tmp/cssrepo/docs/classless.css .
cp -r /tmp/cssrepo/docs/addons .
rm -rf /tmp/cssrepo
curl -LO https://unpkg.com/js-cookie/dist/js.cookie.min.js
curl -LO https://unpkg.com/@highlightjs/cdn-assets/highlight.min.js
