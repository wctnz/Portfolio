import React from 'react';
import "./ToolPage.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import data from "./../../assets/db.json"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import IconButton from '../../components/iconButton/IconButton';
import backButtonImg from "./../../assets/images/buttonBack/back__button.png"

const ToolPage = () => {
    const navigate = useNavigate()
    const { tool } = useParams()
    const goBack = () => {
        navigate("/")
        console.log("вернуться назад")
    }

    return (
        <div className='container'>
            <div onClick={goBack} >
                <img src={ backButtonImg } alt="buttonBack" className="buttonBack"/>
            </div>
            <div className='toolPage__title'>
                <p>{tool}</p>
            </div>
            <div className='container__cards'>
                {data?.filter(project => project.tool === tool)?.map(el => (
                    <Link key={el.id} to={`/${el.tool}/${el.id} `}>
                        <div className="card">
                            <p>{el.title}</p>
                            <div className='card__stek'>
                                {el.stek?.map(el => (
                                    <img src={el} alt="stek" />
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ToolPage;