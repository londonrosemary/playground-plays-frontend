import React from 'react';

const MonologuesDetails = ({monologue}) => {

    return(
        <div>
            <h3>{monologue.name}</h3>
            <p>{monologue.content}</p>
            <p>{monologue.genre}</p>
            {/* <p>{monologue.length}</p> */}
            <p>{monologue.gender}</p>
            <p>{monologue.char_name}</p>
            <p>{monologue.age}</p>
        </div>
    )

}

export default MonologuesDetails;