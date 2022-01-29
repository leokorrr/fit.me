import React from 'react'
import IMenuButton from './MenuButton.interface'
import { MenuButtonContainer } from './MenuButton.style'

export const MenuButton: React.FC<IMenuButton> = ({ icon, isActive = false }) => (
  <MenuButtonContainer>
    <div className="menu-button menu-button">
      <div className={`menu-button__inner ${isActive ? 'menu-button__inner--active' : ''}`}>
        <img src={icon} alt={icon} />
      </div>
    </div>
  </MenuButtonContainer>
)
