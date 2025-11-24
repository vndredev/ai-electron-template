# [0.2.0-dev.5](https://github.com/vndredev/ai-electron-template/compare/v0.2.0-dev.4...v0.2.0-dev.5) (2025-11-24)


### Bug Fixes

* remove @semantic-release/github plugin to use standard GITHUB_TOKEN ([ee09245](https://github.com/vndredev/ai-electron-template/commit/ee09245e320b50e68fe43d5630a74c2f67a305bd))

# [0.2.0-dev.4](https://github.com/vndredev/ai-electron-template/compare/v0.2.0-dev.3...v0.2.0-dev.4) (2025-11-24)


### Bug Fixes

* use GITHUB_TOKEN instead of GH_TOKEN in semantic-release workflow ([3eb2e2b](https://github.com/vndredev/ai-electron-template/commit/3eb2e2b485914372a1fad3cb5f7e14f166b5a967))

# [0.2.0-dev.3](https://github.com/vndredev/ai-electron-template/compare/v0.2.0-dev.2...v0.2.0-dev.3) (2025-11-24)


### Bug Fixes

* remove author variable from copyright string ([a48d4d4](https://github.com/vndredev/ai-electron-template/commit/a48d4d49f3ab6b8c5b1fa39710d17d91ff5d77d1))

# [0.2.0-dev.2](https://github.com/vndredev/ai-electron-template/compare/v0.2.0-dev.1...v0.2.0-dev.2) (2025-11-24)


### Bug Fixes

* add missing build resources for electron-builder ([8be4c43](https://github.com/vndredev/ai-electron-template/commit/8be4c43c6ffe169869d9c373b12a769faab29647))

# [0.2.0-dev.1](https://github.com/vndredev/ai-electron-template/compare/v0.1.0...v0.2.0-dev.1) (2025-11-24)


### Bug Fixes

* update semantic-release workflow with GH_TOKEN and Node.js 22 ([c25c76c](https://github.com/vndredev/ai-electron-template/commit/c25c76c0b5d8a305de5aca74c58a0b7811e58754))


### Features

* add Git Flow with semantic-release and commit enforcement ([978fa53](https://github.com/vndredev/ai-electron-template/commit/978fa53cead15881fc8ca4bc2fc9660f0ab6ef9f))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-11-24

### Added
- Initial release
- Electron + Vite + React + TypeScript setup
- Security best practices implementation
- ESLint and Prettier configuration
- Vitest unit testing
- Playwright E2E testing
- electron-log logging system
- Error boundaries for React
- Auto-updater support
- CI/CD workflows (GitHub Actions)
- Comprehensive documentation

### Security
- Context isolation enabled
- Node integration disabled in renderer
- Sandbox mode enabled
- Content Security Policy configured
- Secure IPC communication patterns
