import React from 'react'
import PageTittle from '../components/PageTittle'
import SocialMedia from '../components/SocialMedia'

function Contact() {
  return (
    <main className='contact'>
      <div className='animated'>
       <PageTittle title={'Contact'}/>
       <h2>Do you have any questions?</h2>
       <h3>I'm more than happy to answer</h3>
        <div className='social-media-container'>
          <a href='https://api.whatsapp.com/send/?phone=6281290859747&text&app_absent=0&lang=id' target="_blank" rel="noreferrer">
            <SocialMedia iconClass={'fa fa-whatsapp'} platform={'WhatsApp'} detail={'+62 812 9085 9747'}/>
            </a>
          <a href='https://www.instagram.com/_ahmadrazi_/' target="_blank" rel="noreferrer">
            <SocialMedia iconClass={'fa fa-instagram'} platform={'Instagram'} detail={'_ahmadrazi_'}/>
          </a>
          <a href='https://www.linkedin.com/in/ahmad-razi-559b69204/' target="_blank" rel="noreferrer">
            <SocialMedia iconClass={'fa fa-linkedin'} platform={'LinkedIn'} detail={'linkedin.com/in/ahmad-razi-559b69204/'}/>
          </a>
          <a href='https://www.facebook.com/razi.ahmad.9406' target="_blank" rel="noreferrer">
            <SocialMedia iconClass={'fa fa-facebook'} platform={'Facebook'} detail={'Razi Ahmad'}/>
          </a>
          <a href='mailto: arazi916@gmail.com' target="_blank" rel="noreferrer">
          <SocialMedia iconClass={'fa fa-envelope'} platform={'Email'} detail={'arazi916@gmail.com'}/>
          </a>
          <a href='https://github.com/razi16' target="_blank" rel="noreferrer">
          <SocialMedia iconClass={'fa fa-github'} platform={'Github'} detail={'razi16'}/>
          </a>
          
        </div>



      </div>
    </main>
  )
}

export default Contact