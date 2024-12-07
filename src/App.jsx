import Decode from "./pages/Decode"
import Encode from "./pages/Encode"
import Footer from "./components/Footer"
import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Result from "./pages/Result"
import NotFound from "./components/NotFound"


const App = () => {
  return (
    <div className="h-screen">
      <Router>
        <Header />
        
          <Routes>
          {/* <div className="w-4/5 h-[75%] m-auto pt-16 flex flex-col sm:flex-row justify-between"> */}
            <Route path="/" element={<Encode />} />
            <Route path="/decode" element={<Decode />} />
            <Route path="*" element={<NotFound />} />
          {/* </div> */}
          </Routes>

        
        
        <Footer />
      </Router>
    </div>
  )
}

export default App