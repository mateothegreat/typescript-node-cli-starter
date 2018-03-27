# Typescript Node.js CLI Starter

[![Greenkeeper badge](https://badges.greenkeeper.io/mateothegreat/typescript-node-cli-starter.svg)](https://greenkeeper.io/)

```sh
yomateod@heman:/workspace/api/platform-api-client$ bin/platform-api-client -h

  Usage: platform-api-client [options] [command]

  Options:

    -V, --version                       output the version number
    -h, --help                          output usage information

  Commands:

    run [options] <somearg> [optional]  run with one optional and one required arguments

  Examples:

    $ custom-help --help
    $ custom-help -h

yomateod@heman:/workspace/api/platform-api-client$ bin/platform-api-client run -h

  Usage: run [options] <somearg> [optional]

  run with one optional and one required arguments

  Options:

    -d, --dryrun   Generate message but do not send.
    -v, --verbose  Output more verbosity (debug information).
    -h, --help     output usage information
```