const io=require("socket.io")(8900,{
  cors:{
    origin:"http://localhost:3000"
  }
})
let users=[];
const addUser=(socketId)=>{
  users.push({socketId})
}
const removeUser=(socketId)=>{
  users=users.filter(user=>user.socketId !==socketId)
}
io.on("connection",(socket)=>{
  console.log("a user conected")
  io.emit("welcome","this is socket")
  socket.on("addUser",(socketId)=>{
      addUser(socket.id)
      io.emit("getUser",users)
  })

  //send messages:
  socket.on("sendMessage",({text})=>{
    console.log(text)
    io.emit("getMessage",{text})
  })
  socket.on("disconnect",()=>{
    console.log("a user disconnected");
    removeUser(socket.id)
    io.emit("getUser",users)
  })
})