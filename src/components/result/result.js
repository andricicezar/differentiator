import './result.css';

import React from 'react';
import { connect } from 'react-redux';

import { renderEditMode, renderStaticMode } from './utils.js';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(event) {
    this.props.updateResult({
      skill: event.target.skill.value,
      content: event.target.content.value,
      subject: event.target.subject.value,
      resource: event.target.resource.value,
      product: event.target.product.value,
      studentsCount: event.target.studentsCount.value
    });

    this.props.toggleMode();

    event.preventDefault();
  }

  render() {
    return (
      <div className="jumbotron" onClick={this.props.mode === "static" && this.props.toggleMode}>
        <h4 className="display-4">
          {this.props.mode === "static"
            ? renderStaticMode(this.props.result)
            : renderEditMode(this.props.result, this.onEdit)}
        </h4>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  result: state.result.value,
  mode: state.result.mode
});

const mapDispatchToProps = (dispatch) => ({
  toggleMode: () => dispatch({ type: "TOGGLE_MODE" }),
  updateResult: (result) => dispatch({ type: "UPDATE_RESULT", result })
});

Result = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);

export default Result;
