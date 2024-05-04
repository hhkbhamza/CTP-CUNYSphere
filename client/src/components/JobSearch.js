import React from 'react';
import "../style/JobSearchBar.css";

export default function SearchForm({ params, onParamChange }) {
  const handleChange = e => {
    const { value } = e.target;
    onParamChange({ value });
  };

  return (
    <div className="form-group mb-4 search-bar">
      <label htmlFor="title">Search:</label>
      <input
        type="text"
        className="form-control"
        value={params.what_or || ''}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
}