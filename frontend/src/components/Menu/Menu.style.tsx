import styled from 'styled-components'
import colors from '../../styles/colors'

export const MenuContainer = styled.div`
	position: absolute;
	bottom: -9rem;
	width: 100%;

	.menu {
		padding: 1rem 2rem 0;
		border: 0.2rem solid ${colors.white};
		border-radius: 2rem;
		-webkit-backdrop-filter: blur(5.5rem);
    backdrop-filter: blur(5.5rem);
    background-color: rgba(255, 255, 255, 0.5);

		&__pulling-bar-ctn {
			width: 100%;
			display: flex;
			justify-content: center;
			margin-bottom: 3rem;
		}

		&__pulling-bar {
			background-color: ${colors.pullingBarBackground};
			box-shadow: -0.2rem -0.2rem 1rem ${colors.pullingBarShadow}, 0.2rem 0.2rem 1rem ${colors.pullingBarShadow};
			width: 10rem;
			height: 0.8rem;
			border-radius: 0.4rem
		}

		&__icons {
			display: grid;
      grid-template-columns: repeat(4, 1fr);

      & > div {
        display: flex;
        justify-content: center;
      }
		}
	}
`
