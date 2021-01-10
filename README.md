# universal-notification

The JavaScript implementation of [UniversalNotification](https://github.com/UniversalNotification/spec) with the CLI program for creating UniversalNotification.

## Install

```sh
npm install --save universal-notification
# or
yarn add universal-notification

```

## API

### createUniversalNotification

```ts
function createUniversalNotification(
  params: {
    title?: unknown
    message?: unknown
    iconUrl?: unknown
    imageUrl?: unknown
    url?: unknown
  }
): UniversalNotification
```

### parseUniversalNotification

```ts
function parseUniversalNotification(text: string): UniversalNotification | null
```

## CLI

### Install
```sh
npm install -g universal-notification
# or
yarn global add universal-notification
```

#### Install from source

```sh
yarn install
yarn build
yarn global add "file:$(pwd)"
```

### Usage

```sh
universal-notification --help
```
