import styled from 'styled-components'
import colors from '../../styles/colors'

export const SelectFieldContainer = styled.div`
  margin-top: 3rem;

  .select-field {
    width: 100%;
    height: 4rem;
    padding-left: 1.5rem;
    background-color: ${colors.background};
    color: ${colors.darkBlue};
    border: none;
    box-shadow: -0.1rem -0.1rem 0.3rem ${colors.white}, 0.15rem 0.15rem 0.3rem ${colors.selectorsInnerShadow};
    border-radius: 0.5rem;
    
    &:focus-visible {
      outline: none;
    }
  }
`
