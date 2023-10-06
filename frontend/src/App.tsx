import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Demo from './components/demo/demo'
import Signup from './components/signup/signup';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <Routes>
            <Route path="/" element={<Demo />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
