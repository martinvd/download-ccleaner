#!/usr/bin/env node
const path = require('path');
const download = require('download');
const argv = require('minimist')(process.argv.slice(2));

const downloadFolder = path.resolve(argv._[0] || './ccleaner');

download('https://www.piriform.com/ccleaner/download/portable/downloadfile', downloadFolder, {extract: true})
  .then(() => console.log(`Downloaded to ${downloadFolder}`))
  .catch(err => console.log(err.message));
