import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style/style.css'

// import required modules
import { Pagination, Navigation } from 'swiper'

const HomeHeaderSlid = () => {
  return (
    <div className="home__slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="myswiper"
      >
        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home__item">
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
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeHeaderSlid
