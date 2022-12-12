import './form.css';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useFormInput } from './hooks';

function CreatePost() {
const title=useFormInput('');
const content=useFormInput('');
const handelFormSubmit=(e)=>{
    e.preventDefault();
    console.log("title",title.value);
    console.log("content",content.value);
    addDoc(collection(db,'/blogs'),{
        title:title.value,
        content:content.value
    })
}

    return (
      <div id="create-post">
      <form onSubmit={handelFormSubmit}>
        <label htmlFor="title">Title</label>
        <input name='title' id="title" {...title} required>
        </input>
        <label htmlFor="content">Content</label>
        <textarea name='content' id="content" {...content} required></textarea>
        <button className='btn'>Post</button>
      </form>
      </div>
    );
  }
  
  export default CreatePost;
  