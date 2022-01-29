import styled from 'styled-components'
import colors from '../../styles/colors'

export const ScreenHeaderContainer = styled.div`
  .screen-header {
    h2 {
      font-size: 2.4rem;
      margin: 0
    }

    hr {
      border-color: ${colors.darkBlue};
      height: 0.1rem;
      margin-bottom: 2rem;
    }
  }
`
