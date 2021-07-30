const User=require("../models/user")

exports.putname = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          error: "Can't Store the chat in DB"
        });
      }
      res.json({user})
    });
  };

  exports.getname=(req,res)=>{
    User.find().exec((err,admins)=>{
      if(err){
        return res.status(400).json({
        error: "No Chats Found"
        });
      }
      res.json(admins)
    })
  }