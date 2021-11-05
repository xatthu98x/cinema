import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';


import './detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';

import Movie from './Movie';

import MovieList from '../../components/movie-list/MovieList';
import { Autoplay } from 'swiper';
import axiosClient from '../../api/axiosClient';
import { Link, useLocation } from 'react-router-dom';


const Detail = () => {
    const click = () =>{
        console.log('dsfsdf');
    }
    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, {params:{}});
            setItem(response);
            window.scrollTo(0,0);
        }
        getDetail(  );
    }, [category, id]);
 
   
    return (
        <>
        
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 10).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.overview}</p>
                                

                                <button className="btn1"><a href ={`https://www.2embed.ru/embed/tmdb/movie?id=${item.id}`}>Xem phim</a></button>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                
                                {/* <div className="movie2">
                                <h1 className="title2">
                                   Phim {item.title || item.name}  
                                </h1>
                                    <iframe className="phim"
                                    src={`https://www.2embed.ru/embed/tmdb/movie?id=${item.id}`} 
                                    allowFullScreen="true"
                                    webkitallowfullscreen="true" 
                                    mozallowfullscreen="true"
                                    //width="100%" 
                                    //height="600px"                                
                                    ></iframe>
                                    
                                </div>             */}
                                <VideoList id={item.id} />
                            </div>
                            <div className="section mb-3">
                            <div className="section__header mb-2">
                                    <h2>Phim Thể Loại Tương Tự</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id}/>
                            </div>
                        </div>
                    </>
                    
                )
                
            }
        </>
    );
}

export default Detail;