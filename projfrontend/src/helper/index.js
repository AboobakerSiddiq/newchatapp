import { API } from "../backend"

export const message = chat => {
    return fetch(`${API}/chat`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(chat)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const getmessage=()=>{
    return fetch(`${API}/chat`,{
      method:'GET'
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>console.log(err))
  }
  
  export const getname=()=>{
    return fetch(`${API}/name`,{
      method:'GET'
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>console.log(err))
  }