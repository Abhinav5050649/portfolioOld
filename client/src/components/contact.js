import React from "react";
import linked from "./images/link.jpg"
import github from "./images/github.jpg"

export const Contact = () => {
    return(
        <div class="container">
            <h1 class="display-4"><strong>To Reach Me:</strong></h1><br/>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <a href="https://www.linkedin.com/in/abhinavsharma29/"><img src={linked} class="img-thumbnail" alt="..." height={200} width={200}></img></a>
                    </div>
                    <div class="col-sm">
                        <a href="https://github.com/Abhinav5050649"><img src={github} class="img-thumbnail" alt="..." height={175} width={175}></img></a>
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