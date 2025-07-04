import './App.css'
import React, { Suspense, lazy } from "react";

import { AuthProvider } from './lazytask'
const Dashboard = lazy(() =>import ('./dashborad'));


function App() {
  return (
      <div className='main'>
       <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard />
      </Suspense>
    </AuthProvider>
      </div>
  )
}

export default App

