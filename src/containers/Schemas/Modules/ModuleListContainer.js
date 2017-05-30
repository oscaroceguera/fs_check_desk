import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modulesActions from '../../../reducers/getModulesReducer'
import {orderBy} from 'lodash/collection'
import styled from 'styled-components'
import ModuleList, {NotModules} from '../../../components/Schema/Module/ModuleList'

const ListContainer = styled.div`
  box-shadow: 0px 0px 5px gray;
  font-size: 12px;
  margin: .5em 0;
  border-radius: 2px;
`

class ModuleListContainer extends React.Component {
  componentWillMount () {
    this.props.fetchModules()
  }

  render () {
    const { modules } = this.props
    return (
      <ListContainer>
        { modules.length > 0 ? modules.map((i,k) => <ModuleList key={k} item={i} />) : <NotModules /> }
      </ListContainer>
    )
  }
}

const mapStateToProps = (state) => {
  const modulesJS = state.getModulesReducer.toJS()
  return {
    modules: orderBy(modulesJS.modules, ['order'], ['asc'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...modulesActions
  }, dispatch)
}

// TODO: PROPTYPES

export default connect(mapStateToProps, mapDispatchToProps)(ModuleListContainer)