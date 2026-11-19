# lenaimdahl.de

My personal website: who I am, a few projects from my [atelier](https://atelier.lenaimdahl.de) and a blog about our family life with disability. German by default, English with the button in the header or via `?lang=en`.

Built with React, TypeScript and Vite. The styles are plain CSS, no framework.

## What you need

- [Node.js](https://nodejs.org) 26 (same as in the Dockerfile and CI)

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

Before pushing, I run:

```bash
npm run format:check
npm run lint
npm run build
```

`npm run format` fixes the formatting. CI runs the same checks on every push and pull request.

## Docker

The Dockerfile builds the site and serves it with nginx on port 8080:

```bash
docker build -t lenaimdahl.de .
docker run -p 8080:8080 lenaimdahl.de
```

`nginx.conf` sets the security headers, long caching for the hashed files in `/assets/` and answers unknown URLs with a real 404.

## Deployment

## License

Copyright (C) 2026 Lena Imdahl

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3, see [LICENSE](LICENSE).
