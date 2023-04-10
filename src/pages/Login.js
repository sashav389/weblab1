import {NavBar, Notification} from "../Components";
import {useState} from "react";
import {Users} from "./DB";
import {useNavigate} from "react-router-dom";

export function Login(){

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault()
        const newUser = {
            inputEmail,
            inputPassword
        }
        for(let i = 0; i < Users.length; i++){
            if(Users[i].email === newUser.inputEmail){
                if(Users[i].password === newUser.inputPassword){

                    for(let us in Users){
                        if(us.current === true) us.current = false;
                    }

                    Users[i].current = true;

                    navigate("/profile");
                }
                let notif = document.createElement('notif');
                notif.innerText = Notification();
                const nav = document.getElementById('navbar');
                nav.append(notif);

            }
        }
        setInputEmail('')
        setInputPassword('')
    }

    return(
        <>
            <NavBar/>
        <div className="container ">
            <div className="row reg">
                <div className="mx-auto col-4 mt-5">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-3 form-group">
                            <label htmlFor="InputEmail1">Email address</label>
                            <input
                                type="email"
                                value={inputEmail}
                                onChange={(event) => setInputEmail(event.target.value)}
                                className="form-control"
                                id="InputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"/>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="InputPassword1">Password</label>
                            <input
                                type="password"
                                value={inputPassword}
                                onChange={(event) => setInputPassword(event.target.value)}
                                className="form-control"
                                id="InputPassword1"
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