import React from 'react'
// import { object, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as checklistActions from '../../../reducers/Checklist/checklistForm'
import * as schemaActions from '../../../reducers/Schema/schemaList'
import aux from '../../../helpers/AuxFunctions'
import { submitChecklist } from '../../../selectors/checklistSelector'

import { ChecklistForm,CircularLoading } from '../../../components'

// TODO: Prop types

class ChecklistFormContainer extends React.Component {
  componentWillMount () {
    this.props.fetchSchemas()
  }
  handleErrorText = (section, field, type) => {
    const _section = this.props[section]
    return aux.errorTextMessage(_section[field], type)
  }
  render () {
    return (
      <div>
        {
          this.props.loading
            ? <CircularLoading />
            : <ChecklistForm
                {...this.props}
                selectChange={(event, index, value) => this.props.selectedSchema(value)}
                handleErrorText={this.handleErrorText}
                onChangeInput={(e, section) => this.props.setFields(section, e.target.name, e.target.value)}
                handleDate={(e, date) => this.props.setFields('checklist', 'date', date)}
                updateChecklist={(e) => this.props.setUpdateChecklist()}
                saveChecklist={(e) => this.props.setSavedChecklist()}
            />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const checklist = state.checklistReducer.toJS()
  const schemas = state.getSchemasReducer.toJS()
  return {
    checklist: checklist.checklist,
    catalog: schemas.schemas,
    submitChecklist: !submitChecklist(state),
    loading: checklist.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...checklistActions,
    ...schemaActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChecklistFormContainer)
