import React from "react";

import { useNavigate } from "react-router-dom";

import './AskQuestion.css'


const AskQuestion = () => {
    const user = null;
    const navigate = useNavigate()
    const redirect = () => {
        alert("login or signup to ska question")
        navigate('/Auth')
    }

    return (
        <>
        {
            user === null ?
            redirect():
            <div></div>
        }      
        </>
    )
}

export default AskQuestion