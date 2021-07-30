const Chat=require("../models/chat");
const User=require("../models/user")

exports.putChat = (req, res) => {
    const chat = new Chat(req.body);
    chat.save((err, chat) => {
      if (err) {
        return res.status(400).json({
          error: "Can't Store the chat in DB"
        });
      }
      res.json({chat})
    });
  };

  exports.getChat=(req,res)=>{
    Chat.find().exec((err,chats)=>{
      if(err){
        return res.status(400).json({
        error: "No Chats Found"
        });
      }
      res.json(chats)
    })
  }
 