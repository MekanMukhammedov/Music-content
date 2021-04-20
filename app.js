const express = require('express')
const mongoose = require('mongoose')
const keys = require('./keys')
const postRouter = require('./routes/post')
const path = require('path')
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 5000

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, { useUnifiedTopology: true })
			.then(() => console.log('MongoDB connected'))
			.catch(err => console.error(err))	



const app = express()

// app.use('', postRouter)
app.use('/api/post', postRouter)

app.listen(port,()=>{
	console.log(`Server run on ${port} port`)
})

const clientPath = path.join(__dirname, 'client')
app.use(express.static(clientPath))













// const http = require("http");
// const fs = require("fs");
  
// http.createServer(function(request, response){
      
//     console.log(`Запрошенный адрес: ${request.url}`);
//     // получаем путь после слеша
//     const filePath = request.url.substr(1);
//     fs.readFile(filePath, function(error, data){
              
//         if(error){
                  
//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }   
//         else{
//             response.end(data);
//         }
//     });
// }).listen(3000, function(){
//     console.log("Server started at 3000");
// });