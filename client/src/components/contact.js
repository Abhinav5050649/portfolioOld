import React from "react";
import linked from "./images/link.jpg"
import github from "./images/github.jpg"

export const Contact = () => {
    return(
        <div class="container">
            <h1 class="display-4">To Reach Me:</h1>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <img src={linked} class="img-thumbnail" alt="..." height={175} width={175}></img>
                    </div>
                    <div class="col-sm">
                        <img src={github} class="img-thumbnail" alt="..." height={175} width={175}></img>
                    </div>
                </div>
            </div>
            <blockquote class="blockquote">
                <p class="mb-0">Email: abhinav291sharma@gmail.com</p>
            </blockquote>
        </div>
    );
}

export default Contact;