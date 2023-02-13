import React from 'react'

function PageTittle(props) {
  return (
    <header>
      <h1 className='page-title'>{props.title}</h1>
      <hr className='page-title-line' style={{width: '153px'}}/><br/>
      <hr className='page-title-lower-line' style={{width: '103px'}}/>
    </header>
  )
}

export default PageTittle