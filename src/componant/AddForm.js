import "./AddForm.css";

const AddForm = ({title, setTitle, addTask, edit}) => {

    return(
        <>
            <h2>Task Form</h2>
            <form className="form-group" onSubmit={addTask}>
                <div className="form-control">
                    <input type="text" className="text-input" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    <button type="submit" className="submit-btn">
                        {edit ? "Update" : "Add"}
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddForm;