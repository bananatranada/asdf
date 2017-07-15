import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet';

import logo from './logo.svg';
import './App.css';

// Route components
import Home from './pages/Home/Home';
import About from './pages/About/About';

// Title/Layouts/Partials goes here
class App extends Component {
  render() {
    console.log(this.props.location);

    return (
      <div className="App change-color--on-hover-darken-red change-bg-color--on-hover-darken-red transition-prop--opacity transition-prop--margin">
        <Helmet>
          <title>{this.props.location.pathname}</title>
        </Helmet>

        <header style={{ position: 'relative', zIndex: 500 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>

        <main>
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.pathname.split('/')[1]}
              timeout={50}
              classNames="App-transition"
              mountOnEnter={true}
              unmountOnExit={true}
            >
              <Switch location={this.props.location}>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
