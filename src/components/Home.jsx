import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllMovies, updateTrendingNow } from "../slices/movieSlice";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    const movies = useSelector(getAllMovies);
    const dispatch = useDispatch();
    const [lastClickedId, setLastClickedId] = useState(null);

    useEffect(() => {
        const storedId = sessionStorage.getItem('lastClickedId');
        setLastClickedId(storedId);
    }, []);

    const play = (id) => {
        sessionStorage.setItem('lastClickedId', id);
        const updatedTrendingNow = movies.TendingNow.map(item =>
            item.Id === id
                ? { ...item, isVideo: true }
                : { ...item, isVideo: false }
        );

        dispatch(updateTrendingNow(updatedTrendingNow));
    };

    const sortedMovies = [...movies.TendingNow].sort((a, b) => {
        const aIsLastClicked = a.Id === lastClickedId;
        const bIsLastClicked = b.Id === lastClickedId;

        if (aIsLastClicked && !bIsLastClicked) {
            return -1;
        } else if (!aIsLastClicked && bIsLastClicked) {
            return 1;
        } else {
            return 0;
        }
    });

    return (
        <div className={'content'}>
            <Carousel iclassName={'pr'}>
                {movies.Featured &&
                <div className={''}>
                    <img className={'content__featured-img'} src={movies.Featured.CoverImage} alt={movies.Featured.Title} />
                    <div className={'content__featured pa'}>
                        <div className={'content__featured-box'}>
                            <h2 className={'content__featured-category fs22'}>{movies.Featured.Category}</h2>
                            <h3 className={'content__featured-title fs32'}>{movies.Featured.Title}</h3>
                            <span className={'content__featured-date dib fs30'}>{movies.Featured.Date}</span>
                            <p className={'content__featured-desc fs30'}>{movies.Featured.Description}</p>
                            <p className={'content__featured-desc fs30'}>{movies.Featured.MpaRating} <span>{movies.Featured.Duration} min</span></p>
                            <div className={'df a-center'}>
                                <button className={'btn btn--gray font-bold fs20 content__featured-play'}>Play</button>
                                <button className={'btn btn--blue font-bold fs20 content__featured-more-info'}>More info</button>
                            </div>
                        </div>
                    </div>
                </div>
                }
                {movies.Featured && sortedMovies.map((item, key) => (
                    <div className={''} key={key}>
                        {item.isVideo ? (
                            <video className={'content__featured-img'} src={item.VideoUrl} autoPlay controls></video>
                        ) : (
                            <img className={'content__featured-img'} src={item.CoverImage} alt={movies.Featured.Title} />
                        )}
                        <div className={!item.isVideo ? 'content__featured pa' : 'dn'}>
                            <div className={'content__featured-box'}>
                                <h2 className={'content__featured-category fs22'}>{item.Category}</h2>
                                <h3 className={'content__featured-title fs32'}>{item.Title}</h3>
                                <span className={'content__featured-date dib fs30'}>{item.Date}</span>
                                <p className={'content__featured-desc fs30'}>{item.Description}</p>
                                <p className={'content__featured-desc fs30'}>{item.MpaRating} <span>{item.Duration} min</span></p>
                                <div className={'df a-center'}>
                                    <button className={'btn btn--gray font-bold fs20 content__featured-play'} onClick={() => { play(item.Id) }}>Play</button>
                                    <button className={'btn btn--blue font-bold fs20 content__featured-more-info'}>More info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Home;