import { Route, Routes } from "react-router-dom";
import { Header, Footer, Error } from "./components";
import { PostSingle } from "./pages/Posts-Single/Posts-Single";
import { Posts } from "./pages/Posts/Posts";

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/posts/:userId' element={<PostSingle />} />
        <Route path='/design' element={<>Design Theory </>} />
        <Route path='/ux' element={<>UX </>} />
        <Route path='/ui' element={<>UI </>} />
        <Route path='/typography' element={<>Typography </>} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
