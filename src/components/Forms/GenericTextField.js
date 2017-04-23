import React from 'react'
import {TextField} from 'material-ui'

const GenericTextField = ({title, name, errorText, onChange}) => (
  <TextField
    floatingLabelText={title}
    name={name}
    errorText={errorText}
    style={{ width: '100%' }}
    onChange={onChange}
  />
)

const { string, func } = React.PropTypes

GenericTextField.propTypes = {
  title: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
  errorText: string.isRequired
}

export default GenericTextField
