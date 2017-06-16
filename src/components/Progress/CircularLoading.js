import React from 'react'
import { CircularProgress } from 'material-ui'
import './style.css'

const CircularLoading = () => (
  <div className='circularContainer'>
    <CircularProgress size={80} thickness={5} />
  </div>
)

export default CircularLoading
