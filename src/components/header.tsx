import React from 'react'
import { Container } from 'styles/components/header'

import DropBtn from 'assets/svgs/icon_hamburguer.svg'
import Logo from 'assets/svgs/logo.svg'

import PaperPlane from 'assets/svgs/paper-plane.svg'
import Search from 'assets/svgs/search-solid.svg'
import ShoppingBag from 'assets/svgs/shopping-bag-solid.svg'

interface Props {
  cartItems: number
}

export function Header ({ cartItems }: Props) {
  return (
    <Container>
      <div className='leftSide'>
        <div className='dropdown'>
          <img src={DropBtn} />
          <div className='arrow' />
          <div className='content'>
            <div className='box'>
              <div>
                <b>Luta</b>
                <a href='#'>Mortal Kombat</a>
                <a href='#'>Smash Bros</a>
                <a href='#'>Killer Instict</a>
                <a href='#'>DBZ Kakarot</a>
              </div>
              <div>
                <b>Ação / Aventura</b>
                <a href='#'>GTA V</a>
                <a href='#'>Tomb Raider</a>
                <a href='#'>HALO</a>
                <a href='#'>Call of Duty</a>
              </div>
              <div>
                <b>Corrida</b>
                <a href='#'>NEED For SPEED</a>
                <a href='#'>Forza Horizon</a>
              </div>
            </div>
          </div>
        </div>
        <img src={Logo} className='logo' />
      </div>
      <div className='rightSide'>
        <button>
          <img src={PaperPlane} />
          <label>CONTATO</label>
        </button>
        <div className='line' />
        <button>
          <img src={Search} />
          <label>BUSCAR</label>
        </button>
        <div className='line' />
        <button>
          <img src={ShoppingBag} />
          <div className='circle'>
            {cartItems}
          </div>
        </button>
      </div>
    </Container>
  )
}
