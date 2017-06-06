import React from 'react'
import PropTypes from 'prop-types'
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

const { string, func } = PropTypes

GenericTextField.propTypes = {
  title: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
  errorText: string.isRequired,
  type: string
}

export default GenericTextField
