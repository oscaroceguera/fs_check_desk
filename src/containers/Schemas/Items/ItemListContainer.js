import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemsActions from '../../../reducers/getItemsReducer'
import * as itemActions from '../../../reducers/itemsReducer'
import ItemList from '../../../components/Schema/Item/ItemList'

class ItemListContainer extends React.Component {
  componentWillMount () {
    this.props.fetchItems()
  }

  onUpdateItem (id, index) {
    console.log('Update', id, index)
  }
  
  onDeleteItem = (id, index) => {
    this.props.setDeleteItem(id, index)
  }

  render () {
    return (
      <ItemList
        {...this.props}
        onOpenForm={() => this.props.openForm()}
        onCloseForm={() => this.props.closeForm()}
        onUpdateItem={this.onUpdateItem}
        onDeleteItem={this.onDeleteItem}
      />
    )
  }
}

// TODO: PROPTYPES

const mapStateToProps = (state, props) => ({
  items: state.getItemsReducer.toJS().items,
  loading: props.itemsLoading,
  modalStatus: state.itemsReducer.toJS().openFormModal
})

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({
    ...itemsActions,
    ...itemActions
  }, dispatch)
)(ItemListContainer)
