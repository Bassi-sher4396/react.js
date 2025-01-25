import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(<>
<div>
  <h1>custom apps</h1>
</div>

</>
  )
}

// const reactElement ={
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children:'click to open google'
// }


const reactElement = React.createElement('a',
  {href:'https://google.com',
    target:'_blank'
  },
  'click me to visit google'
)

const anotherElement=(

  <a href='https://google.com' target='_blank'>visit google</a>
)

createRoot(document.getElementById('root')).render(
 
  //  MyApp()    this alone also possible



  // <React.StrictMode>
  //   <MyApp/>
  // </React.StrictMode>

  


  // anotherElement



  //yhan is tareeke se reactElement nhi chal sakta tha kyuki vo syntax shi nhi hai is tarah halane ke liye

//ab kar sakte hai reacElement ko use upar jis tareeke se define kia hai vaise react ke render krne ke tareeke se
  // reactElement,

  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
