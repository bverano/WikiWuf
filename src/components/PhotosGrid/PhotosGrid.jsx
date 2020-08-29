import React, { useContext, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader'

import DogsContext from '../../store/dogs/Context'

import './PhotosGrid.css'

const PhotosGrid = () => {

    const dogsContext = useContext(DogsContext)
    const { breed, subbreed, images, loading, getImages } = dogsContext

    useEffect(() => {
        if(breed) {
            getImages(breed, subbreed)
        }
        //eslint-disable-next-line
    }, [breed])

    return (
        <>
            <main>
                <div className="wrapper">
                    {
                        loading ?
                        (
                            <RingLoader
                                css={`
                                    display: block;
                                    margin: 0 auto;
                                `}
                                size={150}
                                color= "#edf2f4"
                            />
                        )
                        :
                        <div className={images.length < 5 ? 'few-photos' : 'photos'}>
                        {
                            images.map(img => (
                                <img src={img} key={img} alt={img}/>
                            ))
                        }
                        </div>
                    }
                </div>
            </main>
        </>
    );
}
 
export default PhotosGrid;