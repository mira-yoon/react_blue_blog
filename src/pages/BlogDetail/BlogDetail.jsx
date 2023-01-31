import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function BlogDetail() {
  const location = useLocation();
  const postNumber = location.pathname.split('/')[2];

  const [post, setPost] = useState(undefined)
  useEffect(()=>{
    axios
    .get(`http://localhost:3001/posts/${postNumber}`)
    .then((json)=>{
      setPost(json.data)  
    })
    .catch(()=>{
      setPost(null)
    })
  },[])

  return (
    <>
      {post === undefined ? 
      <div>로딩 중</div> : post === null ? 
      <div>404</div> : <div>{post.title}</div>}
    </>
  )
}
