import React from 'react'
import { MainHeader, Authentication } from '../../components'

function Auth() {
  return (
    <>
        <MainHeader IsLogin={false} />
        <Authentication />
    </>
  )
}

export default Auth