import {Formik, Form, Field, ErrorMessage} from 'formik'
import { usePosts } from '../context/postContext'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
export  function PostForm() {

  const {createPost, getPost} = usePosts()
  const navigate = useNavigate
  const params = useParams()
  const [post, setPosts] = useState({
      title:'',
      description:''
  })

  useEffect(() => {
     (async () => {
      if(params.id){
        const post = await  getPost(params.id)
        setPosts(post)
       }
     })();
  },[])
  return (
    <div>
      <Formik
      initialValues={post}
      validationSchema={Yup.object({
        title:Yup.string().required("El titulo es requerido"),
        description:Yup.string().required("La descripcion es requerida"),
      })}
      onSubmit={async(values, actions) => {
          await createPost(values)
          navigate('/')
      }}
      >
       {({handleSubmit}) => (
         <Form onSubmit={handleSubmit}>  
         <Field name='title' placeholder="Titulo" 
          className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
         />
         <ErrorMessage component="p" className='text-red-400 text-sm' name ='title' />
        
         <Field name='description' placeholder="Descripcion" 
         className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
         />

         <ErrorMessage component="p" className='text-red-400 text-sm' name ='description' />
         <button type='submit'>Guardar</button>
       </Form>
       )}
       </Formik>
    </div>
  )
}

