import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
    const [Name, SetName] = useState('');
    const [Id, SetId] = useState('');
    const [PassWord, SetPassWord] = useState('');
    const navigate = useNavigate;

    const SendInfo = async () => {
        try {
            const response = await axios.post("http://localhost:8080/login%60", {
                name: Name,
                id: Id,
                password: PassWord,
            });
            if (response.status === 200) {
                console.log('회원가입 성공', response.data);
                navigate('/login')
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="sutitle"> 회원가입 </div>
            <input
                className="wnm"
                type="name"
                placeholder="이름"
                onChange={(e) => SetName(e.target.value)}
            />
            <input
                className="wid"
                type="id"
                placeholder="아이디"
                onChange={(e) => SetId(e.target.value)}
            />
            <input
                className="wpw"
                type="password"
                placeholder="비밀번호"
                onChange={(e) => SetPassWord(e.target.value)}
            />
            <button className="okBtn" onChange={SendInfo}> 확인 </button>
        </div>
    )
}

export default Signup;