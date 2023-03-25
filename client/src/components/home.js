import React from "react";
import myImage from "./images/abhinav.jpg"
import { Icon } from '@iconify/react';
import "./home.css"

export const Home = () => {
    return(
        <div className="mainboxclass">
            <div className="box1"> 
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <blockquote class="blockquote text-center">
                                <h1 class="display-4"><strong>Hi! I am Abhinav Sharma!</strong></h1>
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
                <h1 class="display-4"><strong>Programming Languages Known: </strong></h1>
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col">
                            <Icon icon="skill-icons:c" height={150} width={150}/>
                        </div>
                        <div class="col">
                            <Icon icon="logos:c-plusplus" height={150} width={150}/>
                        </div>
                        <div class="col">
                            <Icon icon="skill-icons:python-dark" height={150} width={150}/>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col">
                            <Icon icon="logos:java" height={145} width={145}/>
                        </div>
                        <div class="col">
                            <Icon icon="skill-icons:javascript" height={140} width={140}/>
                        </div>
                        <div class="col">
                            <Icon icon="skill-icons:bash-light" height={140} width={140}/>
                        </div>
                    </div>
                    <div class="row align-items-end">
                        <div class="col">
                            <Icon icon="skill-icons:powershell-dark" height={150} width={150}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box4">
                <br/>
                <br/>
                <h1 class="display-4"><strong>Techonologies Known: </strong></h1>
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div class="col"><Icon icon="logos:mongodb-icon" height={150} width={150}/></div>
                        <div class="col"><Icon icon="skill-icons:expressjs-light" height={145} width={145}/></div>
                        <div class="col"><Icon icon="vscode-icons:file-type-reactjs" height={150} width={150}/></div>
                        <div class="col"><Icon icon="logos:nodejs-icon" height={150} width={150}/></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div class="col"><Icon icon="flat-color-icons:linux" height={150} width={150}/></div>
                        <div class="col"><Icon icon="logos:postman-icon" height={150} width={150}/></div>
                        <div class="col"><Icon icon="tabler:brand-git" height={150} width={150}/></div>
                        <div class="col"><Icon icon="arcticons:github" height={150} width={150}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;