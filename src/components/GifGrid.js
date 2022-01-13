import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    const { data:images,loading } = useFetchGifs( category );
    // console.log(data, loading);

    return (
        <>
            <h3 className='animate__animated animate__bounceIn'>{ category }</h3>
            { loading && <p>Cargando...</p> }
            <div className="cards-grid">
                {
                    images.map( img => 
                        <GifGridItem 
                            key = { img.id }
                            { ...img }
                        />
                    )
                }
            </div>
        </>
    )
}

export default GifGrid;