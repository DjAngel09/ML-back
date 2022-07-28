# Backend products mercadolibre

## Prerequisites

To run this sample you will need the following:

* Install Node.js from [here](http://nodejs.org)
* Install Git from [here](https://git-scm.com/downloads)
* Have shell or command line (If you use Mac and Linux, you have a terminal pre-installed, if you are using windows you can use git bash)

## Prerequisites (optional)

* install a text editor from [here](https://code.visualstudio.com/download).

## Download the sample application and modules

Next, clone the sample repo and install the NPM.

From your shell or command line:

```bash
git clone https://github.com/DjAngel09/ML-back.git

cd ML-back

npm install
```

## Run the application

```bash
npm run dev
```

## All ready to use the application

> You will have a server successfully running on `http://localhost:<PORT>`.
> The service will be available at `http://localhost:<PORT>/api/items/`.

## Cards services

| Endpoint | HTTP | Description |
| --- | --- | ---|
| `*/api/items?q=:query` | GET | GET products
| `*/api/items/:id` | GET | Get product

### Params

Mandatory send params for the correct functioning:

* **id** (ObjectId): Unique identifier of the product.

## Extra commands

Run the unit tests

```bash
npm run test
```

## License

MIT (c) Benjamin Manuel
