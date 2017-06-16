import React from 'react'
import { TxtFieldId, TxtFieldResponsive, GenericSubmit, FormWrapper } from '../index'
import { SelectField, MenuItem } from 'material-ui'

// TODO: UI de ChecklistAdminContainer
// TODO: 2 Información del checklist:
// TODO: 2.3 Fecha del checkList *isRequired
// TODO: 3 Guardar checklist y obtener el Id
// TODO: Prop types

const ChecklistForm = ({ checklist, catalog, handleErrorText, onChangeInput, selectChange }) => (
  <div>
    <TxtFieldId item={checklist} />
    <FormWrapper>
      <SelectField
        errorText={handleErrorText('checklist', 'schemaType', 'txt')}
        floatingLabelText={'Tipo de esquema'}
        value={checklist.schemaType}
        onChange={selectChange}
        style={{ width: '40%', marginRight: '10px' }}
      >
        { catalog.map((i, k) => <MenuItem key={k} value={i._id} primaryText={i.name} />) }
      </SelectField>
      <TxtFieldResponsive
        floatingLabelText={'Nombre de la empresa'}
        name={'companyName'}
        value={checklist.companyName}
        errorText={handleErrorText('checklist', 'companyName', 'txt')}
        onChange={(e, section) => onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'País'}
        name={'country'}
        value={checklist.country}
        width={'20%'}
        errorText={handleErrorText('checklist', 'country', 'txt')}
        onChange={(e, section) => onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Estado'}
        name={'state'}
        value={checklist.state}
        width={'25%'}
        errorText={handleErrorText('checklist', 'state', 'txt')}
        onChange={(e, section) => onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Municipio'}
        name={'town'}
        value={checklist.town}
        width={'30%'}
        errorText={handleErrorText('checklist', 'town', 'txt')}
        onChange={(e, section) => onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Calle'}
        name={'street'}
        width={'40%'}
        value={checklist.street}
        errorText={handleErrorText('checklist', 'street', 'txt')}
        onChange={(e, section) => onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Número'}
        name={'number'}
        width={'7%'}
        onChange={(e, section) => onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Colonia'}
        name={'neighborhood'}
        value={checklist.neighborhood}
        width={'30%'}
        onChange={(e, section) => onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Código postal'}
        name={'zipcode'}
        value={checklist.zipcode}
        width={'10%'}
        onChange={(e, section) => onChangeInput(e, 'checklist')}
      />
      <TxtFieldResponsive
        floatingLabelText={'Descripción'}
        name={'description'}
        value={checklist.description}
        width={'100%'}
        errorText={handleErrorText('checklist', 'description', 'max140')}
        onChange={(e, section) => onChangeInput(e, 'checklist')}
      />
    </FormWrapper>
  </div>
)

export default ChecklistForm
