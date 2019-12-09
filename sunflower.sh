#!/bin/bash

sdkmanager "platform-tools" "platforms;android-28" "build-tools;28.0.0"
git clone https://github.com/android/sunflower.git
cd sunflower
./gradlew assembleDebug --debug --stacktrace
echo generated apk at ./app/build/outputs/apk/app-debug.apk
