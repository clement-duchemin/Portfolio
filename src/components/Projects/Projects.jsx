import React from 'react'
//import KasaPortfolio from '../../assets/Kasa-pic-portfolio-small.png'
//import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
//import proj from "../../projectos.json";
import data from '../../data/data'
//import githubLogo from "../../assets/github-logo.png"
//import { VscGithub } from "react-icons/vsc";
//import { TbWorldWww } from "react-icons/tb";





  function Projects() {

          

        //   const [data, setData] = useState();

        //   useEffect(() => {
        //   axios.get("/projects.json")
        //   .then((res) => setData(res.data));
        // }, []);
  
  return (
    
      <section className='projects-container'>
        <h2 className='projects-title'>
            R<span className='aqua'>é</span>alisations.
        </h2> 
        <div className='cards-container'> 
              {data.map((project) => (
              <div className='card-item' key={project.id}>
                  <img src={project.cover} alt={project.name}/>
                  <div className='card-item__icons'>
                    <div className='github-link-icon'>
                      <Link to={project.GTlink} target="_blank">{project.GTicon.map((Icon, i) => (
                      <Icon className='icon' key={i} />))}</Link>
                    </div> 
                    <div className='web-link-icon'>
                      <Link to={project.WEBlink} target="_blank">{project.WEBicon.map((Icon, i) => (
                      <Icon className='icon' key={i} />))}</Link>
                    </div>  
                  </div>
                  <div className='card-item__layer'>
                    <p className='card-item__name'>{project.name}</p> 
                    <div className='card-item__tools'>               
                      {project.tools.map((tool, index) => (
                        <span key={index} className="card-item__tools-tools">{tool}</span>
                      ))}
                  </div>
                  </div>
              </div>
              ))}
        </div>
       
      
      </section> 
    
  );
  }

  export default Projects
       


  






/* <div className='card-item__icons'>
                    <ul>
                    {icons.map((Icon, i) => (
                      <li key={i}>
                        <Icon className='icon'/>
                      </li>
                    ))} 
                    </ul>
                  </div> */

                  // {project.icons.map((Icon, index) => (
                  //   <span key={index} ><Icon className='icon'/></span>
                  // ))}








            //       function Projects() {

          

            //         const [data, setData] = useState();
          
            //         useEffect(() => {
            //         axios.get("/projects.json")
            //         .then((res) => setData(res.data));
            //       }, []);
            
            // return (
            //   data && (
            //     <section className='projects-container'>
            //       <h2 className='projects-title'>
            //           R<span className='span-e'>é</span>alisations.
            //       </h2> 
            //       <div className='cards-container'> 
            //             {data.map((project) => (
            //             <div className='card-item' key={project.id}>
            //                 <img src={project.cover} alt={project.name}/>
            //                 <div>
            //         {links.map(link => (<Link to={link.to}>{link.icons.map((Icon, i) => (
            //           <Icon className='icon'/>
            //         ))}</Link>))}
            //       </div>
            //                 <div className='card-item__layer'>
            //                   <p className='card-item__name'>{project.name}</p>                
            //                 {project.tools.map((tool, index) => (
            //                   <span key={index} className="card-item__tools">{tool}</span>
            //                 ))}
            //                 </div>
            //             </div>
            //             ))}
            //       </div>
                 
                
            //     </section> 
            //   )
            // );
            // }
          
            // export default Projects      
            
            




          //   <div>
          //   {links.map(link => (<Link to={link.to}>{link.icons.map((Icon, i) => (
          //     <Icon className='icon'/>
          //   ))}</Link>))}
          // </div>