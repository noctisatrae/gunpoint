# Gunpoint API
Gunpoint is a restful API for [Gun](https://github.com/amark/gun). You can fire it up with :
```sh
npm run start
```

## What you can do, currently :
`/get/[key]`: Use it to get data from a definied graph (`GET` request). \
`/create/[key]`: Create a new graph (`POST` request). \
`/put/[key] + request body (in JSON)`: Add data in a specified graph (`POST` request). \
`/set/[graph 1]/in/[graph 2]`: Add the graph 1 in the graph 2 (`POST` request).