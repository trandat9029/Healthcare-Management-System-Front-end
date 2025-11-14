//App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import {Toaster} from 'sonner'
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"

//Layouts and Pages
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
import LoginPage from "./pages/auth/LoginPage"


function App() {

  const { isAuthenticated, initialize } = useAuthStore();
  // Khởi tạo auth khi app load
  useEffect(() =>{
    initialize();
  }, [initialize]);

  // Protected Route cho Admin
  const ProtectedAdminRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <>
    <Toaster richColors position="top-right"/>
      <Router>
        {/* <Route path="/admin/login" element={<LoginPage />} /> */}
        <Routes>
          {/* Client */}
          <Route path="/" element={<Main />} >
            <Route index element={<Home />} />
            <Route path="specialty" element={<Speciaclty />} />
            <Route path="medical-facilities" element={<MedicalFacility />} />
            <Route path="handbook" element={<HandBook />} />
            <Route path="*" element={<NotFound />} />
          </Route>

        <Route
          path="/login"
          element={<LoginPage />}
        />

          {/* Admin */}
          <Route 
            path="/admin" 
            element={
              <ProtectedAdminRoute>
                <Admin />
              </ProtectedAdminRoute>
            } 
          >
            <Route index element={<Dashboard />} />
            <Route path="manage-specialty" element={<ManageSpecialty />} />
            <Route path="manage-medical-facilities" element={<ManageClinic />} />
            <Route path="manage-handbook" element={<ManageHandbook />} />
            <Route path="manage-users" element={<ManageUser />} />
            <Route path="manage-profile" element={<Profile />} />
            <Route path="manage-patient" element={<ManagePatient />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
