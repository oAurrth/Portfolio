import '../../CSS/Projects.css';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import ScrollReveal from "scrollreveal";
import { Helmet } from 'react-helmet';
import { PROJECTS } from '../../constants/Projects';
import { BiPlus } from "react-icons/bi"; 
import { FaGithubAlt } from "react-icons/fa"; 
import { IoMdEyeOff, IoMdEye } from "react-icons/io"; 

const index = () => {
    useEffect(() => {
        const revealSettings = {
            distance: '300px',
            duration: 1400,
            reset: true,
            origin: 'left',
        };
        ScrollReveal().reveal('.project, .reverse', revealSettings);
    }, []);

    // Filtrando e ordenando os projetos
    const selectedIDs = [6, 5, 7];
    const filteredProjects = PROJECTS.filter(project => selectedIDs.includes(project.id));
    const orderedProjects = selectedIDs.map(id => filteredProjects.find(project => project.id === id));

    return (
        <div id='Projects' className='container'>
            <Helmet>
                <meta name="description" content="Todos os projetos que o Arthur possui no portfolio." />
                <meta name="keywords" content="Landing-Pages, Front-end, back-end, full-stack, react, javascript, python, ciência de dados, software-developer, software" />
                <meta name="author" content="Arthur Sant" />
            </Helmet>

            <section className="projects">
                <h1 className='Title'>Best Projects</h1> 
                
                {orderedProjects.map((project) => (
                    <div key={project.id} className={project.class}>
                        <div className="project-about">
                            <div className={project.classMark}>
                                <img src={project.markfront} alt={project.none} />
                                <img src={project.markback} alt={project.none} />
                            </div>
                            <div>
                                <h2 className="att">{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <div className="stack-icons">
                                {project.stack.map((tech, index) => (
                                    <img key={index} src={`/assets/stacks/${tech}.svg`} alt={tech} />
                                ))}
                            </div>
                            <div className='button-project-section'>
                                <div className="button-project github-btn">
                                    <a href={project.github} target='_blank' rel="noopener noreferrer" alt="gitHub">
                                        <FaGithubAlt />
                                        <p>Github</p>
                                    </a>
                                </div>
                                {project.deploy ? (
                                    <div className={project.classButton}>
                                        <a href={project.deploy} target='_blank' rel="noopener noreferrer" alt="Deploy">
                                            <IoMdEye />
                                            <p>Deploy</p>
                                        </a>
                                    </div>
                                ) : (
                                    <div className={project.classButtonCant}>
                                        <a href={project.deploy} target='_blank' rel="noopener noreferrer" alt="No Deploy">
                                            <IoMdEyeOff />
                                            <p>Deploy</p>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="project-img">
                            <img src={project.image} alt={`${project.title} screenshot`} />
                        </div>
                    </div>
                ))}
            </section>
            
            <Link to='projects'>
                <button className="routes-button button shadow">
                   <i alt='See more projects'><BiPlus /></i> SEE MORE PROJECTS 
                </button>
            </Link>
        </div>
    );
}

export default index;
