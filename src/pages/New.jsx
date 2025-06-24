import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
    usePageTitle("새 일기 작성");
    const nav = useNavigate();
    const {onCreate} =useContext(DiaryDispatchContext);
    const onSubmit = (input) =>{         
        onCreate(input.createdDate.getTime(), input.emotionId, input.content)
        nav('/', {replace: true})
    }


    return (
    <div>
    <Header 
        title={"새 일기 쓰기"} 
        leftChild={<Button onClick={(()=>nav(-1))} text={"< 뒤로가기"}/>}/>
    <Editor onSubmit={onSubmit}/>
    </div>
    )
}

export default New;