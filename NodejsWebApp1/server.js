const express = require('express')
const app = express();
const port = 3000;
















//this should be the last middleware!
//next is used to chain multiple error handlers
app.use((errno, request, response, next) => {
    console.log(err)
    response.status(500).send('Internal Server Error');
});





//allos service of static file
app.use(express.static('images'));


//GETS
app.get('/',
    (request, response) => {
        response.send('Hello from Express!')
    });

app.get('/index.html',
    function(req, res) {
        res.sendFile(__dirname + "/" + "index.html");
    });

app.get('/process_get',
    function(req, res) {
        // Prepare output in JSON formata
        response = {
            first_name: req.query.first_name,
            last_name: req.query.last_name
        };
        console.log(response);
        res.end(JSON.stringify(response));
    });



app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
})