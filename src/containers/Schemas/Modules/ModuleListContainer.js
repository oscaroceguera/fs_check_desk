import React from 'react'
import { array, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modulesActions from '../../../reducers/getModulesReducer'
import * as modulesUpdateActions from '../../../reducers/modulesReducer'
import {orderBy} from 'lodash/collection'
import styled from 'styled-components'
import ModuleList, { NotModules } from '../../../components/Schema/Module/ModuleList'
import LnProgress from '../../../components/Progress/LinearProgress'

const ListContainer = styled.div`
  box-shadow: 0px 0px 5px gray;
  font-size: 12px;
  margin: .5em 0;
  border-radius: 2px;
`

class ModuleListContainer extends React.Component {
  static propTypes = {
    modules: array.isRequired,
    loading: bool.isRequired,
    fetchModules: func.isRequired,
    showModalUpdateModule: func.isRequired
  }

  componentWillMount () {
    this.props.fetchModules()
  }

  modalUpdate = (e, module) => {
    const _module = {
      number: module.number,
      order: module.order,
      schemaId: module.schemaId,
      name: module.name,
      id: module._id
    }
    this.props.showModalUpdateModule(_module)
  }

  render () {
    const { modules, loading } = this.props

    if (loading) return <LnProgress />

    return (
      <ListContainer>
        {
          modules.length > 0
            ? modules.map((i,k) => <ModuleList modalUpdate={this.modalUpdate} key={k} item={i} />)
            : <NotModules />
        }
      </ListContainer>
    )
  }
}

const mapStateToProps = (state, props) => {
  const modulesJS = state.getModulesReducer.toJS()
  return {
    modules: orderBy(modulesJS.modules, ['order'], ['asc']),
    loading: props.modulesLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...modulesActions,
    ...modulesUpdateActions
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ModuleListContainer)
