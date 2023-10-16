const exp = require('express');
const project = exp();
const products = [

    { id: 1, pname: 'abc1', model: 'iphone3' },
    { id: 2, pname: 'abc2', model: 'iphone4' },
    { id: 3, pname: 'abc3', model: 'iphone5' },
]

project.listen(441, () => console.log('listening on port 441'));

project.get('/', (req, res) => {
    res.send('Express JS');
});
project.get('/products', function (req, res) {

    res.json(products);
});
project.get('/images', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});