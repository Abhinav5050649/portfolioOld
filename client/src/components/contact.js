import React from "react";
import linked from "./images/linked.jpg"
import github from "./images/github.jpg"
import insta from "./images/insta.jpg"

//Insta:- https://www.instagram.com/abhinav_2921/
export const Contact = () => {
    return(
        <div class="container">
            <h1 class="display-4"><strong>To Reach Me:</strong></h1><br/>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <a href="https://www.linkedin.com/in/abhinavsharma29/"><img src={linked} class="img-thumbnail" alt="..." height={175} width={175}></img></a>
                    </div>
                    <div class="col-sm">
                        <a href="https://github.com/Abhinav5050649"><img src={github} class="img-thumbnail" alt="..." height={175} width={175}></img></a>
                    </div>
                    <div class="col-sm">
                        <a href="https://www.instagram.com/abhinav_2921/"><img src={insta} class="img-thumbnail" alt="..." height={175} width={175}></img></a>
                    </div>
                </div>
            </div><br/>
            <blockquote class="blockquote">
                <p class="mb-0"><strong>Email:</strong> abhinav291sharma@gmail.com</p>
            </blockquote>
        </div>
    );
}

export default Contact;