import React from 'react'
import { Container } from 'styles/components/banner'

interface Props {
    image: string
    name: string
}

export function Banner ({ image, name }: Props) {
  return (
    <Container>
        <img src={image} alt='Banner Image' />

        <div>
            <div />
            <div>
                <p>{name}</p>
                <div className='line' />
            </div>
        </div>
    </Container>
  )
}
