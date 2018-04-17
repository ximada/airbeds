import React, { Component } from 'react';
import { DateRange } from '@appbaseio/reactivesearch';

export default ()=>(
    <DateRange
        dataField="date_from"
        componentId="DateRangeSensor"
        title="When"
        numberOfMonths={2}
        queryFormat="basic_date"
        initialMonth={new Date('04-01-2017')}
    />
);
