import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { browserHistory } from 'react-router'

const FLOAT_CONTAINER = {
  position: 'fixed',
  right: '5em',
  bottom: '2em'
}

const AddButton  = ({ path }) => (
  <FloatingActionButton
    secondary
    style={FLOAT_CONTAINER}
    onTouchTap={() => browserHistory.push(path)}>
    <ContentAdd />
  </FloatingActionButton>
)

AddButton.propTypes = {
  path: React.PropTypes.string.isRequired
}

export default AddButton
