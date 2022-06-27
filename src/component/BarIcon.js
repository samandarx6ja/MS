import React from 'react'
import { Link } from 'react-router-dom'
import BarConstruktor from './LinkBar/BarConstruktor'
import BarXosting from './LinkBar/BarXosting'
import DomainBar from './LinkBar/DomainBar'

const BarIcon = () => {
  return (
    <div className="container">
      <div className="bar">
        <div className="bar__icon">
          <div className="hover__bar">
            <Link to="/domain">Домены</Link>
            <div className="hidden1">
              <DomainBar />
            </div>
          </div>

          <div className="hover__bar">
            <Link to="/construktor">Конструктор и CMS</Link>
            <div className="hidden">
              <BarConstruktor />
            </div>
          </div>

          <div className="hover__bar">
            <Link to="/xosting">Хостинг</Link>
            <div className="hidden">
              <BarXosting />
            </div>
          </div>

          <Link to="/vps">VPS </Link>
          <Link to="/server">Серверы и ДЦ </Link>
          <Link to="/ssl">SSL </Link>
          <Link to="/service">Сервисы </Link>
          <Link to="/help">Помощь </Link>
        </div>
      </div>
    </div>
  )
}

export default BarIcon
