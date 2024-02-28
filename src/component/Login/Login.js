import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';


const Login = () => {
    const [Id, SetId] = useState('');
    const [PassWord, SetPassWord] = useState('');
    const navigate = useNavigate();

    // 서버와 연결
    const ButtonClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/login%60", {
                // 비동기 
                id: Id,
                password: PassWord,
            });
            console.log(response);
            if (response.status === 200) {
                navigate("/")
                // status가 200이라면 로그인 성공, "/Main"으로 보낸다. path맞춰서
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form >
                <div className="title"> 로그인 </div>
                <input
                    type="id"
                    onChange={(e) => SetId(e.target.value)}
                    // e를 보낸다. SetId에 변화된 값을 넣는다.
                    placeholder="아이디"
                />
                <input
                    type="password"
                    onChange={(e) => SetPassWord(e.target.value)}
                    placeholder="비밀번호"
                />
                <button 
                    onClick={ButtonClick}
                >
                    확인 </button>
            </form>
        </div>
    )
}

export default Login;