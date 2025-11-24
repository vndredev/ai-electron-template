# AI Electron Template

A modern, production-ready Electron application built with Vite, React, and TypeScript.

## Features

- ⚡ **Vite** - Lightning fast HMR and build
- ⚛️ **React 19** - Latest React with TypeScript
- 🔒 **Secure** - Following Electron security best practices
- 🎨 **ESLint + Prettier** - Code quality and formatting
- 🧪 **Testing** - Vitest for unit tests, Playwright for E2E
- 📦 **Auto-Update** - Built-in update mechanism
- 📝 **Logging** - electron-log for comprehensive logging
- 🛡️ **Error Boundaries** - Graceful error handling
- 🔧 **Type-Safe** - Full TypeScript support with strict mode

## Project Structure

```
ai-electron-template/
├── src/
│   ├── main/           # Electron main process
│   ├── preload/        # Preload scripts
│   ├── renderer/       # React application
│   └── types/          # Shared TypeScript definitions
├── tests/
│   ├── unit/           # Vitest unit tests
│   └── e2e/            # Playwright E2E tests
├── public/             # Static assets
└── out/                # Build output
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with HMR |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm test` | Run unit tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:e2e` | Run E2E tests |
| `pnpm test:coverage` | Generate test coverage report |
| `pnpm pack` | Package app (unpacked) |
| `pnpm dist` | Create distributable |
| `pnpm dist:mac` | Build for macOS |
| `pnpm dist:win` | Build for Windows |
| `pnpm dist:linux` | Build for Linux |

## Development

### Hot Module Replacement

- **Renderer Process**: Automatic HMR via Vite
- **Main Process**: Auto-restart on changes
- **Preload Scripts**: Auto-restart on changes

### Debugging

Open DevTools in development mode (automatically enabled).

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

- `VITE_*` - Available in renderer process
- `MAIN_VITE_*` - Available in main process
- `PRELOAD_VITE_*` - Available in preload

## Testing

### Unit Tests

```bash
pnpm test
```

Unit tests use Vitest and Testing Library.

### E2E Tests

```bash
pnpm test:e2e
```

E2E tests use Playwright to test the complete application.

## Building

### Development Build

```bash
pnpm build
```

### Production Release

```bash
pnpm dist
```

Builds for current platform. Use `dist:mac`, `dist:win`, or `dist:linux` for specific platforms.

## Security

This template follows [Electron security best practices](https://www.electronjs.org/docs/latest/tutorial/security):

- ✅ Context Isolation enabled
- ✅ Node Integration disabled in renderer
- ✅ Sandbox enabled
- ✅ Content Security Policy configured
- ✅ Web Security enabled
- ✅ Secure IPC communication

## Auto-Updates

Auto-updates are configured via `electron-updater`. Update settings in `electron-builder.yml`:

```yaml
publish:
  provider: generic
  url: https://your-update-server.com
```

## CI/CD

GitHub Actions workflows are included:

- **CI** (`ci.yml`) - Runs on push/PR
- **Release** (`release.yml`) - Builds on version tags

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

## License

ISC

## Tech Stack

- [Electron](https://www.electronjs.org/) - Cross-platform desktop apps
- [Vite](https://vite.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [electron-vite](https://electron-vite.org/) - Electron build tool
- [electron-builder](https://www.electron.build/) - Package and distribute
- [electron-updater](https://www.electron.build/auto-update) - Auto-updates
- [electron-log](https://github.com/megahertz/electron-log) - Logging
- [Vitest](https://vitest.dev/) - Unit testing
- [Playwright](https://playwright.dev/) - E2E testing
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code formatting
