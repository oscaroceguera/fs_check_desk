import React from 'react'
import { object, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modulesActions from '../../../reducers/Module/moduleForm'
import aux from '../../../helpers/AuxFunctions'
import Modal from '../../Modal/ModalContainer'
import ModuleForm from '../../../components/Schema/Module/ModuleForm'
import { everyModuleItems } from '../../../selectors/schemaSelector'
import CircularLoading from '../../../components/Progress/CircularLoading'

class ModuleFormContainer extends React.Component {

  static propTpes = {
    module: object.isRequired,
    loading: bool.isRequired,
    submitSchema: bool.isRequired,
    setModuleFields: func.isRequired,
    setSavedModule: func.isRequired,
    setUpdateSchema: func.isRequired
  }

  handleErrorText = (section, field, type) => {
    const _section = this.props[section]
    return aux.errorTextMessage(_section[field], type)
  }

  render () {
    return (
      <Modal label={'Agregar modulo'}>
        {
          this.props.loading
            ? <CircularLoading />
            : <ModuleForm
                onChangeInput={(e, section) => this.props.setModuleFields(section, e.target.name, e.target.value)}
                handleErrorText={this.handleErrorText}
                onSaved={(e) => this.props.setSavedModule()}
                onUpdate={(e) => this.props.setUpdateModule()}
                submit={this.props.submit}
                module={this.props.module}
              />
        }
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  const modulesJS = state.modulesReducer.toJS()
  return {
    module: modulesJS.module,
    loading: modulesJS.savedLoading,
    submit: !everyModuleItems(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...modulesActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleFormContainer)
