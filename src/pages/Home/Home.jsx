import { useEffect, useState } from 'react'
import axios from 'axios'
import "./home.css"

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    axios
    .get("http://localhost:3001/posts")
    .then((json)=>{
      setPosts(json.data)  
    })
  },[])
  console.log(posts)
  return (
    <div>
      Home
      {posts.map(post=><div key={post.id}>{post.title}</div>)}
    </div>
  )
}
