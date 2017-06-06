import React from 'react'
import PropTypes from 'prop-types'
import {FloatingActionButton} from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'

const FLOAT_CONTAINER = {
  position: 'fixed',
  right: '5em',
  bottom: '2em'
}

const AddButton = ({goToAddSchema}) => (
  <FloatingActionButton
    secondary
    style={FLOAT_CONTAINER}
    onTouchTap={goToAddSchema}>
    <ContentAdd />
  </FloatingActionButton>
)

AddButton.propTypes = {
  goToAddSchema: PropTypes.func.isRequired
}

export default AddButton
