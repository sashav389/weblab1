import {NavBar} from "../Components";
import {useState} from "react";
import Post from "../Post";

export function Blog(){
    const [inputValName, setInputValName] = useState('')
    const [inputValTitle, setInputValTitle] = useState('')
    const [posts, setPosts] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        const newPost = {
            id: Date.now(),
            inputValName,
            inputValTitle
        }
        setPosts([...posts, newPost])
        setInputValName('')
        setInputValTitle('')
    }

    return(
        <>
            <NavBar/>
            <div className="container mt-5">
                <div className="row">
                    <div className="mx-auto col-4">
                        <h5>New post</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Header of the post</label>
                                <input
                                    type="text"
                                    value={inputValName}
                                    onChange={(event) => setInputValName(event.target.value)}
                                    className="form-control"
                                    id="formInput"
                                    placeholder="Name..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Text</label>
                                <input
                                    type="text"
                                    value={inputValTitle}
                                    onChange={event => setInputValTitle(event.target.value)}
                                    className="form-control"
                                    id="formInput2"
                                    placeholder="Your text..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mt-2"
                            >
                                Submit
                            </button>
                        </form>
                        <h5 id="your" className="mt-5">Your posts:</h5>
                        <Post
                           posts={posts}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
