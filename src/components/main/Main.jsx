import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import UserContext from '../../context/UserContext'

import About from './about/About'
import Posts from './posts/Posts'
import './main.css'

export default function Main() {

  const {isLogin} = useContext(UserContext)
  const [posts, setPosts] = useState()
  useEffect(()=>{
    axios
    .get("https://mira-yoon.github.io/react_blue_blog/database/posts.json")
    .then((json)=>{
      setPosts(json.data)
    })
  },[])


  return (
    <main>
      {posts !== undefined ? (
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <ul className="posts">
            <Posts posts={posts} />
          </ul> 
          {isLogin ? <About /> : <></>}
        </div>
      ) : null}
    </main>
  )
}
