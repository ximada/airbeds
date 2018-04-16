import React, { Component } from 'react';
import { NumberBox } from '@appbaseio/reactivesearch';


export default () =>(
<NumberBox 
    componentId='GuestSensor'
    dataField="accommodates"
    title="Guests"
    defaultSelected={2}
    data={{
        start:1,
        end:16
    }}
    />
);
