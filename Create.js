import React from 'react'

function Create() {
  return (
    <div className='form-container'>
        <form>
            <h2>Hozzáadás</h2>
            <input type="text" name="title" placeholder='Write Title'></input><br/>
            <input type="text" name="desc" placeholder='Write Description'></input><br/>
            <input type="file" name="title" placeholder='Write Title'></input><br/>
            <button className='newblog-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Create