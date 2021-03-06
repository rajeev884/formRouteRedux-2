import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter,Route ,Switch} from "react-router-dom";
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
// if using reduxpromise not thunk
//import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// if using reduxpromise not thunk
//const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <Switch>
      <Route path="/post/new" component={PostNew} />
      <Route path="/post/:id" component={PostShow} />
      <Route path="/" component={PostIndex} />
    </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
