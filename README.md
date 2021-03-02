## Quickstart

```sh
  git clone https://github.com/vivekcs0114/northloop-backend.git
  cd northloop-backend
  Open project in your favourite editor and update the .env.development file with your API key and host 
  npm install
  npm run start
```
### `Docker Run`

## Build docker image -

docker build -t northloop-backend .

## Run docker image -

docker run --name northloop-backend -p 8000:8000 -d northloop-backend

Open [http://localhost:8000/api/healthz](http://localhost:8000/api/healthz) to view it in the browser.

