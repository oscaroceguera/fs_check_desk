import React from 'react'
import { array, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemsActions from '../../../reducers/getItemsReducer'
import * as itemActions from '../../../reducers/itemsReducer'
import ItemList from '../../../components/Schema/Item/ItemList'

class ItemListContainer extends React.Component {
  static propTypes = {
    items: array.isRequired,
    loading: bool.isRequired,
    modalStatus: bool.isRequired,
    fetchItems: func.isRequired,
    showModalUpdateItem: func.isRequired,
    setDeleteItem: func.isRequired,
    openForm: func.isRequired,
    closeForm: func.isRequired
  }

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

  render () {
    return (
      <ItemList
        {...this.props}
        onOpenForm={() => this.props.openForm()}
        onCloseForm={() => this.props.closeForm()}
        onOpenFormUpdate={this.modalUpdate}
        onDeleteItem={(id, index) => this.props.setDeleteItem(id, index)}
      />
    )
  }
}

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
