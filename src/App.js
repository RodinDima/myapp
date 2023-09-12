
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Product from './components/Product/Product';
import Reviews from './components/Reviews/Reviews';
import Steps from './components/Steps/Steps';
import Team from './components/Team/Team';
import Courses from './components/courses/Courses';

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Product />
      <Steps />
      <Courses />
      <Team />
      <Reviews />
    </>
  );
}

export default App;
