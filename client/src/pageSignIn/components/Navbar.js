import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import M from 'materialize-css'
export default function(){
    const nav=useNavigate();
    function Navigate(){
        nav('/signin')
        
    }
  return (
    <div><nav>
    <div class="nav-wrapper blue darken-4">
      <Link to={'/'} class="brand-logo">AGIM</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
       
        {/* <li><Link to={'/Espace'}>Espace d'échange</Link></li> */}
        <li>  <button class="btn waves-effect waves-light red" type="submit" name="action" 
        onClick={()=>{
            localStorage.clear()
         Navigate()

        }
    }
        >Sign Out
    
  </button>
</li>
      </ul>
    </div>
  </nav></div>
  )
}