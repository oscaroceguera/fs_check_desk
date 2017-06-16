import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../reducers/Checklist/checklistList'
import { DashboardWrapper, AddButton } from '../../../components'

class ChecklistsContainer extends React.Component {
  render () {
    return (
      <DashboardWrapper
        title={'Check-lists'}
        desc={'Admistrador de check-lists'}
      >
        <h1>Lista de Items</h1>
        <AddButton goTo={(e) => this.props.goToAddNewChecklist()} />
      </DashboardWrapper>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({...actions}, dispatch)
)(ChecklistsContainer)

// TODO: UI LIST CHECKLIST
// TODO: GO TO CHECKLIST DETAIL
// TODO: PROP-TYPES
// TODO: Mostrar el status del checklist (Editable o Cerrado)
