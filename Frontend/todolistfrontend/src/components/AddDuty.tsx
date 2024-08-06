import { useState } from "react";
import { dutyType } from "./ContentsTypes";

interface AddDutyProps {
    addDuty: (duty: dutyType) => void;
}


const AddDuty = (Props: AddDutyProps) => {
    const [name, setName]  = useState('');
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if(!name) {
            alert("Please enter a name");
            return;
        }
        const min = 1;
        const max = 10000;
        const rand = Math.floor(min + Math.random() * (max - min));
        let tempDuty = {
            name: name,
            id: rand.toString()
        }
        Props.addDuty(tempDuty);
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            {/* <div className="form-control">
                <label>ID</label>
                <input type="text" placeholder="Add ID" />
            </div> */}
            <div className="form-control">
                <label data-testid="label">Name</label>
                <input type="text" placeholder="Add Duty" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <input type='submit' value="Save Duty" className='btn btn-block'/>
        </form>
    )
}

export default AddDuty;