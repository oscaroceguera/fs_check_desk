import React from 'react'
import { func, object, array, bool } from 'prop-types'
import { TxtFieldId, TxtFieldResponsive, GenericSubmit, FormWrapper } from '../index'
import { SelectField, MenuItem, DatePicker } from 'material-ui'

const ChecklistForm = (props) => (
  <div>
    <TxtFieldId item={props.checklist} />
    <FormWrapper>
      <SelectField
        errorText={props.handleErrorText('checklist', 'schemaType', 'txt')}
        floatingLabelText={'Tipo de esquema'}
        value={props.checklist.schemaType}
        onChange={props.selectChange}
        style={{ width: '40%', marginRight: '10px' }}
      >
        { props.catalog.map((i, k) => <MenuItem key={k} value={i._id} primaryText={i.name} />) }
      </SelectField>
      <TxtFieldResponsive
        floatingLabelText={'Nombre de la empresa'}
        name={'companyName'}
        value={props.checklist.companyName}
        errorText={props.handleErrorText('checklist', 'companyName', 'txt')}
        onChange={(e, section) => props.onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'País'}
        name={'country'}
        value={props.checklist.country}
        width={'20%'}
        errorText={props.handleErrorText('checklist', 'country', 'txt')}
        onChange={(e, section) => props.onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Estado'}
        name={'state'}
        value={props.checklist.state}
        width={'25%'}
        errorText={props.handleErrorText('checklist', 'state', 'txt')}
        onChange={(e, section) => props.onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Municipio'}
        name={'town'}
        value={props.checklist.town}
        width={'30%'}
        errorText={props.handleErrorText('checklist', 'town', 'txt')}
        onChange={(e, section) => props.onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Calle'}
        name={'street'}
        width={'40%'}
        value={props.checklist.street}
        errorText={props.handleErrorText('checklist', 'street', 'txt')}
        onChange={(e, section) => props.onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Número'}
        name={'number'}
        width={'7%'}
        value={props.checklist.number}
        onChange={(e, section) => props.onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Colonia'}
        name={'neighborhood'}
        value={props.checklist.neighborhood}
        width={'30%'}
        onChange={(e, section) => props.onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Código postal'}
        name={'zipcode'}
        value={props.checklist.zipcode}
        width={'10%'}
        onChange={(e, section) => props.onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Descripción'}
        name={'description'}
        value={props.checklist.description}
        width={'100%'}
        errorText={props.handleErrorText('checklist', 'description', 'max140')}
        onChange={(e, section) => props.onChangeInput(e, 'checklist')}
      />
      <DatePicker
        hintText='Fecha'
        value={props.checklist.date !== '' ? new Date(props.checklist.date) : null}
        name={'date'}
        onChange={props.handleDate}
      />
      <GenericSubmit
        disabled={props.submitChecklist}
        label={props.checklist.id ? 'Actualizar' : 'Guardar'}
        onClick={props.checklist.id ? props.updateChecklist : props.saveChecklist}
      />
    </FormWrapper>
  </div>
)

ChecklistForm.propTypes = {
  updateChecklist: func.isRequired,
  saveChecklist: func.isRequired,
  checklist: object.isRequired,
  catalog: array.isRequired,
  handleErrorText: func.isRequired,
  onChangeInput: func.isRequired,
  selectChange: func.isRequired,
  handleDate: func.isRequired,
  submitChecklist: bool.isRequired

}

export default ChecklistForm
