import styled from 'styled-components'
import colors from '../../../styles/colors'

export const CardFieldContainer = styled.div`
  margin-bottom: 0.8rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  .card-field {
    font-size: 1.6rem;

    &__label {
      color: ${colors.darkBlue};
      margin-right: 1rem;
    }

    &__value {
      font-weight: bold;
    }
  }
`
