const jsonServer=require('json-server')

const weatherIconServer=jsonServer.create()

const router=jsonServer.router('db.json')

const middleware=jsonServer.defaults()

const PORT = 3000 || process.env.PORT

weatherIconServer.use(middleware)
weatherIconServer.use(router)

weatherIconServer.listen(PORT,()=>{
    console.log(`MP Server has started at port ${PORT} and waiting for client request`);
    
})