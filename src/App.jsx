import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div>
     <div>
      <h1>Registration Form</h1>
      {/* registration form */}
      <form >
        <label > Name : </label>
        <input  type="text"  placeholder='Enter your Name'/>
        <br /><br />
        <label htmlFor="Address">Address:
          <input type="text"  placeholder='Enter Your Address'/>
        </label>
        <br />
       <p>
          <label  htmlFor="Male">Gender :
           Male<input  type="radio" />
           Female <input  type="radio" />
  
          </label>
       </p>
        <br />
        <label htmlFor="">Mobile :</label>
        <input type="number"  placeholder='Enter your number'/>
        <br /><br />
        <label htmlFor="">Email Id:
          <input type="email" placeholder='Enter Mail Id' />
        </label>
        <br /><br />
        <label htmlFor="">DOB :
          <input type="date"  />
        </label>
        <br /><br />
        
      </form>
      

      
     </div>
   </div>
    </>
  )
}

export default App