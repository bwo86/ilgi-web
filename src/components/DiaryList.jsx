import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
 
const DiaryList = ({data}) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value)
    };
    const getSortedData = () => {
        return data.slice().sort((a, b) => {
            if (sortType === "oldest") {
                return a.createdDate - b.createdDate;
            } else {
                return b.createdDate - a.createdDate;
            }
        });
    }
    
    const sortedData = getSortedData();
    
    return (
    <div className="DiaryList">
    <div className="menu_bar">
        <select onChange={onChangeSortType}>
            <option value={"latest"}>최신순</option>
            <option value={"oldest"}>오래된 순</option>
        </select>
        <Button onClick={()=>nav("/new")} text={"새일기 쓰기"}/>
    </div>
    <div className="list_wrapper">
        {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
    </div>
    </div>);
};

export default DiaryList;