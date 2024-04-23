import { Component } from 'react'
import './App.css'

import Class_template from '@/pages/Class'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello, World!</h1>
        <Class_template></Class_template>
      </div>
    )
  }
}

export default App
