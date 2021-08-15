# Gunpoint API
![Docker ?](https://github.com/noctisatrae/gunpoint/actions/workflows/docker-publish.yml/badge.svg) ![Issues ?](https://img.shields.io/github/issues/noctisatrae/gunpoint) ![Stars ?](https://img.shields.io/github/stars/noctisatrae/gunpoint) ![Forks ?](https://img.shields.io/github/forks/noctisatrae/gunpoint) \
\
Gunpoint is a restful API for [Gun](https://github.com/amark/gun). You can fire it up with :
```sh
npm run start
```

Instead of downloading it, you can use the Docker package by using :
```sh
docker pull ghcr.io/noctisatrae/gunpoint:master
```
\
If you want to try Gunpoint, [it's here !](https://gunpoint.herokuapp.com) (Main playground running latest release) \
If you want to test the new features,[ click here !](https://gunpoint-dev.herokuapp.com) (Devlopment playground) \
\
**By the way, take a look at what's comming next :**
- - [ ] Websocket support
- - [ ] GraphQL URI 
- - [ ] Redis compatibility
- - [ ] A `/set` URI using `gun.set()`
- - [ ] Be able to submit array (array to JS Object function)
- - [X] Be able to configure Gun with `config.json`
- - [X] Docker image with CI on `master` branch

## What you can do, currently :
`/get/[key]`: Use it to get data from a definied graph (`GET` request). \
`/put/[key] + request body (in JSON)`: Add data in a specified graph (`POST` request). \
`/put/[graph 1]/in/[graph 2]`: Put the graph 1 in the graph 2 (`POST` request). \
`/delete/[data]/in/[graph]`: Delete defined data in a specified graph (DELETE request).
