import React from 'react'
import { Button, Container, Input } from '../components'

const Live = () => {
  return (
    <>
    <Container>
      <Input type="text" label="Name" max="25"/>
      <Input type="email" label="Email" max="25"/>
      <Button />
    </Container>
    </>
  )
}

export default Live