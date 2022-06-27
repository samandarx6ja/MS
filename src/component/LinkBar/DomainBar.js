import React from 'react'

const DomainBar = () => {
  return (
    <div className='domain__item'>
      <div className='bar__registration'>
        <h1>Регистрация  </h1>
        <p>Зарегистрировать домен  </p>
        <p>Перенос доменов в REG.RU   </p>
        <p>Освобождающиеся домены  </p>
        {/* <h1 className='bar__topmargin'>Лицензии   </h1> */}
        <p>Премиум-домены </p>
        <p>Освобождённые домены   </p>
        <p>Новые доменные зоны REG.RU    </p>
        <p>Энциклопедия доменных зон    </p>
        <p>Географические домены   </p>
        <p>Подбор по ключевому слову    </p>


      </div>
      <div className='bar__buy'> 
        <h1>Купить-продать </h1>
        <p>Магазин доменов  </p>
        <p>Доменный брокер  </p>
        <p>Гарант сделки  </p>
        <p>Доменный брокер для владельца  </p>
        <p>Экспертная оценка домена  </p>
        <h1 className='bar__topmargin'>Специальное  </h1>
        <p>Условия и цены для Партнёров  </p>
        <p>Юридическое сопровождение  </p>
        <p>Нотариальное заверение </p>
        <p>Защита домена  </p>

      </div>
      <div className='bar__operation'>
        <h1>Операции </h1>
        <p>Продление регистрации  </p>
        <p>Смена администратора </p>
        <p>Изменение данных  </p>
        <p>Перенос доменов между аккаунтами  </p>
        <p>Смена регистратора </p>
        <p>Договоры и письма  </p>
        <p>Онлайн-операции с доменами  </p>
      </div>
    </div>
  )
}

export default DomainBar