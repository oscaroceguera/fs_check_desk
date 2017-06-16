import React from 'react'
import { DashboardWrapper } from '../../../components'
import ChecklistFormContainer from './ChecklistFormContainer'

// TODO: 4 Al guardar el checklist mostar los reactivos
// TODO: 7 Cierre de checklist
// TODO: 8 Mostrar estadus de checklist como cerrado
// TODO: 9 Cuando el checkist este cerradoe ste ya no se podra modificar
// TODO: Prop types

class ChecklistAdminContainer extends React.Component {
  render () {
    return (
      <DashboardWrapper
        title={'Check-lists'}
        desc={'Aplicar Check-list'}
      >
        <ChecklistFormContainer />
      </DashboardWrapper>
    )
  }
}

export default ChecklistAdminContainer
