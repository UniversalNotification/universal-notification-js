#!/usr/bin/env node
import { path as appRoot } from 'app-root-path'
import { program } from 'commander'
import { createUniversalNotification } from './create-universal-notification'
import * as path from 'path'

const pkg = require(path.join(appRoot, 'package.json'))

program
  .name('universal-notification')
  .version(pkg.version)
  .description('Command-line UniversalNotification creator.')
  .option('--title <title>')
  .option('--message <message>')
  .option('--icon-url <iconUrl>')
  .option('--image-url <imageUrl>')
  .option('--url <url>')
  .action(() => {
    const notification = createUniversalNotification({
      title: program.title
    , message: program.message
    , iconUrl: program.iconUrl
    , imageUrl: program.imageUrl
    , url: program.url
    })
    console.log(JSON.stringify(notification))
  })
  .parse()
