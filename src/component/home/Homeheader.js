import React from 'react'
import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
    <div className="container__max">
      <div className="home__header">
        <Link to="/">
          <div className="home__headlink">
            <h1>Держим в курсе</h1>
            <p>Что сейчас делать: актуальные новости, советы, инструкции</p>
            <span>
              {' '}
              <p> Перейти к разделу</p>
            </span>
          </div>
        </Link>
      </div>
      <div className="home__item">
        <Link to="/">
          <div className="home__banner banner1">
            <h1>Сервер для бизнеса</h1>
            <p> Обслуживаем, оптимизируем и мониторим 24/7!</p>
            <span>
              {' '}
              <p>Больше об услуге</p>
            </span>
          </div>
        </Link>
        <Link to="/">
          <div className="home__banner banner2">
            <h1>Суперцена на .XYZ</h1>
            <p>Теперь всего 85 рублей!</p>
            <span>
              {' '}
              <p> Выбрать домен</p>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomeFooter
