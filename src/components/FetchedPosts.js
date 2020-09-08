import React from 'react'

export default ({posts}) => {
    if(!posts.lenght) {
        return <button className="btn btn-primary">загрузить</button>
    }
    return (
        <div>
            <h1>Fetched Posts</h1>
        </div>
    )
}