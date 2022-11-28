import React, { Fragment } from 'react'
import Routers from '../../routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <div>
            <Routers/>
        </div>
        <Footer/>
    </Fragment>
  )
}

export default Layout