import "./Item.css";
import { MdDelete } from "react-icons/md"
import { MdEdit } from "react-icons/md"

const Item = ({data, deleteTask, editTask}) => {
    return(
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="btn-container">
                <MdEdit className="btn" onClick={()=>editTask(data.id)}/>
                <MdDelete className="btn" onClick={()=>deleteTask(data.id)}/>
            </div>
        </div>
    )
}

export default Item;