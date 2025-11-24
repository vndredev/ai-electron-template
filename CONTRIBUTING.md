# Contributing to AI Electron Template

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Development Setup

### Prerequisites

- Node.js 20 or higher
- pnpm 10 or higher
- Git

### Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-electron-template.git
   cd ai-electron-template
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the App

```bash
pnpm dev
```

This starts the development server with hot module replacement.

### Code Quality

Before committing, ensure your code passes all checks:

```bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Formatting
pnpm format

# Tests
pnpm test
```

### Testing

#### Unit Tests

Write unit tests for new components and utilities:

```bash
# Run tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage
pnpm test:coverage
```

Tests are located in `tests/unit/` and use Vitest + Testing Library.

#### E2E Tests

For significant features, add E2E tests:

```bash
pnpm test:e2e
```

E2E tests are in `tests/e2e/` and use Playwright.

## Code Style

### TypeScript

- Use TypeScript for all new code
- Prefer interfaces over types for object shapes
- Avoid `any` - use `unknown` if type is truly unknown
- Enable strict mode features

### React

- Use functional components with hooks
- Prefer named exports
- Keep components small and focused
- Use Error Boundaries for error handling

### File Structure

- `src/main/` - Electron main process code
- `src/preload/` - Preload scripts (bridge between main/renderer)
- `src/renderer/` - React application
- `src/types/` - Shared type definitions

### Naming Conventions

- Components: PascalCase (`MyComponent.tsx`)
- Utilities: camelCase (`myUtil.ts`)
- Constants: UPPER_SNAKE_CASE (`MY_CONSTANT`)
- Files: kebab-case for non-components (`my-utility.ts`)

## Commit Guidelines

### Commit Messages

Follow conventional commits format:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(renderer): add dark mode toggle
fix(main): resolve window creation race condition
docs(readme): update installation instructions
```

### Pull Request Process

1. Update tests for your changes
2. Update documentation if needed
3. Ensure all CI checks pass
4. Request review from maintainers
5. Address review feedback
6. Squash commits if requested

## Security

- Never commit secrets or API keys
- Use environment variables for configuration
- Follow Electron security best practices
- Report security vulnerabilities privately

## Questions?

- Open an issue for bugs or feature requests
- Use discussions for questions and ideas
- Check existing issues before creating new ones

## License

By contributing, you agree that your contributions will be licensed under the ISC License.
