import React from 'react'

const App = (props) => {
  return (
    <div>
      <h1>Parte del APP</h1>
      {props.children}
    </div>
  )
}

export default App
