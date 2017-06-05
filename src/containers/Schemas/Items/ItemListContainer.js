import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemsActions from '../../../reducers/getItemsReducer'
import ItemList from '../../../components/Schema/Item/ItemList'

class ItemListContainer extends React.Component {
  componentWillMount () { this.props.fetchItems() }

  render () {
    const { items, loading } = this.props
    return <ItemList items={items} loading={loading}/>
  }
}

// TODO: PROPTYPES

export default connect(
  (state, props) => ({ items: state.getItemsReducer.toJS().items, loading: props.itemsLoading }),
  dispatch => bindActionCreators({ ...itemsActions }, dispatch)
)(ItemListContainer)
