import styled from 'styled-components'
import colors from '../../styles/colors'

export const CardContainer = styled.div`
  .card {
    border-radius: 2rem;
    padding: 2rem;
    box-shadow: -0.2rem -0.2rem 1rem ${colors.white}, 0.2rem 0.2rem 1rem ${colors.menuButtonShadow};
    margin-bottom: 2rem;

    &__date {
      display: flex;
      width: 100%;
      flex-direction: row-reverse;
      font-size: 1.4rem;
      color: ${colors.darkBlue};
    }
  }
`
