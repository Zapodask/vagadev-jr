import React from 'react'
import { StyledModal, Container } from 'styles/components/modal'

import CloseBtn from 'assets/svgs/close_btn.svg'
import Mario from 'assets/img/modal_mario.jpg'

interface Props {
    showModal: boolean
    setShowModal: (showModal: boolean) => void
}

const Modal = ({ showModal, setShowModal }: Props) => {
  function toggle () {
    setShowModal(!showModal)
  }

  function beforeClose () {
    return new Promise((resolve) => {
      setTimeout(resolve, 100)
    })
  }

  return (
    <StyledModal
      isOpen={showModal}
      beforeClose={beforeClose}
      onBackgroundClick={toggle}
      onEscapeKeydown={toggle}
    >
      <Container>
        <img src={CloseBtn} className='close' onClick={() => setShowModal(false)} />
        <div className='message'>
          <div className='box'>
            Pedido realizado com sucesso!
          </div>
        </div>
        <img src={Mario} className='mario' />
      </Container>
    </StyledModal>
  )
}

export default Modal
