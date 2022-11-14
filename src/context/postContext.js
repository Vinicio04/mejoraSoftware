import { useState, createContext, useContext, useEffect } from 'react'
import { getPostsRequests } from '../api/posts'

const postContext= createContext()

export const usePosts = () =>{
    const context = useContext(postContext)
    return context 
}
export const PostProvider = ({children}) =>{

    const [posts, setPosts] = useState([])

    const getPosts = async () =>{
      const res = await getPostsRequests()
      setPosts(res.data)
     
    }

    useEffect(()=>{
        getPosts()
    },[])
    
    return  <postContext.Provider value={{
        posts,
        setPosts
    }}>
        {children}
    </postContext.Provider>
}