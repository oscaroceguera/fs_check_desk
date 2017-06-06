import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as schemaActions from '../../reducers/getSchemasReducer'
import DashboardWrapper from '../../components/Wrappers/DashboardWrapper'
import SchemaCard from '../../components/Cards/SchemaCard'
import AddButton from '../../components/AddButton/AddButton'
import CircularLoading from '../../components/Progress/CircularLoading'

class SchemasContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    location: PropTypes.object
  }

  goToSchema = (e, id) => this.props.goToSchema(id)

  goToAddSchema = (e) => this.props.goToAddNewSchema()

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
        <SchemaCard schemas={schemas} goToSchema={this.goToSchema}/>
        <AddButton goToAddSchema={this.goToAddSchema}/>
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

// TODO: PROPTYPES

export default connect(mapStateToProps, mapDispatchToProps)(SchemasContainer)
