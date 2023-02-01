import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../../../context/UserContext'
import './about.css'


export default function About() {

  const {userId} = useContext(UserContext)
  const [userData, setUserData] = useState()

  useEffect(()=>{
    axios
    .get(`http://localhost:3001/users/${userId}`)
    .then((json)=>{
      setUserData(json.data)  
    })
  },[])

  return (
    <>
      {userData !== undefined ? (
        <aside className="about">
          <h2>About Me</h2>
          <img src={process.env.PUBLIC_URL + userData.profileImg} alt="" className="user-profile" />
          <p className="user-name">{userData.name}</p>
          <p className="user-description">{userData.userInfo}</p>
          <h3>Categories</h3>
          <ul className="categories">
            {userData.category.map((c, index) =>
              <li key={index}><Link to="/">{c}</Link></li>
            )}
          </ul>
          <h3>Follow</h3>
          <ul className="sns">
            {Object.keys(userData.sns).map((s, index) => 
              <li key={index}>
                <Link to="">
                  <img src={process.env.PUBLIC_URL + `/assets/${s}.svg`} alt={s} />
                </Link>
              </li>
            )}
          </ul>
        </aside>
      ): <></>}
    </>
  )
}
