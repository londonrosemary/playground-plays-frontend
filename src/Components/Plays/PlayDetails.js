import react from 'react';

const PlayDetails = ({play}) => {
    return(
        <div>
        <h3>{play.name}</h3>
        <p>{play.description}</p>
        </div>
    )

}

export default PlayDetails