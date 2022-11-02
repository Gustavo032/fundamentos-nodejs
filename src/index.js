const express = require('express');

const app = express();


//localhost:8080

app.get("/", (request, response)=>{
	return response.json({message: "Hello world"})
})

app.listen(8080);