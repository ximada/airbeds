import React, { Component } from 'react';
import { RangeSlider } from '@appbaseio/reactivesearch';

export default () =>(
    <RangeSlider
        componentId='PriceSensor'
        dataField='price'
        title='Price Range'
        range={{
            start:10,
            end:250
        }}
        rangeLabels={{
            start:'$10',
            end:'$250'
        }}
        stepValue={10}
        react={{
            and:["DataRangeSensor"]
        }}
    />
    
);