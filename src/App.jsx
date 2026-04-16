import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {
  return (<>
    <Navbar/>
    <Card name = "himanshu patel" age= {18} about = "student"/>
    <Card name = "harshVardhan" age ={21} about = "web developer"/>
    <Card name = " harsh monga" age = {21} about = "drummer"/>
  </>
  )
}

export default App
