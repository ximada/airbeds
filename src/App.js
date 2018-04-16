import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch'; 
import './App.css';
import  Calendar from './components/Calendar'
import NumberBox from './components/NumberBox';

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
          type="listing"
        >
          <Calendar />
          <NumberBox/>
        </ReactiveBase>
      </section>
    );
  }
}

export default App;
