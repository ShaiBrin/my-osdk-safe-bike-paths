# VeloSure

This project was generated with [`@osdk/create-app`](https://www.npmjs.com/package/@osdk/create-app) and demonstrates using the Ontology SDK package `@safebikepathsosdk/sdk` with React on top of Next.js. Check out the [Next.js](https://nextjs.org/docs) docs for further configuration.


## Video Demo
[VeloSure Demo](https://youtu.be/Xqe-AljeQe8)

## Developing

Run the following command or equivalent with your preferred package manager to start a local development server on `http://localhost:8090`:

```sh
npm run dev
```

Development configuration is stored in `.env.development`.

In order to make API requests to Foundry, CORS must be configured for the stack to allow `http://localhost:8090` to load resources. If this has not been configured and you are unable to request this, you can alternatively generate your project again with `--corsProxy true` to use a proxy for API requests during local development. The configured OAuth client must also allow `http://localhost:8090/auth/callback` as a redirect URL.

## Deploying

Run the following command or equivalent with your preferred package manager to create a production build of your application:

```sh
npm run build
```

Production configuration is stored in `.env.production`.

If you did not fill in the URL your production application will be hosted on you will need to fill in the `NEXT_PUBLIC_FOUNDRY_REDIRECT_URL` in `.env.production`. A default test is included in `env.test.ts` to verify your production environment variables which you can enable by removing the skip condition or running tests with the environment variable set `VERIFY_ENV_PRODUCTION=true`.

In order to make API requests to Foundry, CORS must be configured for the stack to allow the production origin to load resources. This will be automatically done for you if you are using Foundry website hosting. The configured OAuth client must also allow the production origin auth callback as a redirect URL.

A `foundry.config.json` file is included in the root of this project to make deploying to Foundry website hosting with [`@osdk/cli`](https://www.npmjs.com/package/@osdk/cli) easier. If you are not using Foundry website hosting for your application you may delete this file.

### Content Security Policy (CSP)

⚠️ Building this Next.js application will produce .html files that will require `'unsafe-inline'` in the `script-src` directive of your Content Security Policy. See https://github.com/vercel/next.js/discussions/54152 for more info.
