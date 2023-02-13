import React, {useReducer} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import NavButton from '../components/NavButton'

export const toggleContext = React.createContext();

function Main() {



  let initialState = 'closed';

  const reducer = (state, action) => {
    switch (action) {
      case 'open':
        return 'open';
      case 'closed':
        return 'closed'
      default:
        return state;
    }
  }


  const [toggle, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
   
    <toggleContext.Provider value={{toggleState: toggle, toggleDispatch: dispatch}}>
       <NavButton />
    </toggleContext.Provider>
    <Sidebar status={toggle}/>
    <Routes>
        <Route path='/' element={<Home handleClick={() => dispatch('closed')}/>}/>
        <Route path='/about' element={<About handleClick={() => dispatch('closed')}/>}/>
        <Route path='/projects' element={<Projects handleClick={() => dispatch('closed')}/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Main