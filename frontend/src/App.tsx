import React from 'react'
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <h1>test</h1>
      </>
    </QueryClientProvider>
  )
}

export default App
