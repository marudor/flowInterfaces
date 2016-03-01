#!/usr/bin/env sh
for a in $(ls packages)
do
    npm link packages/$a
done
