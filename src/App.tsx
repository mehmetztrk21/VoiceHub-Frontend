import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './home';
import NoPage from "./component/noPage";
import Profile from './user/profile';
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
function App() {
  return (
    <>
    <Navigation></Navigation>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
          </Route>
          <Route path="/profile" element={<Profile />}>
          </Route>
          <Route path="*" element={<NoPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
