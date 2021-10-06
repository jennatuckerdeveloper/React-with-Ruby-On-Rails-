import React from 'react'
import Routes from "../routes/index";
import {useState, useEffect} from 'react'

const App = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    const getPosts = async () => {

      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)

    }

    getPosts()

  }, []) // Dependency value for something like user

  const fetchPosts = async () => {
    const postsUrl = "api/v1/posts/index"
    const res = await fetch(postsUrl)
    const data = await res.json()
    return data

  }
  console.log(posts)
  return (
    <div>
      Hello World from App component
      <>{Routes}</>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

export default App
