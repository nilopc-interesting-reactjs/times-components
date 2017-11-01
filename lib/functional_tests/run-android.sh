#!/bin/bash
/Users/kourosaliabadi/Library/Android/sdk/tools/emulator @NEXUS_5X_API_22 -no-boot-anim &
EMU_PID=$!
adb wait-for-device

npm run fetch-fonts
npx rnstl --searchDir ./packages --pattern './*/*.fructose.android.js' --outputFile ./components.js

yarn react-native run-android --variant=release

kill -9 $(lsof -ti :8081)

adb reverse tcp:8081 tcp:8081
adb reverse tcp:7811 tcp:7811
adb reverse tcp:4723 tcp:4723

appium &
APPIUM_PID=$!

npx compile-tests
jest .fructose/components.test.js --setupTestFrameworkScriptFile ./.fructose/setup.android.js --forceExit --verbose

kill -9 $APPIUM_PID
kill -9 $EMU_PID
