
import './App.css';
import About from './components/About/About';
import Cert from './components/Cert/Cert';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Link from './components/Link/Link';
import Main from './components/Main/Main';
import Product from './components/Product/Product';
import Promotion from './components/Promotion/Promotion';
import Question from './components/Question/Question';
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
      <Cert />
      <Question />
      <Link />
      <Promotion />
      <Footer/>
    </>
  );
}

export default App;
