import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../reducers/Checklist/checklistList'
import { DashboardWrapper, AddButton } from '../../../components'

class ChecklistsContainer extends React.Component {
  componentWillMount () {
    this.props.fetchChecklists()
  }
  render () {
    console.log('props', this.props.checklists);
    return (
      <DashboardWrapper
        title={'Check-lists'}
        desc={'Admistrador de check-lists'}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          {
            this.props.checklists.map((item, key) => {
              return (
                <div
                  key={key}
                  style={{
                    width: '300px',
                    fontSize: '12px',
                    boxShadow: '0px 0px 5px gray',
                    padding: '0.5em'
                }}>
                  <div>
                    <label>{'Compañia: '}</label>
                    <span>{item.companyName}</span>
                  </div>
                  <div>
                    <label>{'Schema: '}</label>
                    <span>{item.schemaType}</span>
                  </div>
                  <div>
                    <label>{'Descripción: '}</label>
                    <span>{item.description}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <AddButton goTo={(e) => this.props.goToAddNewChecklist()} />
      </DashboardWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.getChecklistsReducer.toJS()
  return {
    checklists: stateJS.checklists
  }
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({...actions}, dispatch)
)(ChecklistsContainer)

// TODO: UI LIST CHECKLIST
// TODO: GO TO CHECKLIST DETAIL
// TODO: PROP-TYPES
// TODO: Mostrar el status del checklist (Editable o Cerrado)
