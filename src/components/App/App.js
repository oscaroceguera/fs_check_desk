import React, {PropTypes} from 'react'

const App = ({children}) => <div style={{padding: '1em'}}>{children}</div>

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
