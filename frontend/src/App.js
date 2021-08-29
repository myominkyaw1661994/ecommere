import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homescreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <main className="py-3">
          <Container>
            <Route path='/' component={Homescreen} exact />
            <Route path='/product/:id' component={ProductScreen}/>
          </Container>
        </main>
        <Footer/>
        </div>
      </Router>
  )
}

export default App
