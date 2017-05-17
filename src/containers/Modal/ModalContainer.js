import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from '../../reducers/modalReducer'
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import Modal from '../../components/Modal/Modal'

class ModalContainer extends React.Component {
  handleModalOpen = () => this.props.openModal()
  handleModalClose = () => this.props.closeModal()
  render () {
    const { modalStatus } = this.props
    return (
      <div>
        <RaisedButton
          icon={<AddIcon />}
          label={this.props.label}
          primary
          fullWidth={true}
          onClick={this.handleModalOpen}
        />
        <Modal
          handleModalOpen={this.handleModalOpen}
          handleModalClose={this.handleModalClose}
          modalStatus={modalStatus}
          title={this.props.label}
        >
          {this.props.children}
        </Modal>
      </div>
    )

  }
}

// TODO: Poaner aqui las props q recibe (state, props)
const mapStateToProps = (state) => {
  const modalJS = state.modalReducer.toJS()
  return {
    modalStatus: modalJS.open,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...modalActions
  }, dispatch)
}

// TODO: propTypes
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
