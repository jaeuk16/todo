import React, { useState } from "react";
import './Edit.css';

const Edit = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTodo = () => {
        if (newTask.trim() !== '') { // 공백이 아니라면
            setTasks([...tasks, newTask]); // tasks 현재의 투두 리스트를 나타내는 배열. setTasks 해당 배열을 업데이트하는 함수
            setNewTask(''); // ?
        }
    };

    const removeTodo = (index) => { // 투두 삭제
        // 전개연산자 : 배열이나 객체를 펼쳐서 개별 요소로 분리하는 데 사용되는 JavaScript의 문법
        const updatedTasks = [...tasks]; // ...전개연산자, 원본 배열을 직접 수정하지 않고 새로운 배열을 생성\\\\\
        // splice : JavaScript의 배열에서 사용되는 메서드로, 배열의 내용을 추가, 제거
        updatedTasks.splice(index, 1);   // 복사한 배열에 인덱스 1개를 제거한다.
        setTasks(updatedTasks); // 제거 후 보여주는 리스트 
    };
    return (
        <div>
            <h3 className="ment"> 오늘 할 일을 작성해 주세요! </h3>
            <div>
                <input
                    className="writetodo"
                    type="text"
                    value={newTask} /* 입력 필드의 현재 값은 newTask 상태 변수와 바인딩되어 있다 */
                    /* 
                    바인딩되다
                    두 가지 요소 또는 데이터가 서로 연결되어 있음을 나타냅니다. 
                    이것은 하나의 값이나 상태가 다른 값이나 상태와 동기화되어 변경될 때 서로 영향을 미친다는 것을 의미합니다.
                    */
                    onChange={(e) => setNewTask(e.target.value)}
                /* 
                사용자가 입력 필드에 텍스트를 입력할 때마다 발생하는 이벤트
                입력 값이 변경될 때마다 setNewTask 함수를 호출하여 newTask 상태 변수를 업데이트합니다 
                */
                />
                <button className="AddButton" onClick={addTodo}> 추가 </button>
            </div>
            {/* 투두리스트  */}
            <ul className="TodoList">
                {tasks.map((task, index) => (
                    // tasks 배열을 순회하면서 각 항목에 대한 JSX 코드를 생성.
                    <li key={index}>
                        {/* key 속성은 React에서 각 엘리먼트를 구별하는 데 사용되며, 일반적으로 배열의 인덱스를 사용. */}
                        {task}
                        <button className="DltBtn" onClick={() => removeTodo(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Edit;