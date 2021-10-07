import React from "react";
import PropTypes from 'prop-types';

function Post({ id, title, deletedPost }) {
    return(
        <div className="Post">
            <button className="Post__delete" onClick={() => deletedPost(id)}></button>
            <div className="Post__title">{title}</div>
            <img className="Post__image" src={'https://source.unplash.com/random?sig=${id}'} />
        </div>    
    )

}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletedPost: PropTypes.func.isRequired

};

export default Post;