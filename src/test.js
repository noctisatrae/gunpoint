const Gun = require('gun');

let gun = Gun('https://gunpoint.herokuapp.com/gun');

gun.get('test').put({ "d": "d" })

gun.get('test').once((data) => {
    console.log(data)
})