import React from 'react'
import {CardContainer, Card, CardHeader, CardHeaderTitle, CardHeaderVersion, CardDescription} from './styles'

const SchemaCard = ({schemas}) => (
  <CardContainer>
    {
      schemas.map((item, key) => (
        <Card key={key}>
          <CardHeader>
            <CardHeaderTitle>{item.name}</CardHeaderTitle>
            <CardHeaderVersion>{`Version: ${item.version}`}</CardHeaderVersion>
          </CardHeader>
          <div>
            <CardDescription>{item.description}</CardDescription>
          </div>
        </Card>
      ))
    }
  </CardContainer>
)

// TODO: Proptypes

export default SchemaCard
