
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import Home from './routes/Home'
import Detail from './routes/Detail'

// Routes는 Route를 찾는 역할이다.
// ex) 3000/"movies/123" -> 이 부분을 뜻함
function Movie() {
    return <Router>
            <Routes> 
                <Route path={`/movie/:id`} element={<Detail/>}/>
                <Route path={`/`} element={<Home/>}/>
            </Routes>
        </Router>
} 

export default Movie