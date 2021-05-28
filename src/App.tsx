import React, { useState, useCallback, useRef } from 'react'
import { Frame, Container } from 'styles/app'

import Slider from 'react-slick'
import Skorpion from 'assets/img/principal_banner_desktop.jpg'
import RedDead from 'assets/img/principal_banner_desktop_02.jpg'
import SkorpionMobile from 'assets/img/principal_banner_mobile.jpg'
import RedDeadMobile from 'assets/img/principal_banner_mobile_02.jpg'

import { Header } from 'components/header'

import ArrowLeft from 'assets/svgs/angle-left-solid.svg'
import ArrowRight from 'assets/svgs/angle-right-solid.svg'

import { Banner } from 'components/banner'
import Sekiro from 'assets/img/sekiro_banner.jpg'
import Zelda from 'assets/img/zelda_banner.jpg'

import { Card } from 'components/card'
import Outriders from 'assets/img/product-outriders.jpg'
import Cyberpunk from 'assets/img/product-cyberpunk2077.jpg'
import Donkey from 'assets/img/product-donkey-kong-country-tropical-freeze.jpg'

import Modal from 'components/modal'

function App () {
  const [cartItems, setCartItems] = useState<number>(0)
  const [sliderPage, setSliderPage] = useState<number>(1)
  const [showModal, setShowModal] = useState<boolean>(false)

  const SliderRef = useRef<Slider>(null)
  const ProductsRef = useRef<HTMLDivElement>(null)

  const buy = useCallback(() => {
    setShowModal(true)

    setCartItems(prev => prev + 1)
  }, [])

  return (
    <>
      <Slider arrows={false} ref={SliderRef} beforeChange={() => setSliderPage(prev => prev === 1 ? 2 : 1)}>
        <div>
          <Frame image={Skorpion} mobileImage={SkorpionMobile}>
            <div className='info'>
              <p className='title'>MORTAL KOMBAT</p>
              <div className='price'>
                R$ 299
                <p className='cents'>,99</p>
              </div>
              <div className='description'>
                Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.
              </div>
            </div>
          </Frame>
        </div>
        <div>
          <Frame image={RedDead} mobileImage={RedDeadMobile}>
          <div className='info'>
              <p className='title'>RED DEAD REDEMPTION 2</p>
              <div className='price'>
                R$ 299
                <p className='cents'>,99</p>
              </div>
              <div className='description'>
              Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles, agora chega aprimorado para PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.
              </div>
            </div>
          </Frame>
        </div>
      </Slider>
      <Container>
        <Header cartItems={cartItems} />

        <div className='banner'>
          <div className='pagination'>
            <div className='sideA'>
              <p>{sliderPage === 1 ? 'MORTAL KOMBAT' : 'RED DEAD REDEMPTION 2'}</p>
              <div className='line' />
            </div>
            <div className='sideB'>
              <p>{sliderPage} / 2</p>
              <div className='arrows'>
                <img src={ArrowLeft} onClick={() => SliderRef.current?.slickPrev()} />
                <img src={ArrowRight} onClick={() => SliderRef.current?.slickNext()} />
              </div>
            </div>
          </div>
        </div>

        <div className='banners'>
          <Banner image={Zelda} name='The Legend of Zelda - Breath of th wild' />
          <Banner image={Sekiro} name='SEKIRO - Shadows die twice' />
        </div>

        <div className='spotlight' onClick={() => console.log(window.innerWidth)}>
          <div className='square'>
            <div className='point' />
            <div className='point' />
            <div className='point' />
            <div className='point' />
            <div className='point' />
            <div className='point' />
            <div className='point' />
            <div className='point' />
            <div className='point' />
          </div>
          Produtos em destaque
        </div>

        <div className='products' ref={ProductsRef}>
          {window.innerWidth > 600
            ? (
            <>
              <Card image={Outriders} name='Outriders' buy={buy} />
              <Card image={Cyberpunk} name='CYBERPUNK 2077' buy={buy} />
              <Card image={Donkey} name='Donkey Kong Country Tropical Freeze' buy={buy} />
            </>
              )
            : (
              <>
                <svg xmlns={ArrowLeft} fill='#000'>
                  <path
                    id='angle-left-solid'
                    d='M16.249,4.281,7.868,12.662l-.524.548.524.548,8.381,8.381,1.1-1.1L9.51,13.21l7.833-7.833Z'
                    transform='translate(-7.344 -4.281)'
                    fill='#000' />
                </svg>
                <Slider>
                  <div className='frame'>
                    <Card image={Outriders} name='Outriders' buy={buy} />
                  </div>
                  <div className='frame'>
                    <Card image={Cyberpunk} name='CYBERPUNK 2077' buy={buy} />
                  </div>
                  <div className='frame'>
                    <Card image={Donkey} name='Donkey Kong Country Tropical Freeze' buy={buy} />
                  </div>
                </Slider>
                <svg xmlns={ArrowRight} fill='#000'>
                  <path
                    id='angle-right-solid'
                    d='M12.627,4.281l-1.1,1.1,7.833,7.833-7.833,7.833,1.1,1.1,8.381-8.381.524-.548-.524-.548Z'
                    transform='translate(-11.531 -4.281)'
                    fill='#000' />
                </svg>
              </>
              )}
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  )
}

export default App
