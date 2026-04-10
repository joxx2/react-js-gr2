import String from "./components/Header/StringProps";
import ObjectList from "./components/lists-array/ObjectList";
import RenderList from "./components/lists-array/RenderList";

function App() {
  const firstName = 'jon';
  const lastName = 'hajredinaj';

  return (
    <>

      <String firstName={firstName} lastName={lastName} />
      <RenderList />
      <ObjectList />
    </>

  )
}

export default App
