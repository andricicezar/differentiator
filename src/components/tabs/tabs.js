import React from 'react';
import { connect } from 'react-redux';
import Tab from './tab.js';
import Lists from './lists.js';
import data from './../../data.json';

let Tabs = ({
  selectedTab
}) => (
  <div className="container-fluid">
    <div className="row mb-4">
      <div className="col">
        <div className="btn-group btn-group-lg">
          <Tab slug="skill" className="btn btn-primary">Abilitate</Tab>
          <Tab slug="content" className="btn btn-danger">Continut</Tab>
          <Tab slug="resource" className="btn btn-success">Resurse</Tab>
          <Tab slug="product" className="btn btn-info">Produse</Tab>
          <Tab slug="studentsCount" className="btn btn-warning">Grupuri</Tab>
        </div>
      </div>
    </div>
    
    <div className="row">
      <div className="col">
        <Lists lists={data[selectedTab]} />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  selectedTab: state.tabs.selectedTab
});

Tabs = connect(
  mapStateToProps
)(Tabs);

export default Tabs;
