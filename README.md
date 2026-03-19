# carlosparamio.com

Personal website built with [Astro](https://astro.build/).

## Development

```bash
docker compose up
```

Site runs at http://localhost:4321

After changing dependencies in `package.json`:

```bash
docker compose down -v && docker compose up --build -d
```

## Build

```bash
npm run build
```

Output in `dist/` directory.

## Deployment

Automatically deployed to GitHub Pages on push to `master` branch.

Live at: https://carlosparamio.com
