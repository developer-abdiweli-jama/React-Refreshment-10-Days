import React from 'react'
import './App.css'
import UserProfile from './components/UserProfile'

/**
 * App component serves as the root container for the Day 1 project.
 * It displays a brief introduction and the UserProfile component.
 */
function App() {
  return (
    <>
      {/* Introduction header with project details and creator information */}
      <h4>
        Hello this is Anson Course of React and I am Abdiweli Jama aka(Hanad Hajji)
        I am doing this to Refresh all my knowledge of React.
        This file will be updated throughout the course.
        Day One: 25.Dec.2025
      </h4>
      <hr />

      {/* Main content: User profile component */}
      <UserProfile />
    </>
  )
}

export default App
