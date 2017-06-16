import React from 'react'
import { bool, func, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from '../../reducers/Modal'
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import { Modal } from '../../components'

class ModalContainer extends React.Component {
  static propTypes = {
    modalStatus: bool.isRequired,
    openModal: func.isRequired,
    closeModal: func.isRequired,
    label: string.isRequired
  }

  render () {
    const { modalStatus, label } = this.props
    return (
      <div>
        <RaisedButton
          icon={<AddIcon />}
          label={label}
          primary
          fullWidth={true}
          onClick={() => this.props.openModal()}
        />
        <Modal
          handleModalOpen={() => this.props.openModal()}
          handleModalClose={() => this.props.setCloseModal()}

          modalStatus={modalStatus}
          title={this.props.label}
        >
          {this.props.children}
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    modalStatus: state.modalReducer.toJS().open,
    label: props.label
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...modalActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
