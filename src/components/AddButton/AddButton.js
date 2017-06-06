import React from 'react'
import {FloatingActionButton, ContentAdd} from 'material-ui'

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
  goToAddSchema: React.PropTypes.func.isRequired
}

export default AddButton
