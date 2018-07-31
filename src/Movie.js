import React from 'react';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = props => (
    <Link to={`/${props.movie.id}`}>
        <Overdrive id={props.movie.id}>
            <Poster src={`${POSTER_PATH}${props.movie.poster_path}`} alt={props.movie.title} />
        </Overdrive>
    </Link> 
);

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Movie;

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;

