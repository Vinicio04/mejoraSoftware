import toast from 'react-hot-toast'
import { useContext, usePosts } from '../context/postContext'
import { useNavigate } from 'react-router-dom'

export function postCard({post}) {

    const {deletePost}= usePosts ()
    const navigate = useNavigate()

    const handleDelete = (_id) => {
        toast((t)=>(
            <div>
                <p className='text-white'>
                    ¿Estás seguro que quieres eliminar la publicación? 
                    <strong>{id}</strong>
                </p>
                <div>
                    <button className='bg-red-500 hover:bg-red-400 px-3 py-3 text-sm text-white rounded-sm mx-2' onClick={() => {
                        deletePost(id);
                        toast.dismiss(t.id);
                        }
                    } >Eliminar</button>

                    <button onClick={() => toast.dismiss(t.id) } className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm'>Cancelar</button>
                </div>  
            </div>
        ),{
            style:{
                background: "#202020"
            }
        })
    }

  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer"
     onClick={() => navigate(`/posts/${post._id}`)}>
      <div className="px-4 py-7">
      <div className="flex justify-betwen">
      <h3>
        {post.title}
        </h3>
        <button onClick={() => handleDelete(post._id)} className="bg-red-600 text-sm px-2 py-1 rounded-sm">
            Borrar
        </button> 
      </div>
      <p>
      {post.description}
      </p>
      
      </div>
    </div>
  )
}
