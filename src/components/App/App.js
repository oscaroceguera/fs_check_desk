import React from 'react'
import PropTypes from 'prop-types'

const App = ({children}) => <div style={{padding: '1em'}}>{children}</div>

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
