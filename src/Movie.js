import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import './Movie.css';

export default function Movie({ id, year, title, poster, summary }) {
  return (
    <div class='movie'>
      <img class='movie__poster' src={poster} alt={title} />
      <div class='movie__info'>
        <h3 class='movie__title'>{title}</h3>
        <h5 class='moive__year'>{year}</h5>
        <p class='movie__summary'>{summary}</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
