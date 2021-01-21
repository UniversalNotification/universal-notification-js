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
    const opts = program.opts()
    const notification = createUniversalNotification({
      title: opts.title
    , message: opts.message
    , iconUrl: opts.iconUrl
    , imageUrl: opts.imageUrl
    , url: opts.url
    })
    console.log(JSON.stringify(notification))
  })
  .parse()
