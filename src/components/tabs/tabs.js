import React from 'react';
import { connect } from 'react-redux';
import Tab from './tab.js';
import Lists from './lists.js';
import data from './../../data.json';

let Tabs = ({
  selectedTab
}) => (
  <div className="container-fluid d-flex flex-column" style={{flexGrow: 3, width: "100%"}}>
    <div className="btn-group btn-group-lg mb-4" style={{display: "block"}}>
      <Tab slug="skill" className="btn btn-primary">Abilitate</Tab>
      <Tab slug="content" className="btn btn-danger">Continut</Tab>
      <Tab slug="resource" className="btn btn-success">Resurse</Tab>
      <Tab slug="product" className="btn btn-info">Produse</Tab>
      <Tab slug="studentsCount" className="btn btn-warning">Grupuri</Tab>
    </div>

    <div className="row" style={{flexGrow: 3, overflow: "auto"}}>
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
