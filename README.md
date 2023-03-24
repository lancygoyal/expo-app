# Expo Mobile App

This repo contains code for the Mobile app, built using React Native.

## Local Development Setup

1. Clone the repository
2. Create a `.env` file with the following environment variables.

```
# For local server
# SERVER_HOST=http://localhost:3000
SERVER_HOST=http://localhost:3000

```

```bash
yarn install && expo start
```

**Start running on an Android / iOS simulator:**

```bash
yarn expo:ios
```

```bash
yarn expo:android
```

**Lint checking and autofix:**

- **Prettier:**

```bash
yarn format:check
```

```bash
yarn format:fix
```

- **Eslint:**

```bash
yarn eslint:check
```

```bash
yarn eslint:fix
```

## Standalone Build for Native Testing

**Run `expo login` first to login in to your expo account**

- Build Android with `prevew` profile:

```bash
yarn build:android:preview
```

- Build iOS with `prevew` profile:

```bash
yarn build:ios:preview
```

App built with the `preview` profile can only run on an simulator devices. Config `eas.json` file to add more profile.
