#!/bin/bash

set -eux

ZIP_FILE_PATH=$1

rm -rf ./.data/result
mkdir ./.data/result -p
unzip $ZIP_FILE_PATH -d ./.data/result/

node ./script/process_build_sql.js
