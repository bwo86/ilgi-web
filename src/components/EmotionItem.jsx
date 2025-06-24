import { getEmotionImg } from "../util/get-emotion-image";
import "./EmotionItem.css";

const EmotionItem = ({
    emotionId, 
    emotionName, 
    isSelected, 
    onClick}) => {
    return (
    <div 
        onClick={onClick} 
        className={`EmotionItem ${isSelected? `EmotionItem_on_${emotionId}` : ""}`}>
        <img className="emotion_img" src={getEmotionImg(emotionId)} />
        <div className="emotion_name">{emotionName}</div>
    </div>
    );
}

export default EmotionItem;