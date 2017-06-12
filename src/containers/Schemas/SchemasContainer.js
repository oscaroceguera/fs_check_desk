import React from 'react'
import { object, array, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as schemaActions from '../../reducers/getSchemasReducer'
import DashboardWrapper from '../../components/Wrappers/DashboardWrapper'
import SchemaCard from '../../components/Cards/SchemaCard'
import AddButton from '../../components/AddButton/AddButton'
import CircularLoading from '../../components/Progress/CircularLoading'

class SchemasContainer extends React.Component {
  static contextTypes = {
    router: object
  }

  static propTypes = {
    router: object,
    schemas: array.isRequired,
    schemasLoading: bool.isRequired,
    goToSchema: func.isRequired,
    goToAddNewSchema: func.isRequired,
    fetchSchemas: func.isRequired
  }

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
        <SchemaCard
          schemas={schemas}
          goToSchema={(e, id) => this.props.goToSchema(id)}/>
        <AddButton goTo={(e) => this.props.goToAddNewSchema()}/>
      </DashboardWrapper>
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.getSchemasReducer.toJS()
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
