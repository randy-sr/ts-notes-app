import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import NewNote from "./components/NewNote"
function App() {
  
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />   
          <Route path="edit" element={<h1>Edit</h1>} />   
        </Route>

        {/* En caso de que la url es cualquier cosa menos alguna ruta se devulve a Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
  
}

export default App
