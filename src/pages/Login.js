import {NavBar} from "../Components";

export function Login(){
    return(
        <>
            <NavBar/>
        <div className="container ">
            <div className="row reg">
                <div className="mx-auto col-4 mt-5">
                    <h2>Login</h2>
                    <form>
                        <div className="mt-3 form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" className="mt-3 btn btn-primary ">Submit</button>
                    </form>
                </div>
            </div>
        </div>
            </>
    )
}