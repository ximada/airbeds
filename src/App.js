import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch'; 
import './App.css';
import  Calendar from './components/Calendar'
import NumberBox from './components/NumberBox';
import RangeSlider from './components/RangeSlider';
import ResultCard from './components/ResultCard';
import DateRange from './components/DateRange';


class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
          type="listing"
          theme={{
            primaryColor:'#FF3AE',
          }}
          >
          <nav className="nav">
            <div className="title"><strong>Airbeds</strong></div>
          </nav>
          <div className="left-col">
            <Calendar />
            <NumberBox />
            <RangeSlider />
            <DateRange />
          </div>
          
          <div>
            <ResultCard />

          </div>
        </ReactiveBase>
        
      </section>
    );
  }
}

export default App;
