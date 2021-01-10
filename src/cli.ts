#!/usr/bin/env node
import { program } from 'commander'
import { createUniversalNotification } from './create-universal-notification'

program
  .name('universal-notification')
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
