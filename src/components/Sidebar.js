import React  from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar(props) {
  return (
    <aside className={props.status}>
     <ul>
     <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'none')}> <li><i className="fa fa-home" aria-hidden='true' style={{paddingRight:'10px'}}></i>Home</li></NavLink>
     <NavLink to="/about" className={(navData) => (navData.isActive ? "active-style" : 'none')}><li><i className="fa fa-user" aria-hidden="true" style={{paddingRight:'10px'}}></i>About</li></NavLink>
     <NavLink to="/projects" className={(navData) => (navData.isActive ? "active-style" : 'none')}><li><i className="fa fa-briefcase" aria-hidden="true" style={{paddingRight:'10px'}}></i>Projects</li></NavLink>
     <NavLink to="/contact" className={(navData) => (navData.isActive ? "active-style" : 'none')}><li><i className="fa fa-comment" aria-hidden="true" style={{paddingRight:'10px'}}></i>Contact</li></NavLink>

       
      </ul>
    </aside>
  )
}

export default Sidebar