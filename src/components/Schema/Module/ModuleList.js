import React from 'react'
import PropTypes from 'prop-types'
import Divider from 'material-ui/Divider'
import styled from 'styled-components'
import CreateIcon from 'material-ui/svg-icons/content/create'

const ModuleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NotModulesMsg = styled.p`
  padding: 1em;
  color: gray;
  text-align: center;
`

const ModuleItem = styled.div`
  padding: .5em;
`

const ItemOption = styled.div`
  margin-right: .5em;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const ModuleItemSection = ({title, label}) => <p style={{ margin: 0 }}><strong>{title}</strong>{label}</p>

ModuleItemSection.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export const NotModules = () => <NotModulesMsg>{'¡No hay módulos registrados!'}</NotModulesMsg>

const ModuleList = ({item, modalUpdate}) => (
  <div>
    <ModuleContainer>
      <ModuleItem>
        <ModuleItemSection title={'Módulo: '} label={item.number} />
        <ModuleItemSection title={'Nombre: '} label={item.name} />
      </ModuleItem>
      <ItemOption onClick={(e, module) => modalUpdate(e, item)}>
        <CreateIcon style={{ color: '#757575' }} />
      </ItemOption>
    </ModuleContainer>
    <Divider />
  </div>
)

ModuleList.propTypes = {
  item: PropTypes.object.isRequired,
  modalUpdate: PropTypes.func.isRequired
}

export default ModuleList
