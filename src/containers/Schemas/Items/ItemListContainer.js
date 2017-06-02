import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemsActions from '../../../reducers/getItemsReducer'
import ItemList from '../../../components/Schema/Item/ItemList'

class ItemListContainer extends React.Component {
  componentWillMount () { this.props.fetchItems() }

  render () {
    return <ItemList items={this.props.items}/>
  }
}

export default connect(
  state => ({ items: state.getItemsReducer.toJS().items }),
  dispatch => bindActionCreators({ ...itemsActions }, dispatch)
)(ItemListContainer)
