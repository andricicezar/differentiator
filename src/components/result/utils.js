import React from 'react';

const renderStaticMode = (result) => (
  <div>
    <span>Elevii </span>
    <span className="text-primary">{result.skill} </span>
    <span className="text-danger">{result.content} </span>
    <span className="text-muted">{result.subject} </span>
    <span>utilizand </span>
    <span className="text-success">{result.resource} </span>
    <span>realizand </span>
    <span className="text-info">{result.product} </span>
    <span>in grupuri de </span>
    <span className="text-warning">{result.studentsCount}</span>.
  </div>
);

const renderEditMode = (result, handleSubmit) => (
  <form onSubmit={handleSubmit}>
    <div className="form-inline">
      <label>Elevii </label>
      <input type="text" name="skill" defaultValue={result.skill} className="form-control result-input" />
      <input type="text" name="content" defaultValue={result.content} className="form-control result-input" /> 
      <input type="text" name="subject" defaultValue={result.subject} className="form-control result-input" />
      <label>utilizand </label>
      <input type="text" name="resource" defaultValue={result.resource} className="form-control result-input" />
      <label>realizand </label>
      <input type="text" name="product" defaultValue={result.product} className="form-control result-input" />
      <label>in grupuri de </label>
      <input type="text" name="studentsCount" defaultValue={result.studentsCount} className="form-control result-input" />.
    </div>
    
    <div>
      <div className="d-flex flex-row-reverse">
        <input type="submit" className="btn btn-primary" value="Close" />
      </div>
    </div>
  </form>
)

export {
  renderEditMode,
  renderStaticMode
};
