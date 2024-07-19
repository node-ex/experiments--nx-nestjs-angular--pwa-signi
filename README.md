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

## Formatting

We use Prettier to format the code. To run it, use `format*` commands from `package.json` or Nx commands. Put file paths and patterns to ignore into `.prettierignore`.

```bash
# Run format checking for a single project
npx nx format:check --projects app-nest-1

# Run format fixing for a single project
npx nx format:write --projects app-nest-1

# Run format checking for all non-ignored files in the repository
npx nx format:check --all

# Run format checking for all project files only (inside of `./apps` and `./libs`)
npx nx format:check --libs-and-apps

# Run format checking for files outside of Nx projects (outside of `./apps` and `./libs`)
npx prettier --check . '!./apps' '!./libs'

# Run format fixing for files outside of Nx projects (outside of `./apps` and `./libs`)
npx prettier --write . '!./apps' '!./libs'

# Run format checking only for affected projects (useful for CI)
npx nx format:check --base=main
npx nx format:check --base=main --head=HEAD
npx nx format:check --base=HEAD
```

VSCode "Prettier" extension is recommended to format files on save. See example `.vscode/settings.template.json` for recommended settings.
