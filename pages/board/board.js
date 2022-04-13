import React, {useState} from 'react'
// import style from "board/style/board-form.module.css"
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/reducers/board.reducer'

export default function Board(){
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    return (
        <div className="boardapp stack-large">
        <h1>게시글 등록</h1>
            <htmlForm onSubmit={ e => {
                e.preventDefault()
                alert('a')
                if(value) dispatch(addTask({task: value}))
            }}>
            <div className={style.row}>
                <div className={style.col25}>
                </div>
                <div className={style.col75}>
                <input type="text" 
                className="input input__lg"
                onChange={handleChange}
                id="new-todo-input"
                name="text"
                autoComplete="off"
                placeholder="게시글 작성자 ID 입력"/>
                <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
                </div>
            </div>
            {/**
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">응원팀</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={handleChange}>
                    <option value="">응원팀 선택</option>
                    <option value="K09">Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" onChange={handleChange} style={{height:200 + "px"}}></input>
                </div>
            </div>
            <br/>
            */}
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit} onClick={handleClick} 
                value="Submit"/>
            </div>
            </htmlForm>
            </div>
    )
}