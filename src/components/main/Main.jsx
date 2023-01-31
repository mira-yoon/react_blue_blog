import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../../context/UserContext'
import Category from './category/Category'
import Author from './author/Author'
import About from './about/About'
import Posts from './posts/Posts'


export default function Main() {

  const {isLogin} = useContext(UserContext)
  const [posts, setPosts] = useState()
  useEffect(()=>{
    axios
    .get("http://localhost:3001/posts")
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
            {posts.map(post =>
              <li key={post.id}>
                <Link to={`/post/${post.id}`} className="post">
                  <article>
                    <img src={post.thumbnail} alt="" />
                    <div className="contents-wrap">
                      <Category 
                        category={post.category} 
                      />

                      <h3>{post.title}</h3>

                      <Author 
                        userName={post.userName} 
                        created={post.created} 
                        profileImg={post.profileImg} 
                      />

                      <p className="post-description">
                        {post.contents[0].text}
                      </p>
                    </div>
                  </article>
                </Link>
              </li>
            )}
          </ul> 
          {isLogin ? <About/> : <></>}
        </div>
      ) : null}
    </main>
  )
}
