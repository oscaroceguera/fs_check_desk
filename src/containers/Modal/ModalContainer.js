import React from 'react'
import { bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from '../../reducers/modalReducer'
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import Modal from '../../components/Modal/Modal'

class ModalContainer extends React.Component {
  static propTypes = {
    modalStatus: bool.isRequired,
    openModal: func.isRequired,
    closeModal: func.isRequired
  }

  render () {
    const { modalStatus } = this.props
    return (
      <div>
        <RaisedButton
          icon={<AddIcon />}
          label={this.props.label}
          primary
          fullWidth={true}
          onClick={() => this.props.openModal()}
        />
        <Modal
          handleModalOpen={() => this.props.openModal()}
          handleModalClose={() => this.props.closeModal()}
          modalStatus={modalStatus}
          title={this.props.label}
        >
          {this.props.children}
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalStatus: state.modalReducer.toJS().open,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...modalActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
