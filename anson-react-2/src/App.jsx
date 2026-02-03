import React from 'react'
import './App.css'
import UserProfile from './components/UserProfile'
import PropTypes from 'prop-types'

/**
 * App component for Day 2 of the React refreshment streak.
 * Demonstrates passing props to the UserProfile component.
 */
function App() {
  return (
    <>
      <h4>This is Day 2 of 10 days react streak with anson-ReactJs full course 26-Dec-2026</h4>
      <hr />

      {/* User profile component with props passed for username, age, and interests */}
      <UserProfile
        username="hanadoow"
        age={23}
        isLoggedIn={true}
        favoriteFoods={["pizza", "Burger", "Pasta"]}
      />
    </>
  )
}

export default App
