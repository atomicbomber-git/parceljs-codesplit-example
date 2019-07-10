# PHP, Vue, and ParcelJS Codesplitting Example

## What This Thing Is:
A project that shows how props rendered using PHP's json_encode() to a html page can be read by Javascript and passed as props to various Vue components. Those Vue components' codes are code splitted per component, which means that they aren't bundled along with the main `app.js` file where the main Vue code resides, and they're only loaded by the browser whenever a page needs it.

## How to Run It:
```bash
#######################
#
#  You need:
#   - php
#   - either yarn or npm
#
#######################

yarn # or 'npm install'
yarn dev # or 'npm run dev'
php -S localhost:8000 -t public

```