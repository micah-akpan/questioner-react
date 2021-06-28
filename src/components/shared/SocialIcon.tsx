import styled, { css } from 'styled-components'

const SocialIcon = styled.img`
  text-align: center;
  ${
    props => {
      let width = props.width || 30
      let height = props.height || 30
      return css`
        width: ${width}px;
        height: ${height}px;
      `
    }
  }
`
export default SocialIcon;
