[![Netlify Status](https://api.netlify.com/api/v1/badges/08789b94-c19c-4ad4-8953-df9519e7e392/deploy-status)](https://app.netlify.com/sites/rick-and-morty-char-web/deploys)

# Rick and Morty Characters :sparkles:

A fun web app used for displaying character profiles from the show `Rick and Morty`.

## Deployment

[Deployment Link](https://rick-and-morty-char-web.netlify.app/)

The project has been deployed on Netlify.

## Tech Stack

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/) with BEM
- [React Icons]()
- [Material UI](https://mui.com/) for Pagination
- [React Testing Library](https://testing-library.com/) + [Jest](https://jestjs.io/)

## Flows

- The home page shows the list of character cards.
- Each character card has 2 clickable fields:

  - Last Location - Opens the Modal with info about location
  - Appears on - Opens a modal to display the list of chapters the character appeared on.

## API - Rickandmortyapi.com

The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty.

- `/character`
- `/episode`
- `/location`

These also support query params, visit the api docs for more info.

## Setup steps

This project uses `14.17.0` version of node, as mentioned in the .nvmrc file.

Execute the following command to install the deps:

```
npm install
```

## Testing

For unit and snapshot testing this project uses RTL(React testing library) + Jest.
Tests can be run by simply executing the following command:

```
npm run test
```

For coverage execute the following command and the current coverage stands at `96%`

```
npm run test -- --coverage --watchAll
```
