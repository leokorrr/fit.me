import React from 'react'
import IScreenHeader from './ScreenHeader.interface'
import { ScreenHeaderContainer } from './ScreenHeader.style'

export const ScreenHeader: React.FC<IScreenHeader> = ({ title }) => {
  if (!title) {
    return null
  }

  return (
    <ScreenHeaderContainer>
      <div className="screen-header">
        <h2>{title}</h2>
        <hr />
      </div>
    </ScreenHeaderContainer>
  )
}
