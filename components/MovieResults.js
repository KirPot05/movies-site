import React from 'react'
import Thumbnail from './Thumbnail'

function MovieResults({results}) {
    return (
        <div>
            {results.map((result) => (
                <Thumbnail key={result.id} />
            ))}

        </div>
    )
}

export default MovieResults