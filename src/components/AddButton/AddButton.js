import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const FLOAT_CONTAINER = {
  position: 'fixed',
  right: '5em',
  bottom: '2em'
}

const AddButton  = () => (
  <FloatingActionButton secondary style={FLOAT_CONTAINER}>
    <ContentAdd />
  </FloatingActionButton>
)

export default AddButton
