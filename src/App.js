import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MovieDetails from './components/MovieDetails';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  


  

  return (
    <>
   
    <AuthContextProvider>
    <Layout>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Navigate replace to={'/'}/>}/>
        <Route path='signin' element={<SignIn/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='/*' element={<Navigate replace to={'/'}/>}/>
        <Route path='/movie/:id' element={<ProtectedRoute><MovieDetails/></ProtectedRoute>}/>
    </Routes>
    </Layout>
    </AuthContextProvider>
  
    </>
  );
};

export default App;