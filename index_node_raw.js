// const exp = require ('express');
// const project = exp();

// project.listen(441,()=>console.log('listening on port 441'));

const http = require('http');
const fileSystem =require('fs');

const products=[

    {id:1,pname :'abc1',model:'iphone3'},
    {id:2,pname :'abc2',model:'iphone4'},
    {id:3,pname :'abc3',model:'iphone5'},
]


function handler(req, res) {

    switch (req.url) {
        case '/':
            res.write('Welcome Home');
            res.end();
            break;

        case '/products':
            res.write(JSON.stringify(products));
            res.end();
            break;

        case '/image':
            const htmlFile = fileSystem.readFileSync('index.html');
            res.write(htmlFile);
            res.end();
            break;
        default:
            res.write('Not found');
            res.end();
            break;
    }

}
const server = http.createServer(handler);

const port = 441;

server.listen(port, () => console.log("listening on port 441"));