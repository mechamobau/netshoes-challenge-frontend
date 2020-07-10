# Netshoes Challenge

This is a challenge to integrate the Frontend Team at Netshoes. This test is based on the repo [netshoes/front-end-recruitment](https://github.com/netshoes/front-end-recruitment) with all the description.

## How to run

The project is a monorepo managed by [PNPM](https://github.com/pnpm/pnpm) containing the backend and frontend, it's needed to install it before.

```
npm i -g pnpm
```

So, with the pnpm installed it's needed to install all dependencies and run one of each bellow commands to run the backend and frontend respectively:

```bash
# Install all dependencies
pnpm recursive install

# Run server application
pnpm run dev --filter @netshoes/server

# Run frontend application
pnpm run start --filter @netshoes/web
```

## LICENSE

[MIT](LICENSE)