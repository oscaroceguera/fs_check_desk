import React from 'react'
import {CardContainer, Card, CardHeader, CardHeaderTitle, CardHeaderVersion, CardDescription} from './styles'
import { grey400 } from '../../sharedStyles/variables'

const H2_STYLE = {
  margin: 'auto',
  color: grey400
}

const ThereArentSchemas = () => <h2 style={H2_STYLE}>{'¡No existen esquemas registrados aún!'}</h2>

const ThereAreSchemas = ({ item, goToSchema }) => (
  <Card onClick={(e, id) => goToSchema(e, item._id)}>
    <CardHeader>
      <CardHeaderTitle>{item.name}</CardHeaderTitle>
      <CardHeaderVersion>{`Version: ${item.version}`}</CardHeaderVersion>
    </CardHeader>
    <div>
      <CardDescription>{item.description}</CardDescription>
    </div>
  </Card>
)

ThereAreSchemas.propTypes = {
  goToSchema: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired
}

const SchemaCard = ({ schemas, goToSchema }) => (
  <CardContainer>
    { schemas.length > 0 ? schemas.map((item, key) => <ThereAreSchemas goToSchema={goToSchema} key={key} item={item} />) : <ThereArentSchemas /> }
  </CardContainer>
)

SchemaCard.propTypes = { schemas: React.PropTypes.array.isRequired }

export default SchemaCard
