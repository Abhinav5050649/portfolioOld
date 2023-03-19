import React from "react";
import myImage from "./images/abhinav.jpg"
import cLang from "./images/OIP.jpg"
import Cpp from "./images/C++.jpg"
import Python from "./images/PythonImage.jpg"
import Java from "./images/Java.jpg"
import Js from "./images/Js.jpg"
import Linux from "./images/LinuxLogo.jpg"
import bash from "./images/bash.jpg"
import pwsh from "./images/pwsh.jpg"
import MERN from "./images/MERN.jpg"
import Postman from "./images/Postman.jpg"
import dg from "./images/git_Github.jpg"
import "./home.css"

export const Home = () => {
    return(
        <div className="mainboxclass">
            <div className="box1"> 
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <blockquote class="blockquote text-center">
                                <h1 class="display-4">Hi! I am Abhinav Sharma!</h1>
                                <h1 class="display-4">A Developer passionate about Tech!</h1>
                            </blockquote>
                        </div>
                        <div class="col">    
                            <img src={myImage} class="rounded float-right" alt="..." height={399} width={320}></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box3">
                <br/>
                <h1 class="display-4">Programming Languages Known: </h1>
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col">
                            <img src={cLang} class="img-thumbnail" alt="..." height={175} width={175}></img>
                        </div>
                        <div class="col">
                            <img src={Cpp} class="img-thumbnail" alt="..." height={130} width={160}></img>
                        </div>
                        <div class="col">
                            <img src={Python} class="img-thumbnail" alt="..." height={175} width={175}></img>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col">
                            <img src={Java} class="img-thumbnail" alt="..." height={125} width={140}></img>
                        </div>
                        <div class="col">
                            <img src={Js} class="img-thumbnail" alt="..." height={175} width={175}></img>
                        </div>
                        <div class="col">
                            <img src={bash} class="img-thumbnail" alt="..." height={195} width={185}></img>
                        </div>
                    </div>
                    <div class="row align-items-end">
                        <div class="col">
                            <img src={pwsh} class="img-thumbnail" alt="..." height={175} width={175}></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box4">
                <br/>
                <br/>
                <h1 class="display-4">Techonologies Known: </h1>
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div class="col"><img src={MERN} class="img-thumbnail" alt="..."></img></div>
                        <div class="col"><img src={dg} class="img-thumbnail" alt="..."></img></div>
                        <div class="col"><img src={Postman} class="img-thumbnail" alt="..."></img></div>
                        <div class="col"><img src={Linux} class="img-thumbnail" alt="..."></img></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;