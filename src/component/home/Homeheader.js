import React from 'react'
import { Link } from 'react-router-dom'

const HomeFooter = () => {
  return (
    <div>
      <Link to="/">
        <div className="home__header">
          <h1>Держим в курсе</h1>
          <p>Что сейчас делать: актуальные новости, советы, инструкции</p>
          <p> Перейти к разделу</p>
        </div>
      </Link>
    </div>
  )
}

export default HomeFooter
