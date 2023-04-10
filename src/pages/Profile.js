import {NavBar} from "../Components";
import {Users} from "./DB";

export function Profile(){
    let user;
    console.log("PROFILLEE")
    for(let i = 0; i < Users.length; i++){
        console.log(Users[i]);
        if(Users[i].current === true){
            user = Users[i];
            return(
                <>
                    <NavBar/>
                    <div className="container prof mt-5 im">


                        <div className="mx-auto col-4">
                            <h2>Your profile</h2>
                            <div className="row mt-3">
                                < table className = "table table-striped" >
                                    < thead >
                                    < tr >
                                        < th
                                            scope = "col" >
                                            #</th>
                                        <th scope="col">Data</th>
                                        <th scope="col">Is verified</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>Sasha</td>
                                        <td>Verified</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>{user.email}</td>
                                        <td>Verified</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Date of birth</th>
                                        <td>24.02.1998</td>
                                        <td>Unverified</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">KYC</th>
                                        <td>No</td>
                                        <td>Unverified</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
        return (
            <>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-4 mt-5" >
                            <h2>Please login or register first</h2>
                        </div>
                    </div>
                </div>
            </>
        )

}