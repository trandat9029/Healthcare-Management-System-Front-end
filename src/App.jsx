import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Main from "./layouts/main/Main"
import Home from "./pages/Home/Home"
import Speciaclty from "./pages/specialty/Specialty"
import MedicalFacility from "./pages/medicalFacilities/MedicalFacility"
import HandBook from "./pages/handbook/Handbook"
import NotFound from "./pages/notPound/NotFound"

import Admin from "./layouts/admin/Admin"
import Dashboard from "./pages/Admin/dashboard/Dashboard"
import ManageSpecialty from "./pages/Admin/specialty/ManageSpecialty"
import ManageHandbook from "./pages/Admin/handbook/ManageHandbook"
import ManageClinic from "./pages/Admin/clinic/ManageClinic"
import ManageUser from "./pages/Admin/users/ManageUser"
import Profile from "./pages/Admin/profile/Profile"
import ManagePatient from "./pages/Admin/doctor/ManagePatient"


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Client */}
          <Route path="/" element={<Main />} >
            <Route index element={<Home />} />
            <Route path="specialty" element={<Speciaclty />} />
            <Route path="medical-facilities" element={<MedicalFacility />} />
            <Route path="handbook" element={<HandBook />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* Admin */}
          <Route path="/admin" element={<Admin />} >
            <Route index element={<Dashboard />} />
            <Route path="manage-specialty" element={<ManageSpecialty />} />
            <Route path="manage-medical-facilities" element={<ManageClinic />} />
            <Route path="manage-handbook" element={<ManageHandbook />} />
            <Route path="manage-users" element={<ManageUser />} />
            <Route path="manage-profile" element={<Profile />} />
            <Route path="manage-patient" element={<ManagePatient />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
