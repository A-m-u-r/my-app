import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import React from 'react'
import styles from './style.module.css'

interface ModalProps{
  children: JSX.Element
  isOpen: boolean;
  //void - ничего не возвращает
  onClose: () => void
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <Dialog className={styles.modal} open={props.isOpen} onClose={props.onClose}>
      <Dialog.Panel className = {styles.panel}>
        {/* <div className = {styles.bg}></div> */} 
        <div className={styles.content}>{props.children}</div>
      </Dialog.Panel>
    </Dialog>
  )
}
export  default Modal;