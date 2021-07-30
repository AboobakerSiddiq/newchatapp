import React, { useEffect, useRef, useState } from 'react';
import './ChatArea.css';
import SendIcon from '@material-ui/icons/Send';

import {message} from "../helper/index";
import {io} from "socket.io-client";
import { getmessage } from '../helper';


function ChatArea() {
  const socket=useRef()
    const [chats,setChat]=useState({
      name:"",
      time:null,
      error:"",
      success:false
    })
    const [show,setShow]=useState([])
    
    
    const [values,setValues]=useState({
      messages:[]
  })
    const {messages}=values
    
    const {name,error,success}=chats
    const timestamp = Date.now();
    const time=new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(timestamp)
    const handleChange = name => event => {
      setChat({ ...chats, error: false, [name]: event.target.value,time:time });
    };

    //socket useeffect
    useEffect(()=>{
        socket.current=io("ws://localhost:8900")
        
    },[])

    useEffect(()=>{
      socket.current.emit("addUser",socket.id)
      socket.current.on("getUser",sockets=>{
          console.log(sockets)
      })

  },[socket])

  
//DB useEffect

useEffect(()=>{
        getmessage().then(data=>{
        
        setValues({...values,messages:data}) 
    })
    .catch(console.log("error"))
},[])

    useEffect(()=>{
      socket.current.on("getMessage",text=>{
       setShow(text)
      })
    },[show])
    const onSubmit = e => {
        e.preventDefault();
        setChat({ ...chats, error: false,success:true });
        message({name})
        .then(data => {
          setChat({
            ...chats,
            name: "",
            time:null,
            error: "",
            success: true
          });
        }
        )
      .catch(console.log("Error in signup"));

      socket.current.emit("sendMessage",{
        text:name
      })
      
      };
    return (
        
        <div className='chatarea'>
            
            <div className='scroll'>
            
            <div className='displayArea'>
                <div >
                    {messages.map((mes,index)=>{
                        return(
                            <div className="container" key={mes._id}>{mes.name}</div>
                            
                        )
                        
                    })}
                    {
                      show.map((shw)=>{
                        return(
                            <div className="container" >{shw.text}</div>
                            
                        )
                      })
                    }
                </div>
            </div>
            </div>
             
            <div className="input">
            <div className='inputbox_div'>
            <input value={name}  onChange={handleChange("name")} type="text" placeholder='Type a message' size="48.5" className="input_box"/>
            <SendIcon variant="contained" color="secondary" onClick={onSubmit} className='sendIcon' style={{ fontSize:20 }}/>
            
            </div>
            
            </div>
            
        </div>
    )
}

export default ChatArea
