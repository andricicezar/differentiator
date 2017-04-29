import React from 'react';
import { connect } from 'react-redux';

let Item = ({
  selectedTab,
  updateResult,
  item
}) => (
  <a 
    href="#"
    onClick={(event) => {
      event.preventDefault();
      updateResult({
        [selectedTab]: item
      });
    }}
    className="list-group-item list-group-item-action">
    {item}
  </a>
);

const mapStateToProps = (state) => ({
  selectedTab: state.tabs.selectedTab
});

const mapDispatchToProps = (dispatch) => ({
  updateResult: (result) => dispatch({ type: "UPDATE_RESULT", result })
});

Item = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);

export default Item;
