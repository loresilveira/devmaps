const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-p082g.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()); // fazer com que o express entenda req com json

//qeury params: resquest.query
//route params: request.params

app.get('/', (request,response)=>{
    console.log(request.query)
    return response.json({messahe: "Hello Omnistack"});
});

app.listen(3333);