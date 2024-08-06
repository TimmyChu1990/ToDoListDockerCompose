import { FaTimes } from 'react-icons/fa'

import { dutyType } from "./ContentsTypes";

const Duty = (Props: dutyType) => {
    const changeName = () => {
        const newName = prompt('Please enter your new name:');

        if (!newName){
            return;
        }
        let duty: dutyType = {
            name: newName,
            id: Props.id
        };
        Props.changeName?.(duty);
    }
    return(
        <div className='duty' onDoubleClick={changeName}>
            <h3 data-testid="name">{Props.name} 
                <FaTimes style={{ color:'red', cursor: 'pointer'}} 
                         onClick={() => {Props.deleteDuty?.(Props.id)}}/>

            </h3>
        </div>
    )
}

export default Duty;