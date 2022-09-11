import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../compnent/assets/css/dropdown.css'

export default function Dropdown() {
    const[state,setstate]=useState (false);
    const showDropdown=() => {setstate(true);}
    const hideDropdown=() => {setstate(false);}

    
  return (
    <div className='dropdown'>
        <div className='dropdown-menu' onMouseEnter={showDropdown} onMouseLeave={ hideDropdown}>
                    S'impliquer   
            {state ?( <ul className='dropdown-list'  onMouseEnter={showDropdown}>
                <li className='dropdown-1' ><Link to={'/form2'}>Rejoignez notre communauté </Link></li>
                <li className='dropdown-2' ><Link to={'/form'}>Devenir Bénévole</Link></li>
            </ul>):null}
           
        </div>
    </div>
  )
}
