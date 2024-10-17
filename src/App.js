import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";

// import  Parent components
import ParentDashboard from "./components/ParentDashboard";
import PaymentHistory from "./components/PaymentHistory";
import StudentProgress from "./components/StudentProgress";
import MakePayment from "./components/MakePayment";
import Profile from "./components/Profile";
import Communication from "./components/Communication";

// import School components
import AdminDashboard from "./components/AdminDashboard";
import PaymentManagement from "./components/PaymentManagement";
import AddStudent from "./components/AddStudent";
import ManageStudents from "./components/ManageStudents";
import TeacherManagement from "./components/TeacherManagement";
import ClassManagement from "./components/ClassManagement";
import Accouncements from "./components/Accouncements";



function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          
          {/* Parent Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute requiredRole="parent">
                <ParentDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/payment" 
            element={
              <ProtectedRoute requiredRole="parent">
                <MakePayment />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/payment-history" 
            element={
              <ProtectedRoute requiredRole="parent">
                <PaymentHistory />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/student-progress" 
            element={
              <ProtectedRoute requiredRole="parent">
                <StudentProgress />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute requiredRole="parent">
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/communication" 
            element={
              <ProtectedRoute requiredRole="parent">
                <Communication />
              </ProtectedRoute>
            } 
          />
          
          {/* Admin Routes */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/payment-management" 
            element={
              <ProtectedRoute requiredRole="admin">
                <PaymentManagement />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/add-student" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AddStudent />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/manage-students" 
            element={
              <ProtectedRoute requiredRole="admin">
                <ManageStudents />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/teacher-management" 
            element={
              <ProtectedRoute requiredRole="admin">
                <TeacherManagement />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/class-management" 
            element={
              <ProtectedRoute requiredRole="admin">
                <ClassManagement />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/accouncements" 
            element={
              <ProtectedRoute requiredRole="admin">
                <Accouncements />
              </ProtectedRoute>
            } 
          />
          
          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
