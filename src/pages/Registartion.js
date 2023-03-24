import {NavBar} from "../Components";

export function Registartion(){
    return(
        <>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-4 mt-5" >
                        <h2>Registration</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Your name</label>
                                <input type="text" className="form-control" id="exampleInputName"
                                       aria-describedby="emailHelp" placeholder="Enter your name"/>
                            </div>
                            <div className="mt-3 form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <p className="mt-3">Your gender:</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                       id="inlineRadio1" value="option1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                       id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                            </div>
                            <div className="form-group">
                                <label className="mt-3">Choose your day of berth:</label>
                                <input type="date" className="form-control"/>
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
