import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import { Provider } from 'react-redux'
import store from './store'
import ItemProfile from './components/itemProfile';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
            <Form/>
            <table class="table table-sm table-responsive form-info">
              <thead class="thead-default">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th>Date</th>
                </tr>
                </thead>
            <ItemProfile/>
                
            </table>
        </div>
      </Provider>
    );
  }
}

export default App;
