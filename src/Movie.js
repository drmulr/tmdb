import React from 'react';
import PropTypes from 'prop-types';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = props => (
    <div>
        <img src={`${POSTER_PATH}${props.movie.poster_path}`} alt={props.movie.title} />
    </div>  
);

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Movie;