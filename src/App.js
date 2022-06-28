import React, { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import page
import Home from './page/Home'
import Domain from './page/Domain'
import Construktor from './page/Construktor'
import Xosting from './page/Xosting'
import Vps from './page/Vps'
import Server from './page/Server'
import SSL from './page/SSL'
import Service from './page/Service'
import Help from './page/Help'
import { Link } from 'react-router-dom'

// import Icons
import DehazeIcon from '@mui/icons-material/Dehaze'
import BarIcon from './component/BarIcon'

function App() {
  const [show, setShow] = useState(false)
  console.log(show)
  return (
    <div className="App">
      <Navbar />
      <div className="navbar">
        <BrowserRouter>
          <div className="nav__item">
            <div className=" container">
              <div className="nav__link">
                <div className="navmob__logo ">
                  <DehazeIcon
                    className="nav__icons"
                    onClick={() => setShow(!show)}
                  />
                  <Link to="/">
                    <svg
                      baseProfile="basic"
                      xmlns="http://www.w3.org/2000/svg"
                      width="74"
                      height="36"
                      viewBox="0 0 111 54"
                    >
                      <path
                        fill="#FFF"
                        d="M6.1,16.3l0.8-0.4l15.9-8.3c-0.2-1.1-1.3-1.9-2.4-1.8L5.8,7c-1.2,0.1-2.1,1.2-2,2.4L4,11.5 c0.1,1.2-0.7,2.3-1.9,2.4L0,14l3.2,32.4L6,17.2L6.1,16.3z"
                      />
                      <g fill="#FFF">
                        <path d="M22.4,25h-3.9v4.7h3.9c1.5,0,2.6-0.9,2.6-2.3C25,25.9,23.8,25,22.4,25z" />
                        <path d="M40.8,0L7.7,17.2L4.1,54l33-2.6L55.7,50L67.6,49l3.6-36.8L40.8,0z M25.3,39.1l-3.8-6.2h-3.1v6.2h-3.7V21.7 h8.1c3.6,0,5.8,2.4,5.8,5.6c0,3.1-1.5,4.7-3.4,5.1l4.3,6.6H25.3z M44.1,25h-8.6v3.7h7.6v3.2h-7.6v3.9h8.6v3.2H31.9V21.7h12.3V25z M62.8,36.1c-1.8,2-4.2,3.3-7.4,3.3c-5.1,0-9.2-3.5-9.2-9c0-5.5,4.2-9,9.2-9c3.6,0,5.9,1.8,7.2,3.9L59.5,27 c-0.8-1.2-2.3-2.3-4.1-2.3c-3.1,0-5.4,2.4-5.4,5.7c0,3.3,2.3,5.7,5.4,5.7c1.5,0,3-0.7,3.7-1.3v-1.9h-4.6v-3.3h8.3V36.1z" />
                      </g>
                      <path
                        fill="#fff"
                        d="M71.8 37.3c0-1.1 1-2.1 2.1-2.1 1.1 0 2.1 1 2.1 2.1 0 1.1-1 2.1-2.1 2.1C72.8 39.4 71.8 38.4 71.8 37.3zM89.5 39.1l-4.2-6.2h-2.7v6.2h-3.7V21.7H87c3.6 0 5.8 2.4 5.8 5.6 0 3.1-1.9 4.7-3.8 5.1l4.6 6.6H89.5zM89.1 27.3c0-1.5-1.1-2.3-2.6-2.3h-3.9v4.7h3.9C88 29.7 89.1 28.8 89.1 27.3zM95.6 32.2V21.7h3.7V32c0 2.4 1 4.1 3.7 4.1 2.7 0 3.7-1.7 3.7-4.1V21.7h3.8v10.4c0 4.3-2.2 7.3-7.4 7.3C97.8 39.4 95.6 36.4 95.6 32.2z"
                      />
                    </svg>
                  </Link>
                </div>

                <Link to="/domain">Домены </Link>
                <Link to="/construktor">Конструктор и CMS </Link>
                <Link to="/xosting">Хостинг </Link>
                <Link to="/vps">VPS </Link>
                <Link to="/server">Серверы и ДЦ </Link>
                <Link to="/ssl">SSL </Link>
                <Link to="/service">Сервисы </Link>
                <Link to="/help">Помощь </Link>
                <div className="sign__in">
                  <a className="btn btn__blue">Вход</a>
                </div>
              </div>
            </div>
          </div>
          {show === true && <BarIcon params={show} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/construktor" element={<Construktor />} />
            <Route path="/xosting" element={<Xosting />} />
            <Route path="/vps" element={<Vps />} />
            <Route path="/server" element={<Server />} />
            <Route path="/ssl" element={<SSL />} />
            <Route path="/service" element={<Service />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
