# Nuxt 3 SSR Miss Styling Reproduction

This repository is a minimal reproduction of project in which tailwind styling is not applied on SSR side

From "server" we will get tailwind classes using suspense request ( case for dynamic configuration from other side)

In Nuxt components we pass that class to each of "header", "main" and "footer" and no style is applied (case when type new code to refresh live server not resolving anything)

Classes we got from backend we also just render as plain text to assure that they actually exists

## Next framework support example

![Screenshot Before](./example-screenshots/screenshot-before.png?raw=true "Before optimize styling on SSR")

After toggling flag "optimizeCss" in next configuration, styling on SSR working even with tailwind

![Screenshot After](./example-screenshots/screenshot-after.png?raw=true "After optimize styling on SSR")

## Screenshot from this repository

![Screenshot After](./example-screenshots/nuxt-screenshot.png?raw=true "After optimize styling on SSR")

## Getting started

Make sure to install the dependencies:

```bash
# install in client
npm install

# start server (port 4000)
node ./server/index

# start client (port 3000)
cd client && npm run dev

```

## Visit

Server `http://localhost:4000`

Client `http://localhost:3000`:

