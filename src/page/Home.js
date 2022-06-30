import React from 'react'
import { Link } from 'react-router-dom'

import Homeheader from '../component/home/Homeheader'
import HomeHeaderSlid from '../component/home/HomeHeaderSlid'
import HomeRegistrationDomain from '../component/home/HomeRegistrationDomain'

const Home = () => {
  return (
    <div>
      <Homeheader />
      <HomeHeaderSlid />
      <HomeRegistrationDomain />
    </div>
  )
}

export default Home