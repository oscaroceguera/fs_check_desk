import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as schemaActions from '../../reducers/schemasReducer'
import aux from '../../helpers/AuxFunctions'
import { submitSchema } from '../../selectors/schemaSelector'

import CircularLoading from '../../components/Progress/CircularLoading'
import SchemaForm from '../../components/Schema/SchemaForm'

class SchemaFormContainer extends React.Component {

  componentWillMount () {
    this.props.resetFields()
  }

  onChangeInput = (e, section) => this.props.setSchemaFields(section, e.target.name, e.target.value)

  handleErrorText = (section, field, type) => {
    const _section = this.props[section]
    return aux.errorTextMessage(_section[field], type)
  }

  saveSchema = (e) => this.props.setSavedSchema()

  updateSchema = (e) => {
    console.log('UPDATE');
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
                onChangeInput={this.onChangeInput}
                submitSchema={submitSchema}
                updateSchema={this.updateSchema}
                saveSchema={this.saveSchema}
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

// TODO: propTypes
export default connect(mapStateToProps, mapDispatchToProps)(SchemaFormContainer)
