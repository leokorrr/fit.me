import styled from 'styled-components'
import colors from '../../styles/colors'

export const ExerciseCardContainer = styled.div`
  .exercise-card {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    height: 10rem;
    border-radius: 2rem;
    box-shadow: -0.2rem -0.2rem 1rem ${colors.white}, 0.2rem 0.2rem 1rem ${colors.menuButtonShadow};
  }
`
