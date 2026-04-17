import Card from "./components/Card"
import stateData from "./components/data"
function App() {

  return (
    <div className="container">
    {
      stateData.map(data =>{
      return <Card 
      image = {data.image}
      state = {data.state}
      capital = {data.capital}
      about= {data.about}
      />
    })
    }
    </div>
  )
}

export default App
