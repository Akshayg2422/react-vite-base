import "./App.css"
import Button from "./components/Button"
import CustomSkeleton from "./components/Skeleton"

function App() {
  return (
    <>
     <Button text={'Submit'}/>
     <CustomSkeleton height={120} width={120}/>
    </>
  )
}

export default App
