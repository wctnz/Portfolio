import React from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link, useNavigate, useParams } from 'react-router-dom';
import data from "./../../assets/db.json"
import backButtonImg from "./../../assets/images/buttonBack/back__button.png"
import "./ProjectPage.css"
import linkIcon from "../../assets/icons/link_icon/link.png"

const ProjectPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const project = data.find(el => el.id === Number(id))

    const goBack = () => navigate(-1)
    return (
        <div className='container'>
            <div onClick={goBack}>
                <img src={backButtonImg} alt="buttonBack" className="buttonBack" />
            </div>
            <div className='toolPage__title'>
                <h1>{project.title}</h1>
                <div className='projectStek'>
                    {project.stek?.map(el => (
                        <img src={el} alt={project.title} className="stekImg" />
                    ))}
                </div>
            </div>
            <div className='project__links'>
                {project.urlProject && <Link target="_blank" to={project.urlProject} className="linkParaph"><img src={linkIcon} alt="linkIcon" className='linkIcon' />Проект</Link>}
                <Link target="_blank" to={project.urlCode} className="linkParaph"><img src={linkIcon} alt="linkIcon" className='linkIcon' />Код проекта</Link>
            </div>
            <div className='project__desc'>
                {project.desc && (<>
                    <p>Описание:</p>
                    <p>{project.desc}</p>
                </>)}
                {project.appFunc && (<>
                    <p>Функционал приложения:</p>
                    <p>{project.appFunc}</p>
                </>)}
                <div className='projectImg'>
                    {project.img.map(img => (
                        <div className='projectImg__each'>
                            <img src={img} alt={project.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;