const Gun = require('gun');

// put your custom port here !
let gun = Gun('http://localhost:3001/gun');

gun.get('test').put({ "gun": "d" })

gun.get('test').once((data) => {
    console.log(data)
})