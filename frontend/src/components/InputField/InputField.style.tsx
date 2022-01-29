import styled from 'styled-components'
import colors from '../../styles/colors'

export const InputFieldContainer = styled.div`
  box-shadow: -0.1rem -0.1rem 0.3rem ${colors.white}, 0.15rem 0.15rem 0.3rem ${colors.selectorsInnerShadow};
  border-radius: 1.2rem;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.selectorsBorder};
  overflow: hidden;
  font-size: 1.4rem;

  .input-field {
    height: 3rem;
    width: calc(100% - 10px);
    overflow: hidden;
    border-radius: 1.2rem;

    &__input {
      border: none;
      width: 100%;
      height: 100%;
      padding-left: 1.5rem;
      border-radius: 1.2rem;
      background-color: ${colors.background};
      box-shadow: 0.1rem 0.1rem 0.2rem ${colors.selectorsInnerShadow}, -0.1rem -0.1rem 0.3rem ${colors.white};

      &:focus-visible {
        outline: none;
      }
    }
  }
`
