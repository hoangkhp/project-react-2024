import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      {/* Outlet giup gia tri cua con duoc truyen vao khi ke thua gia tri cua cha */}

      <Header />
      <Outlet />
      <Footer />
    </>

  )
}

export default App
