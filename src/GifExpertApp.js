import React from 'react';
import { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp = () => {

    const [ categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () => {
        // setCategories([...categories,'HunterxHunter']);
        // setCategories( categories => [...categories,'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* <AddCategory setCategories={ setCategories }/> */}
            <AddCategory setCategories={ setCategories }/>

            <hr />
            {/* <button onClick={ handleAdd }>Add</button> */}

            {/* <ol> */}
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                }
            {/* </ol>       */}
        </>
    );
};

export default GifExpertApp;