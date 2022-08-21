// import Dropdown from 'react-bootstrap/Dropdown';
// import '../compnent/assets/css/dropdown.css'


// function BasicExample() {
//   return (
//     <div className='dropdown'>
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Découvrir
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Mission</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Equipe</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Bibliothèque Juridique</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown> </div>
//   );
// }

// export default BasicExample;
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
            Découvrir          
            {state ?( <ul className='dropdown-list'  onMouseEnter={showDropdown}>
                <li className='dropdown-1'><Link to={'/Mission'}>Mission et Equipe </Link></li>
                {/* <li className='dropdown-2'><Link to={'/Equipe'}>Equipe </Link></li> */}
                <li className='dropdown-3'><Link to={'/Bib'}>Bibliothèque Juridique </Link></li>
            </ul>):null}
           
        </div>
    </div>
  )
}
