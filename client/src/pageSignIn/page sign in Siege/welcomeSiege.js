import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function WelcomeSiege() {
    const nav = useNavigate()
    const [messages, setMessages] = useState([])
    function Navigate() {
        nav('/signin')

    }
    useEffect(()=> {
        fetch('/myMessages').then(res => res.json()).then(result => {
            setMessages(result[0])
          
          })
    })
    // console.log(messages[0][1])
    return (
        <>

            <button class="btn waves-effect waves-light red" type="submit" name="action"
            onClick={() => {
                localStorage.clear()
                Navigate()

            }
            }
        >Sign Out
        </button>
        <tr>
      <th>envoyer par:</th><th>messages:</th></tr>
       {
        messages.map(item=>{
            return(
                <tr>
                    <td>{item.postedBy}</td>
                    <td>{item.text}</td>
                </tr>)
            
        })
       }
       <button onClick={()=>{
        nav('/gestion')
       }}>Gestion des mat</button>
      

        </>
    )
}