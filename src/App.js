import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { UserProvider } from "./context/user/UserContext";
import HomeSingleUser from "./pages/HomeSingleUser";

const App = () => {
    return(
        <UserProvider>
                <Router>
                    <div className="app d-flex flex-column">
                        <Navbar />
                        <Routes>
                            <Route path="/" exact element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/user/:login" element={<HomeSingleUser />} />
                            <Route path="*" element={<NotFound />} /> 
                        </Routes>
                        <Footer />
                    </div>
                </Router>
        </UserProvider>
    )
}

export default App;