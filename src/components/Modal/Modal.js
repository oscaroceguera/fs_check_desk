import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, FlatButton } from 'material-ui'

const Modal = ({ handleModalOpen, handleModalClose, modalStatus, title, children }) => (
  <Dialog
    title={title}
    actions={<FlatButton label={'Cancelar'} primary onTouchTap={handleModalClose} />}
    modal={false}
    open={modalStatus}
    onRequestClose={handleModalClose}
    autoScrollBodyContent
  >
    { children }
  </Dialog>
)

const { func, bool, string, object } = PropTypes

Modal.propTypes = {
  handleModalOpen: func.isRequired,
  handleModalClose: func.isRequired,
  modalStatus: bool.isRequired,
  title: string.isRequired,
  children: object.isRequired
}

export default Modal
