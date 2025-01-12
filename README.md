# zkWorlde demo

- App: https://zkwordle.com/

#

## Prerequisites

Before running the application, you need to have the following prerequisite installed:

- Postgres Server: The application uses Postgres for storing data. Install the server from https://www.postgresql.org/download/.

## Development

To set up the application for development, follow these steps:

1. Install the dependencies:

```bash
pnpm install
```

2. Set the environment variables: Create a .env file in the root directory and add the variables from the local .env.example file

3. Generate the Prisma client:

```bash
pnpm prisma generate
```

4. Run the database migrations:

```bash
pnpm prisma db push
```

Start the servers:

```bash
pnpm dev
```


## Build

```bash
pnpm install
pnpm build
```

