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

  modalUpdate = (index, item) => {
    const _item = {
      number: item.number,
      order: item.order,
      value: item.value,
      answer: item.answer,
      recommend: item.recommend,
      moduleId: item.moduleId._id,
      schemaId: item.schemaId._id,
      id: item._id
    }
    this.props.showModalUpdateItem(index, _item)
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
        onOpenFormUpdate={this.modalUpdate}
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
