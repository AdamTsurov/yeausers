import React, { useRef, useState } from 'react'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import styles from './PopupControl.module.css'

const PopupControl = ({ 
  control, 
  popup, 
  position = 'left',
  closeOnOutsideClick = true 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef(null)

  const togglePopup = () => setIsOpen(prev => !prev)
  const closePopup = () => setIsOpen(false)

  useOnClickOutside(popupRef, closeOnOutsideClick ? closePopup : null)

  return (
    <div className={styles.popupContainer} ref={popupRef}>
      <div onClick={togglePopup} className={styles.control}>
        {control}
      </div>

      {isOpen && (
        <div className={`${styles.popup} ${styles[`popup--${position}`]}`}>
          {typeof popup === 'function' ? popup({ close: closePopup }) : popup}
        </div>
      )}
    </div>
  )
}

export default PopupControl