import React from 'react'
import { render } from '@testing-library/react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MenuButton } from '..'
import scales from '../../../../images/icons/Scales.svg'

configure({ adapter: new Adapter() })
describe('MenuButton', () => {
  it('should render MenuButton', () => {
    render(<MenuButton icon={scales} isActive={false} />)
  })
  it('should render an image', () => {
    const menuButton = shallow(<MenuButton icon={scales} isActive={false} />)
    expect(menuButton.find('img').prop('src')).toEqual(scales)
  })
})
