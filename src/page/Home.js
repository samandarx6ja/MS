import React from 'react'
import { Link } from 'react-router-dom'

import Homeheader from '../component/home/Homeheader'
import HomeHeaderSlid from '../component/home/HomeHeaderSlid'

const Home = () => {
  return (
    <div>
      <Homeheader />
      <HomeHeaderSlid />
    </div>
  )
}

export default Home