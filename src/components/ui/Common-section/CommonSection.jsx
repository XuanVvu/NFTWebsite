import React from 'react'
import './common-section.css'

import { Container } from 'reactstrap'

const CommonSection = ({title}) => {
  return (
    <section className='common-section'>
        <Container className='text-center mt-5'>
            <h2>{title}</h2>
        </Container>
    </section>
  )
}

export default CommonSection