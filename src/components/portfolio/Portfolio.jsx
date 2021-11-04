import { useEffect, useState } from 'react'
import PortfolioList from '../portfoliolist/Portfoliolist'
import './portfolio.scss'

export default function Portfolio () {
  const [selected, setSelected] = useState('featured')

  const list = [
    { id: 'featured', title: 'Featured' },
    { id: 'web', title: 'Web App' },
    { id: 'mobile', title: 'Mobile App' },
    { id: 'desing', title: 'Desing' },
    { id: 'Branding', title: 'Branding' }
  ]
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='containter'>
        <div className='item'>
          <img
            src='https://4.bp.blogspot.com/-qSjqno2ftnw/VxUlqSCnNKI/AAAAAAAAALk/Ork7QBhKViE5Tq2YIKfMLdfjrb9SSsengCLcB/s200/icon-student-app.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://4.bp.blogspot.com/-qSjqno2ftnw/VxUlqSCnNKI/AAAAAAAAALk/Ork7QBhKViE5Tq2YIKfMLdfjrb9SSsengCLcB/s200/icon-student-app.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://4.bp.blogspot.com/-qSjqno2ftnw/VxUlqSCnNKI/AAAAAAAAALk/Ork7QBhKViE5Tq2YIKfMLdfjrb9SSsengCLcB/s200/icon-student-app.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://4.bp.blogspot.com/-qSjqno2ftnw/VxUlqSCnNKI/AAAAAAAAALk/Ork7QBhKViE5Tq2YIKfMLdfjrb9SSsengCLcB/s200/icon-student-app.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://4.bp.blogspot.com/-qSjqno2ftnw/VxUlqSCnNKI/AAAAAAAAALk/Ork7QBhKViE5Tq2YIKfMLdfjrb9SSsengCLcB/s200/icon-student-app.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img
            src='https://4.bp.blogspot.com/-qSjqno2ftnw/VxUlqSCnNKI/AAAAAAAAALk/Ork7QBhKViE5Tq2YIKfMLdfjrb9SSsengCLcB/s200/icon-student-app.png'
            alt=''
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
