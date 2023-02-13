import React from 'react'

function SocialMedia(props) {
  return (
    <div className='social-media'>
        <i className={props.iconClass} aria-hidden="true"></i>
        <h4>{props.platform}</h4>
        <p>{props.detail}</p>
    </div>
  )
}

export default SocialMedia