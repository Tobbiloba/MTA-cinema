import Homepage from './screen/Homepage'
import Movies from './screen/Movies'
import Movie from './screen/Movie'
import Calendar from './screen/Calendar'
import Membership from './screen/Membership'
import Contact from './screen/Contact'
import About from './screen/About'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
function App() {
  const routes = [
    <Route path="/" element={<Homepage />} />,
    <Route path="/movies" element={<Movies />} />,
    <Route path="/playing-now" element={<Movie />} />,
    <Route path="/upcoming-movies" element={<Calendar />} />,
    <Route path="/membership" element={<Membership />} />,
    <Route path="/contact" element={<Contact />} />,
    <Route path="/about-us" element={<About />} />,
  ]

  const router = createBrowserRouter(createRoutesFromElements(routes))
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
