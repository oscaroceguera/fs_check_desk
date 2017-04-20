import React from 'react'
import CheckIcon from './checked.svg'
import './Logo.css'

const IMG_WITDH = { width: '3em' }

const Logo = () => (
  <div className='logo'>
    <div className='logo__container'>
      <div className='logo__container__bg'>
        <div><img style={IMG_WITDH} src={CheckIcon} alt='check-icon'/></div>
        <div className='title__logo'>{'checks'}</div>
      </div>
    </div>
  </div>
)

export default Logo
