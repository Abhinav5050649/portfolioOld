import React from "react";
import { Icon } from '@iconify/react';

//<Icon icon="ic:outline-email" height={150} width={150}/><br/> 
export const Contact = () => {
    return(
        <div class="container">
            <h1 class="display-4"><strong>To Reach Me:</strong></h1><br/>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <a href="https://www.linkedin.com/in/abhinavsharma29/"><Icon icon="openmoji:linkedin" height={150} width={150}/></a>
                    </div>
                    <div class="col-sm">
                        <a href="https://github.com/Abhinav5050649"><Icon icon="arcticons:github" height={150} width={150}/></a>
                    </div>
                    <div class="col-sm">
                        <a href="https://www.instagram.com/abhinav_2921/"><Icon icon="icon-park:instagram" height={150} width={150}/></a>
                    </div>
                </div>
            </div><br/>
            <div class="container">
                <blockquote>
                <p class="mb-0"><strong>Email:</strong> abhinav291sharma@gmail.com</p>
                </blockquote>
            </div>
        </div>
    );
}

export default Contact;