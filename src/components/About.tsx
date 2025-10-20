import React from "react";

const About : React.FC = () =>{

    return(
        <React.Fragment>
                <div className="imagecontainer">
                    <img src="/images/1.png" alt="myimage" width="100%" height="150%"></img>
                </div>
                 <div style={{marginLeft:"10px"}}>
                   <p>Author : Shubham Patil</p>
                   <p>Hi, I’m Shubhu, an engineer and passionate developer who loves turning ideas into functional, efficient, and user-friendly web applications. I believe great software isn’t just about clean code — it’s about solving real problems and making life simpler through technology.

With hands-on experience in frontend and backend development, I focus on building solutions that are both technically strong and visually refined. Whether it’s optimizing performance, designing smooth user interfaces, or structuring scalable systems, I aim to deliver work that truly makes an impact.

When I’m not coding, I’m usually experimenting with new tools, improving my problem-solving skills, or exploring ways to make tech more meaningful and accessible.</p>
                   </div>
        </React.Fragment>
    )
}

export default About;