import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import Collage from './Pages/Collage';
import { Contact } from './Pages/Contact';
import { Layout } from './Components/Layout';
import { NavigationBar } from './Components/NavigationBar';
import { Jumbotron } from './Components/Jumbotron';
import { Footer } from './Components/Footer';



class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Collage} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Router>
        </Layout>
        <br></br>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;