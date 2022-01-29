import styled from 'styled-components'
import colors from '../../../styles/colors'

export const MenuButtonContainer = styled.div`
	.menu-button {
		width: 7.3rem;
		height: 7.3rem;
		box-shadow: -0.2rem -0.2rem 1rem ${colors.white}, 0.2rem 0.2rem 1rem ${colors.menuButtonShadow};
		border-radius: 4rem;
		background-color: ${colors.menuButtonBackground};
    margin-bottom: 2rem;
    position: relative;

    &__inner {
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4rem;
      margin-bottom: 2rem;
      width: 6.7rem;
      height: 6.7rem;

      &--active {
        background-color: ${colors.white};
      }
    }
	}
`
