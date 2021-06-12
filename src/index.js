const express = require('express');
const marked = require('marked');
const TerminalRenderer = require('marked-terminal');

marked.setOptions({
    renderer: new TerminalRenderer()
})

console.log(marked('# Starting Gunpoint API !'))

const app = express();

app.get('/', (req, res) => {
    res.json({ msg: "Welcome to Gunpoint API !" })
})