import React from 'react'
import {TextField} from 'material-ui'

const GenericTextField = ({title, name, errorText, onChange, type = 'text'}) => (
  <TextField
    floatingLabelText={title}
    name={name}
    errorText={errorText}
    style={{ width: '100%' }}
    onChange={onChange}
    type={type}
  />
)

const { string, func } = React.PropTypes

GenericTextField.propTypes = {
  title: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
  errorText: string.isRequired,
  type: string
}

export default GenericTextField
