import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './style/HomeDownSlid.css'


const HomeRegistrationDomain = () => {
  return (
    <div className="regis__domain">
      <div className="container">
        <div className="regis__des">
          <h1>Регистрация доменов</h1>
          <div className="regis__link">
            <p>3 300 000 доменов на обслуживании, № 1 в России</p>
            <Link to="/">Продлить</Link>
            <Link to="/">Перенести в REG.RU</Link>
            <Link to="/"> Регистрация списком</Link>
          </div>
          <div className="search">
            <input type='text' placeholder='Введите домены или слова'/>
            {/* <Button variant="contained" color='success'>Contained</Button> */}
            <button className='btn btn__primary'>Contained</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRegistrationDomain
