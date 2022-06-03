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
        <Route
          path='/design'
          element={
            <div className='text-center h1 text-primary'>
              Design Theory is being prepared
            </div>
          }
        />
        <Route
          path='/ux'
          element={
            <div className='text-center h1 text-primary'>
              UX is being prepared{" "}
            </div>
          }
        />
        <Route
          path='/ui'
          element={
            <div className='text-center h1 text-primary'>
              UI is being prepared{" "}
            </div>
          }
        />
        <Route
          path='/typography'
          element={
            <div className='text-center h1 text-primary'>
              Typography is being prepared{" "}
            </div>
          }
        />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
