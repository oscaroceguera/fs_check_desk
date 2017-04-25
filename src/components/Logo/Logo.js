import React from 'react'
import CheckIcon from './checked.svg'
import { LogoHero, LogoBx, LogoBG, LogoImg, Title } from './styles'

const Logo = ({home}) => (
  <LogoHero home={home}>
    <LogoBx home={home}>
      <LogoBG home={home}>
        <div><LogoImg src={CheckIcon} alt='check-icon' home={home}/></div>
        <Title home={home}>{'checks'}</Title>
      </LogoBG>
    </LogoBx>
  </LogoHero>
)

Logo.defaultProps = { home: true }

Logo.propTypes = { home: React.PropTypes.bool.isRequired }

export default Logo
