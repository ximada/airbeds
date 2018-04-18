import React, { Component } from 'react';
import { DataSearch } from '@appbaseio/reactivesearch';

export default () => (
    <DataSearch
    componentId='search'
    dataField='name'
    placeholder='Searh housings...'
    iconPosition="left"

    />
);