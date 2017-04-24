import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import './style.css'

const CircularLoading = () => (
  <div className='circularContainer'>
    <CircularProgress size={80} thickness={5} />
  </div>
)

export default CircularLoading
