import {pink500, red500, BX_SHADOW} from '../../sharedStyles/variables'
import styled from 'styled-components'

export const LogoHero = styled.div`
  margin: .5em;
`

export const LogoBx = styled.div`
  width: ${props => props.home ? '5em' : '3em'};
  text-align: center;
`

export const LogoBG = styled.div`
  background: ${pink500};
  border-radius: 2px;
  padding: .5em;
  transition: .3s;
  cursor: pointer;
  &:hover {
    background: ${red500};
    box-shadow: ${BX_SHADOW};
  }
`

export const LogoImg = styled.img`
  width: ${props => props.home ? '3em' : '1em'};
`

export const Title = styled.div`
  color: white;
  font-size: ${props => props.home ? '16px' : '10px'};
`
