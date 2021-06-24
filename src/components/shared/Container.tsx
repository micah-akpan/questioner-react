import styled from 'styled-components'

const Container = styled.div`
  width   : 80%;
  margin  : 0 auto;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export default Container;
