import React from 'react'
import PropTypes from 'prop-types'
import { TxtFieldId, TxtFieldResponsive, GenericSubmit, FormWrapper } from '../index'

const SchemaForm = ({ item, handleErrorText, onChangeInput, submitSchema, updateSchema, saveSchema }) => (
  <div>
    <TxtFieldId item={item} />
    <FormWrapper>
      <TxtFieldResponsive
        floatingLabelText={'Nombre'}
        name={'name'}
        value={item.name}
        errorText={handleErrorText('schema', 'name', 'txt')}
        onChange={(e, section, type) => onChangeInput(e, 'schema')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Versión'}
        name={'version'}
        width={'15%'}
        value={item.version}
        errorText={handleErrorText('schema', 'version', 'txt')}
        onChange={(e, section, type) => onChangeInput(e, 'schema')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Descripción'}
        name={'description'}
        width={'100%'}
        value={item.description}
        errorText={handleErrorText('schema', 'description', 'max140')}
        onChange={(e, section, type) => onChangeInput(e, 'schema')}
      />
      <GenericSubmit
        disabled={submitSchema}
        label={item.id ? 'Actualizar' : 'Guardar'}
        onClick={item.id ? updateSchema : saveSchema}
      />
    </FormWrapper>
  </div>
)

const { object, func, bool } = PropTypes

SchemaForm.propTypes = {
  item: object.isRequired,
  handleErrorText: func.isRequired,
  onChangeInput: func.isRequired,
  submitSchema: bool.isRequired,
  updateSchema: func.isRequired,
  saveSchema: func.isRequired
}

export default SchemaForm
