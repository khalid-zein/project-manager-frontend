import { useState } from "react";
import { apiHost } from "../../Variables";
import { useNavigate } from "react-router-dom";

const EditProject = ({modalInfo, setModalInfo}) => {
    console.log("modal info: ", modalInfo)
    const [updatedProjectFormData, setUpdatedProjectFormData] = useState(modalInfo.projectOnEdit || {})

    function updateFormData(e){
        setUpdatedProjectFormData(updatedProjectFormData => {
            return {...updatedProjectFormData, [e.target.id]: e.target.value}
        })
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(updatedProjectFormData)

        fetch(`${apiHost}/projects/${modalInfo?.projectOnEdit?.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProjectFormData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setModalInfo(modalInfo => ({...modalInfo, showModal: false}))
                })
            }else {
                res.json().then(error => console.warn(error))
            }
        })
    }

    return ( 
        <>
            <div className="flex flex-col justify-center items-center md:my-16 my-8 bg-gray-100 md:p-8 p-4 rounded-lg">
                <h1 className="font-bold uppercase md:text-2xl text-xl text-gray-800 md:mb-8 mb-4">Edit Project</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <label className='form-label'>
                            Project Name
                        </label>
                        <input 
                            id="name"
                            type="text"  
                            placeholder="Project name"
                            className="form-input"
                            value={updatedProjectFormData.name}
                            onChange={updateFormData} 
                        />
                    </div>
                    <div>
                        <label className='form-label'> 
                            Subject/ Topic
                        </label>
                        <input 
                            id="topic"
                            type="text" 
                            placeholder="Topic"
                            className="form-input"
                            value={updatedProjectFormData.topic}
                            onChange={updateFormData} 
                        />
                    </div>
                    <div>
                        <label className='form-label'> 
                            Project Details
                        </label>
                        <textarea 
                            id="details"
                            class="textarea textarea-info w-full my-4" 
                            rows='2'
                            placeholder="Details"
                            className="form-input"  
                            value={updatedProjectFormData.details}
                            onChange={updateFormData}
                        ></textarea>
                    </div>
                    <button className="mt-2 btn btn-secondary w-full">
                        Submit
                    </button>
                </form>
            </div>
        </>
     );
}
 
export default EditProject;