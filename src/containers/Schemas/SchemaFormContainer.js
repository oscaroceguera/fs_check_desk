import React from 'react'
import { object, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as schemaActions from '../../reducers/schemasReducer'
import aux from '../../helpers/AuxFunctions'
import { submitSchema } from '../../selectors/schemaSelector'

import CircularLoading from '../../components/Progress/CircularLoading'
import SchemaForm from '../../components/Schema/SchemaForm'

class SchemaFormContainer extends React.Component {
  static propTypes = {
    schema: object,
    submitSchema: bool.isRequired,
    SSLoading: bool.isRequired,
    setSchemaFields: func.isRequired,
    setSavedSchema: func.isRequired,
    setUpdateSchema: func.isRequired
  }

  handleErrorText = (section, field, type) => {
    const _section = this.props[section]
    return aux.errorTextMessage(_section[field], type)
  }

  render () {
    const { SSLoading, schema, submitSchema } = this.props
    return (
      <div>
        {
          SSLoading
            ? <CircularLoading />
            : <SchemaForm
                item={schema}
                handleErrorText={this.handleErrorText}
                onChangeInput={(e, section) => this.props.setSchemaFields(section, e.target.name, e.target.value)}
                submitSchema={submitSchema}
                updateSchema={(e) => this.props.setUpdateSchema()}
                saveSchema={(e) => this.props.setSavedSchema()}
              />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.schemasReducer.toJS()
  return {
    schema: stateJS.schema,
    submitSchema: !submitSchema(state),
    SSLoading: stateJS.savedSchemasLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...schemaActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SchemaFormContainer)
