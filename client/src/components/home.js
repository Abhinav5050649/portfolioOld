import React from "react";
import myImage from "./images/abhinav.jpg"
import "./home.css"

export const Home = () => {
    return(
        <div className="mainboxclass">
            <div className="box1"> 
            <img src={myImage} class="rounded float-right" alt="..." height={200} width={200}></img>
                <h1 class="display-4">Hi! I am Abhinav Sharma!<br/> A Developer interested<br/>in solving problems with Tech!</h1>
            </div>

            <div className="box3">
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 class="display-4">Languages Known: </h1>
                <ul class="list-group">
                    <li class="list-group-item">C</li>
                    <li class="list-group-item">C++</li>
                    <li class="list-group-item">Python</li>
                    <li class="list-group-item">Java</li>
                    <li class="list-group-item">Javascript</li>
                    <li class="list-group-item">Bash</li>
                    <li class="list-group-item">Powershell</li>
                </ul>
            </div>

            <div className="box4">
                <h1 class="display-4">Techonologies Known: </h1>
                <ul class="list-group">
                    <li class="list-group-item">MongoDB</li>
                    <li class="list-group-item">ExpressJs</li>
                    <li class="list-group-item">NodeJs</li>
                    <li class="list-group-item">ReactJs</li>
                    <li class="list-group-item">Git</li>
                    <li class="list-group-item">GitHub</li>
                    <li class="list-group-item">Postman</li>
                    <li class="list-group-item">Linux</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;