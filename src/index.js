import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter,Route ,Switch} from "react-router-dom";
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import reduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <Switch>
      <Route path="/post/new" component={PostNew} />
      <Route path="/" component={PostIndex} />
    </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
