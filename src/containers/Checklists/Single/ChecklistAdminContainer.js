import React from 'react'
import { connect } from 'react-redux'

import { DashboardWrapper } from '../../../components'
import ChecklistFormContainer from './ChecklistFormContainer'
import ChecklistContainer from './ChecklistContainer'

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
        {this.props.checklist.id && <ChecklistContainer checklist={this.props.checklist} />}
      </DashboardWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const checklist = state.checklistReducer.toJS()
  return {
    checklist: checklist.checklist
  }
}

export default connect(mapStateToProps)(ChecklistAdminContainer)
