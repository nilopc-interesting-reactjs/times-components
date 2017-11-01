#!/bin/bash
npm run fetch-fonts
npx rnstl --searchDir ./packages --pattern './*/*.fructose.android.js' --outputFile ./components.js

yarn react-native run-android --variant=release

curl -u tnlweb:32571499-872a-4f5f-8b22-5dd1c2184049\
    -X POST \
    -H "Content-Type: application/octet-stream"\
    https://saucelabs.com/rest/v1/storage/tnlweb/fructose.apk?overwrite=true\
    --data-binary @/Users/mattlowry/dev/news/times-components/android/app/build/outputs/apk/release/app-release.apk

npx compile-tests
jest .fructose/components.test.js --setupTestFrameworkScriptFile ./.fructose/setup.saucelabs.android.js --forceExit --verbose
