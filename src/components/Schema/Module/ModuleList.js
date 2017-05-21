import React from 'react'
import Divider from 'material-ui/Divider'
import styled from 'styled-components'

const NotModulesMsg = styled.p`
  padding: 1em;
  color: gray;
  text-align: center;
`

const ModuleItem = styled.div`
  padding: .5em;
`

const ModuleItemSection = ({title, label}) => <p><strong>{title}</strong>{label}</p>

ModuleItemSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
}

export const NotModules = () => <NotModulesMsg>{'¡No hay módulos registrados!'}</NotModulesMsg>

const ModuleList = ({item}) => (
  <div>
    <ModuleItem>
      <ModuleItemSection title={'Módulo: '} label={item.number}/>
      <ModuleItemSection title={'Nombre: '} label={item.name}/>
    </ModuleItem>
    <Divider />
  </div>
)

ModuleList.propTypes = {
  item: React.PropTypes.object.isRequired
}

export default ModuleList
