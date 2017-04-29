import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

let Tab = ({
  children,
  className,
  slug,
  selectTab,
  selectedTab
}) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault(); 
      selectTab(slug);
    }}
    className={classNames(className, { active: selectedTab === slug })}>
    {children}
  </a>
);

const mapStateToProps = (state) => ({
  selectedTab: state.tabs.selectedTab
});

const mapDispatchToProps = (dispatch) => ({
  selectTab: (tab) => dispatch({ type: "SELECT_TAB", tab })
})

Tab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab);



export default Tab;
