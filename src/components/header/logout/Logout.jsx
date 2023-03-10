import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../context/UserContext'

export default function Logout() {

  const {setIsLogin} = useContext(UserContext);

  return (
    <>
      <li>
        <button className="button gray" onClick={()=>{setIsLogin(true)}}>
          <img src={process.env.PUBLIC_URL + '/assets/icon-login.svg'} alt="" />
          <span>Login</span>
        </button>
      </li>
    </>
  )
}
