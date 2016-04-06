#!/usr/bin/env sh
flowBin=$(which flow 2> /dev/null)
if ! test -f $flowBin || [ -z $flowBin ]; then
    flowBin="./node_modules/.bin/flow"
fi
for a in $(ls packages)
do
    echo $a
    $flowBin check-contents < packages/$a/index.js.flow
done
