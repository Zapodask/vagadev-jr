import React, { useState } from 'react'
import { Container } from 'styles/components/card'
import Mario from 'assets/svgs/card-mario.svg'

interface Props {
    image: string
    name: string
    buy: () => void
}

export function Card ({ image, name, buy }: Props) {
  const [checked, setChecked] = useState<boolean>(false)

  function submit () {
    if (checked === false) {
      setChecked(true)

      buy()
    }
  }

  return (
    <Container checked={checked}>
        <img src={image} />

        <div className='down'>
            <p className='name'>
                {name}
            </p>

            <div className='price'>
                R$ 200,00
            </div>

            <button onClick={submit}>
              {!checked
                ? 'COMPRAR'
                : (
                <>
                  COMPRADO!
                  <img src={Mario} />
                </>
                  )}
            </button>
        </div>
    </Container>
  )
}
