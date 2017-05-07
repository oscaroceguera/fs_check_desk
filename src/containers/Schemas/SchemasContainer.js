import React from 'react'
import DashboardWrapper from '../../components/Wrappers/DashboardWrapper'
import SchemaCard from '../../components/Cards/SchemaCard'
import AddButton from '../../components/AddButton/AddButton'

const schemas = [
  { name: 'SENASICA BUMA GLOBAL GAGLOBALB GLOBAL GLOBAL', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { name: 'SENASICA', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { name: 'Primus gfs', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { name: 'SENASICA BUMA GLOBAL GAB SENASICA BUMA GLOBAL GAB SENASICA BUMA GLOBAL GAB', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { name: 'SENASICA BUMA GLOBAL GAB', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { name: 'SENASICA BUMA GLOBAL GAB', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { name: 'SENASICA BUMA GLOBAL GAB', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { name: 'SENASICA BUMA GLOBAL GAB SENASICA BUMA GLOBAL GAB SENASICA BUMA GLOBAL GAB', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' }
]

const SchemasContainer = () => (
  <DashboardWrapper
    title={'Schemas'}
    desc={'Schemas administrator'}
  >
    <SchemaCard schemas={schemas} />
    <AddButton />
  </DashboardWrapper>
)

export default SchemasContainer
