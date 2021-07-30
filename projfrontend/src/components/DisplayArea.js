import React, { useEffect, useRef, useState } from 'react';
import { getmessage, getname } from '../helper';
import './DisplayArea.css'




function DisplayArea() {
    
    
    const [values,setValues]=useState({
        messages:[]
    })
    const [users,setUsers]=useState({
        list:[]
    })
    console.log(values)
    const {messages}=values
    const {list}=users
 
    useEffect(()=>{
            getmessage().then(data=>{
            
            setValues({...values,messages:data}) 
        })
        .catch(console.log("error"))
        console.log(messages)
    },[])

    useEffect(()=>{
        getname().then(data=>{
        setUsers({...users,list:data})
        })
        .catch(console.log("fucked"))
        console.log(list)
    },[])
    
    
    
    const timestamp = Date.now();
    const time=new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(timestamp)
    
    return (   
            !(messages.length > 0) ?
            <div>loading.....</div>
            :
            <div className='displayArea'>
                <div >
                    {messages.map((mes,index)=>{
                        return(
                            <div className="container" key={mes._id}>{mes.name}<div className="timestamp">{time}</div></div>
                            
                        )
                        
                    })}
                    {list.map((lis,index)=>{
                        return(
                        <div className="container" key={lis.name}>{lis.name}</div>)
                    })
                        
                    } 
                    
                </div>
            </div>
    )
}

export default DisplayArea
