import React from 'react'

// TODO: 5 Guardar reactivo por individual
// TODO: 6 Opción de actualizar cuando este este guardado
// TODO: Prop types

class ChecklistContainer extends React.Component {
  render () {
    const {items} = this.props.checklist
    return (
      <div style={{border: '1px solid black'}}>
        {
          items.map((item, key) => (
            <div key={key} style={{border: '1px solid black'}}>
              <p>{item.answer}</p>
              <p>{item.recommend}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default ChecklistContainer
