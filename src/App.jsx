import { BrowserRouter as Router, Routes, Route, Outlet,  } from "react-router-dom";
import './App.css'
import PersistentComponent from "./components/PersistentComponent";
import QuestionPage from "./pages/QuestionPage";
import ResultsPage from "./pages/ResultsPage";
import StartPage from './pages/StartPage'

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage/>} />
          <Route  path="/" element={<PersistentComponent/>} >
            <Route path="/questions" exact element={<QuestionPage/>} />
            <Route path="/results" exact element={<ResultsPage/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
