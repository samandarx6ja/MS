import React from 'react'
import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
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
      <div className="home_item">
        <Link>
          <div className="home__headlink">
            <h1>Держим в курсе</h1>
            <p>Что сейчас делать: актуальные новости, советы, инструкции</p>
            <span>
              {' '}
              <p> Перейти к разделу</p>
            </span>
          </div>
        </Link>
        <Link>
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
    </div>
  )
}

export default HomeFooter
