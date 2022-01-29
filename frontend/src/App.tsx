import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import { Menu } from './components/Menu'
import MainPage from './pages/MainPage/MainPage'
import ExercisesPage from './pages/ExercisesPage/ExercisesPage'
import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage'
import MeasurementsPage from './pages/MeasurementsPage/MeasurementsPage'
import ExercisePage from './pages/ExercisePage/ExercisePage'
import WorkoutPage from './pages/WorkoutPage/WorkoutPage'

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/exercises" element={<ExercisesPage />} />
      <Route path="/exercise/:id" element={<ExercisePage />} />
      <Route path="/workouts" element={<WorkoutsPage />} />
      <Route path="/workout/:id" element={<WorkoutPage />} />
      <Route path="/measurements" element={<MeasurementsPage />} />
    </Routes>
    <Menu />
  </div>
)

export default App
