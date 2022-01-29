import { useState } from 'react'
import { useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'

const useHorizontalSwipe = () => {
  const V_THRESHOLD = 0.3
  const [yPos, setYPos] = useState(0)
  const { y } = useSpring({ y: yPos * 80 })
  const swipe = useDrag(({ last, vxvy: [vx, vy] }) => {
    if (last && (Math.abs(vx) < Math.abs(vy))) {
      if (vy < -V_THRESHOLD && yPos > -1) {
        setYPos((yp) => yp - 1)
      }
      if (vy > V_THRESHOLD && yPos < 1) {
        setYPos((yp) => yp + 1)
      }
    }
  })

  return {
    swipe,
    y,
  }
}

export default useHorizontalSwipe
