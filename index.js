// import json server
const jsonServer=require('json-server')
// server creation
const server=jsonServer.create()
// parse json data to js :-middleware
const middleware=jsonServer.defaults()

// router creation to forword to db.json
const router=jsonServer.router('./db.json')

// posrt seting
const port=process.env.port||4000
// use
server.use(middleware)

// router use
server.use(router)

// runing port
server.listen(port,()=>{
    console.log(`port is running in ${port}`)
})
