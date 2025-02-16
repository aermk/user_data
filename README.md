# User Data Table

## About app

This is an application that displays user data in a table.
The table is automatically sorted alphabetically by `name` in ascending order.

You can filter the user table by company name using the searchbox.

## Data

The user data is fetched from https://jsonplaceholder.typicode.com/users

This table includes:

- `name`
- `username`
- `email`
- `address` - excluding `geo`.
- `phone`
- `website`
- `company` - `name` and `catchPhrase` only.

These data points are in some cases combined under the same column, if it fits logically; for example, the emails and phones under the _Contact Details_ column.

Contact details are clickable using `mailto:` and `tel:`.

## Installation

```sh
git clone https://github.com/aermk/user_data.git
cd user_data
npm install
npm run dev
```

## Built With

- React + Vite
- TypeScript
- SCSS
- HTML

## Demo link

https://aermk.github.io/user_data
