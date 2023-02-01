import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../context/UserContext'

export default function Login() {
  const {setIsLogin} = useContext(UserContext);
  return (
    <>
      <li className="profile-img">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/assets/profile.jpg'} alt="My Page" />
        </Link>
      </li>
      <li>
        <Link to="/" className="button">
          <img src={process.env.PUBLIC_URL + '/assets/icon-modify-white.svg'} alt="" />
          <span>Write</span>
        </Link>
      </li>
      <li>
        <button className="button white" onClick={()=>{setIsLogin(false)}}>
          <img src={process.env.PUBLIC_URL + '/assets/icon-logout.svg'} alt="" />
          <span>Logout</span>
        </button>
      </li> 
    </>
  )
}
