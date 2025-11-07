import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Main from "./layouts/main/Main"
import Home from "./pages/Home/Home"
import Speciaclty from "./pages/specialty/Specialty"
import MedicalFacility from "./pages/medicalFacilities/MedicalFacility"
import HandBook from "./pages/handbook/Handbook"
import NotFound from "./pages/notPound/NotFound"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route index element={<Home />} />
            <Route path="specialty" element={<Speciaclty />} />
            <Route path="medical-facilities" element={<MedicalFacility />} />
            <Route path="handbook" element={<HandBook />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
