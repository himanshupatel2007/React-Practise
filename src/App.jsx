import Card from "./components/Card";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <>
      <Header />
      <div className="flex mt-3 overflow-hidden h-[650px] w-screen ">
        <LeftContainer />
        <RightContainer />
      </div>
    </>
  );
}

export default App;
