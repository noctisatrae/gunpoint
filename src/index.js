const express = require('express');
const marked = require('marked');
const Gun = require('gun');
const TerminalRenderer = require('marked-terminal');

const config = require('../config.json');

const PORT = config.port;

const gun = Gun();

marked.setOptions({
    renderer: new TerminalRenderer()
})

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({ msg: "Welcome to Gunpoint API !" })
})

app.get('/get/:key', (req, res) => {
    
    const { key } = req.params;
    
    let toFetch = gun.get(key);
    toFetch.on((data) => {
        res.status(200).send({ msg: `Gunpoint has fetched this: '${key}'`, content: data })
    })
});

app.post('/create/:key', (req, res) => {
    const { key } = req.params;

    let toCreate = gun.get(key);
    res.status(200).send({ msg: `${key} has been successfully created !` })
})

app.post('/put/:key', (req, res) => {

    const { key } = req.params;
    const dataToAdd = req.body;

    if (!dataToAdd) {
        console.log("No data !");
        res.status(418).sendFile({ error: "There's no data in your request !" })
    } else {
        let toFetch = gun.get(key);
        let dataFetched;
    
        toFetch.put(dataToAdd)
        toFetch.on((data) => { 
            res.status(200).send({success: "YEAH !",dataAdded:dataToAdd, content: data }) 
        })
    }
})

app.post('/set/:key/in/:key2', (req, res) => {
    const toSetIn = req.params.key;
    const where = req.params.key2;

    gun.get(where).set(toSetIn);
    res.status(200).send({ success: `${toSetIn} has been successfully put in ${where} !` })
})

console.log(marked('# Starting Gunpoint API !'))
app.listen(PORT, () => { console.log(marked('**Gunpoint is running at http://localhost:' + PORT + '**')) })