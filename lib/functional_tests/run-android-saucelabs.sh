#!/bin/bash
ngrok http 7811 > /dev/null &
export SERVER_URL=`curl -sb -H "Accept: application/json" http://127.0.0.1:4040/api/tunnels | jq '.tunnels | .[0] | .public_url'`

npm run fetch-fonts
npx rnstl --searchDir ./packages --pattern './*/*.fructose.android.js' --outputFile ./components.js

# cd android && SERVER_URL=${SERVER_URL} ./gradlew assembleRelease
cd android && ./gradlew assembleRelease && cd ..

curl -u tnlweb:32571499-872a-4f5f-8b22-5dd1c2184049\
    -X POST \
    -H "Content-Type: application/octet-stream"\
    https://saucelabs.com/rest/v1/storage/tnlweb/fructose.apk?overwrite=true\
    --data-binary @${PWD}/android/app/build/outputs/apk/release/app-release.apk

kill -9 $(lsof -ti :8081)

npx compile-tests
jest .fructose/components.test.js --setupTestFrameworkScriptFile ./.fructose/setup.saucelabs.android.js --forceExit --verbose
