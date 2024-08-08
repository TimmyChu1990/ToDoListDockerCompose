import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Duties from './components/Duties';
import {dutyType} from './components/ContentsTypes';
import AddDuty from './components/AddDuty';

const API_URL = "http://localhost:3001/";

export const getDutiesAPI = async () => {
  try {
    const response = await fetch(API_URL + "duties");
    return response.json();
  } catch (error) {
    return ([
      {
        id: '001',
        name: 'Fetch Duties Error',
      },
      {
        id: '002',
        name: 'Check PostgreSQL and Backend is running or not.',
      }
    ]); 
  }
};

export const createDutyAPI = async (duty: dutyType) => {
  try {
    const response = await fetch(API_URL + "createDuty", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(duty)
    });
    return response.json();
  } catch (error) {
    alert('Failed to create duty!');
  }
};

export const updateDutyAPI = async (duty: dutyType) => {
  try {
    const response = await fetch(API_URL + "updateDuty", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(duty)
    });
    return response.json();
  } catch (error) {
    alert('Failed to update duty!');
  }
};

export const deleteDutyAPI = async (id: string) => {
  try {
    const response = await fetch(API_URL + "deleteDuty", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id})
    });
    return 'success';
  } catch (error) {
    alert('Failed to delete duty!');
    return 'failed';
  }
};

function App() {
  const [duties, setDuties] = useState<dutyType[]>([
    {
      id: '001',
      name: 'Duty 1',
    },
    {
      id: '002',
      name: 'Duty 2',
    },
    {
      id: '003',
      name: 'Duty 3',
    }
  ]);
  useEffect(() => {
    const fetchDuties = async () => {
        const fetchedDuties = await getDutiesAPI();
        setDuties(fetchedDuties);
    };
    fetchDuties();
  }, []);

  // Add Task.
  const addDuty = async(duty: dutyType) => {
    const result =  await createDutyAPI(duty);
    if(result.msg){
      alert(result.msg);
      return;
    }
    setDuties([...duties, duty])
  }

  //  Delete duty.
  const deleteDuty = async(id: string) => {
    const result = await deleteDutyAPI(id);
    if(result === 'success'){
      setDuties(duties.filter((duty) => duty.id !== id));
    }
  }

  // Change Name.
  const changeName = async(duty: dutyType) => {
    if(duty.name === ''){
      alert('Name cannot be empty.');
      return;
    }
    if(duty.name.length > 30){
      alert('Name cannot be too log.');
      return;
    }

    const result =  await updateDutyAPI(duty);;
    if(result.msg){
      alert(result.msg);
      return;
    }
    setDuties(duties.map((dutymap) => dutymap.id === duty.id ? {...dutymap, name: duty.name} : dutymap));
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <AddDuty addDuty={addDuty}/>
      {duties.length > 0 ? 
        <Duties duties={duties} deleteDuty={deleteDuty} changeName={changeName}/>
       :
      <div>No duties to show</div>}
      <h5 style={{marginTop: '20px'}}>Double click the duty to edit.</h5>
    </div>
  );
}

export default App;
