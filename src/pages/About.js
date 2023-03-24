import {NavBar} from "../Components";
import logo from '../1.jpg';

export function AboutApp(){
    return(
        <><NavBar/>
                <div className="row">
                    <div className="mx-auto col-4 m-4">
                        <img src={logo} className="rounded mx-auto d-block" alt={logo}/>
                        <p>The company was founded in 1909 in the then-German city of Molsheim, Alsace, by the Italian-born industrial designer Ettore Bugatti. The cars were known for their design beauty and for their many race victories.
                            ...
                            <br/> <br/>Bugatti.</p>
                    </div>

                </div>
        </>
    )
}