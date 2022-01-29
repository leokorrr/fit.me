import React from 'react'
import { animated } from 'react-spring'
import IMenu from './Menu.interface'
import { MenuContainer } from './Menu.style'
import scales from '../../images/icons/Scales.svg'
import { MenuButton } from './MenuButton'
import useHorizontalSwipe from '../../hooks/useHorizontalSwipe'

export const Menu: React.FC<IMenu> = () => {
  const ICONS = [
    { id: 1, icon: scales },
    { id: 2, icon: scales },
    { id: 3, icon: scales },
    { id: 4, icon: scales },
    { id: 5, icon: scales },
  ]
  const { swipe, y } = useHorizontalSwipe()
  return (
    <MenuContainer>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <animated.div {...swipe()} style={{ y }}>
        <div className="menu">
          <div className="menu__pulling-bar-ctn">
            <div className="menu__pulling-bar" />
          </div>
          <div className="menu__icons">
            {ICONS.map((item) => <MenuButton key={item.id} icon={item.icon} isActive={false} />)}
          </div>
        </div>
      </animated.div>
    </MenuContainer>
  )
}
