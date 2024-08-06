import {dutyType} from './ContentsTypes';
import Duty from './Duty';
interface dutiesProps {
    duties: dutyType[];
    deleteDuty: (id: string) => void;
    changeName: (duty: dutyType) => void;
}

const Duties = (Props: dutiesProps) => {
    return (
        <>
            {Props.duties.map((duty: dutyType) => {
                return <Duty    key={duty.id} 
                                id={duty.id} 
                                name={duty.name} 
                                deleteDuty={() => Props.deleteDuty(duty.id)}
                                changeName={Props.changeName} />
            })}
        </>
    )
}

export default Duties;