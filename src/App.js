import React from 'react';
import { Router, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers';
import { HomePage } from './components/HomePage';
import { NewsletterPage } from './components/NewsletterPage';
import { TopicPage } from './components/TopicPage';
import { MagazinePage } from './components/MagazinePage';
import { EventPage } from './components/EventPage';

export class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
        });
    }

    render() {
        const { alert } = this.props;
        return (
          <BrowserRouter>
              <div className="container">
                  <div className="col-sm-8 col-sm-offset-2">
                  
                    <Route exact path="/" component={HomePage}/>
                    <Route path='/newsletter' component={NewsletterPage}></Route>
                    <Route path='/topics' component={TopicPage}></Route>
                    <Route path='/magazine' component={MagazinePage}></Route>
                    <Route path='/events' component={EventPage}></Route>
                  </div>
              </div>
              </BrowserRouter>
        );
    }
}
