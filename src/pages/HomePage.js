import { usePosts } from "../context/postContext"
import {vscEmptyWindow} from 'react-icons/vsc'

export function HomePage(){

    const { posts  }= usePosts()

    if(posts.length == 0) return(
        <div className=" flex flex-col justify-center items-center">
            <vscEmptyWindow className='w-48 h-48 text-white'/>
            <h1 className="text-white text-2xl">No hay Publicaciones </h1>
        </div>
    )
        
    
    
    return (
        <div>
            {posts.map(posts =>(
                <div key={post._id}>
                    {post.title}
                </div>
            ))}
        </div>
    )
}

