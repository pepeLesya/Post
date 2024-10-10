import { useRef, useState } from 'react'
import './App.css'
import { PostItem } from './components/PostItem'
import { PostList } from './components/PostList'
import { MyButton } from './components/UI/button/MyButton'
import { MyInput } from './components/UI/input/MyInput'
import PostForm from './components/PostForm'
import MySelect from './components/UI/MySelect'

function App() {
  const [posts,setPosts] = useState([
    {id:1, title: 'Сегодня', body:'просто текст'},
    {id:2, title: 'Вчера', body:'какой то текст'},
    {id:3, title: 'Завтра', body:'что-то'}

  ])
 const [selectedSort,setSelectedSort] = useState('')
 const createPost = (newPost) =>{
  setPosts([...posts,newPost])
}

const removePost = (post) =>{
  setPosts(posts.filter(p => p.id !== post.id))
}
const sortPosts = (sort) =>{
  setSelectedSort(sort)
  setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
}

  return (
  
      <div className='App '>
        <PostForm create = {createPost}/>
        <div>
         <MySelect 
              value = {selectedSort}
              onChange ={sortPosts}
              defaultValue = "Сортировка по:"
              option={[
                {value:'title', name:'Пo названию'},
                {value:'body', name:'По описанию'}
                
              ]}
         />
        </div>
        {posts.length !==0
          ? <PostList remove={removePost} posts={posts} title={"Посты про js"}/>
          : <h1>Постов нет</h1>

          }
    </div>
      
  )
}

export default App
