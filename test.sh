#!/usr/bin/env sh

lerna bootstrap
lerna run test

for package in packages/*
do
    basename "$package"
    FILE="$package/index.js.flow"
    # Intentionally specifying FILE twice; first time tells Flow the root dir
    flow check-contents $FILE < $FILE
done
