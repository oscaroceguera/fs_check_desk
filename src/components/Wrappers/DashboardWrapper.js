import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Wrapper = styled.div`
  margin: auto;
  max-width: 530px;
  margin: auto;
  position: relative;
  ${breakpoint('desktop')`
    max-width: 1000px;
  `}
`
const WrapperTitle = styled.h1`
  text-align: center;
`
const WrapperTitleDesc = styled.span`
  font-size: 12px;
  display: block;
  color: gray;
  font-weight: normal;
`

const DashboardWrapper = ({title, desc, children}) => (
  <Wrapper>
    <WrapperTitle>{title}
      <WrapperTitleDesc>{desc}</WrapperTitleDesc>
    </WrapperTitle>
    {children}
  </Wrapper>
)

DashboardWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default DashboardWrapper
