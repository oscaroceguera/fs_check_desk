import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as schemaActions from '../../reducers/schemasReducer'
import DashboardWrapper from '../../components/Wrappers/DashboardWrapper'
import SchemaCard from '../../components/Cards/SchemaCard'
import AddButton from '../../components/AddButton/AddButton'
import CircularLoading from '../../components/Progress/CircularLoading'

class SchemasContainer extends React.Component {
  componentWillMount () {
    this.props.fetchSchemas()
  }
  render () {
    const { schemas, schemasLoading } = this.props

    return schemasLoading
      ? <CircularLoading />
      : <DashboardWrapper
          title={'Esquemas'}
          desc={'Administrador de Esquemas'}
        >
        <SchemaCard schemas={schemas} />
        <AddButton path={'/dashboard/schemas/new'}/>
      </DashboardWrapper>
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.schemasReducer.toJS()
  return {
    schemas: stateJS.schemas,
    schemasLoading: stateJS.schemasLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...schemaActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SchemasContainer)
