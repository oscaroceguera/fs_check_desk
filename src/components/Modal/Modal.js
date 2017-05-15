import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Modal = ({ handleModalOpen, handleModalClose, modalStatus, title,  children }) => (
  <Dialog
    title={title}
    actions={<FlatButton label={'Cancelar'} primary onTouchTap={handleModalClose} />}
    modal={false}
    open={modalStatus}
    onRequestClose={handleModalClose}
    autoScrollBodyContent={true}
  >
    { children }
  </Dialog>
)

const { func, bool, string, object } = React.PropTypes

Modal.propTypes = {
  handleModalOpen: func.isRequired,
  handleModalClose: func.isRequired,
  modalStatus: bool.isRequired,
  title: string.isRequired,
  children: object.isRequired
}

export default Modal
