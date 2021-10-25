import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';

const Movie = props => {

    const {category} = useParams();

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const getMovies = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setMovies(res.results.slice(0, 5));
        }
        getMovies();
    }, [category, props.id]);

    return (
        <>
            {
                movies.map((item, i) => (
                    <Movie key={i} item={item}/>
                ))
            }
        </>
    );
}

const Moviel = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.2embed.ru/embed/tmdb/movie?id=${item.id}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default Movie;