import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import {tealA200, grey800, grey700} from '../../sharedStyles/variables'

export const CardContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  ${breakpoint('desktop')`
    justify-content: flex-start;
  `}
`

export const Card = styled.div`
  box-shadow: 0px 0px 5px gray;
  width: 250px;
  font-size: 14px;
  margin-right: 1em;
  height: 200px;
  margin-top: 1em;
  cursor: pointer;
  transition: .3s;
  &:hover {
    box-shadow: 0px 0px 5px ${tealA200};
  }
`
export const CardHeader = styled.div`
  padding: .5em;
  background: ${tealA200};
`

export const CardHeaderTitle = styled.h3`
  margin: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${grey800};
`

export const CardHeaderVersion = styled.span`
  color: ${grey700};
`

export const CardDescription = styled.p`
  color: ${grey700};
  padding: .5em;
`
