# nestjs-angular-nx--template--basic

## Local development

### Requirements

- Node.js
  - See `.tool-versions` for the recommended version
- `pnpm`
  - Installed globally

### Setup

1. `pnpm install`

## Monorepo tooling

This project uses Nx as a monorepo tool. If you want to run Nx commands, either use CLI `nx` command or VScode "Nx console" extension (highly recommended).

### Run the whole stack

Make sure setup is completed and is up-to-date.

You can start each app manually:

```bash
# app-nest-1
pnpm exec nx run app-nest-1:serve
# Access via: http://localhost:3000

# app-angular-1
pnpm exec nx run app-angular-1:serve
# Access via: http://localhost:4200
```

### Build and preview

```bash
# Build all apps
pnpm exec nx run-many --target=build --all=true

# Build a single app
pnpm exec nx run app-nest-1:build

# Preview backend
pnpm exec nx run app-nest-1:preview
node ./dist/apps/app-nest-1/main.js

# Preview frontend
pnpx serve --single ./dist/apps/app-angular-1/browser
```
