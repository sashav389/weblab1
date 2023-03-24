import React from 'react';

const Post = ({ posts }) => {

    return (
        <div className="post ">
            {posts.map((post) => {
                return (
                    <div key={post.id} className="border border-5 border-light mt-3">
                        <h5 className="card-title mt-lg-1 m-lg-1">{post.inputValName}</h5>
                        <p className="card-text m-lg-1">{post.inputValTitle}</p>
                        <button  className="btn btn-danger  btn-sm m-lg-1"  onClick={deleteBlog}>Delete </button>
                    </div>
                )
            })}

        </div>
    );
};

export default Post;

export function deleteBlog(e){
    e.preventDefault();
    e.target.parentElement.remove();
}