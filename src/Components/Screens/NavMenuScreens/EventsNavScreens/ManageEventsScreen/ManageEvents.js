import React,{useEffect,useState} from 'react';
import { auth,db } from '../../../../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Alert} from 'react-bootstrap';
import {Card,Carousel} from 'react-bootstrap';
import '../../../../Styles/manageEvents.css';


// carousel
// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
// }


// main component
const ManageEvents = () => {
  const [Firstname,setFirstname]=useState('')
  const [selector,setSelector]=useState()
  const [Price,setPrice]=useState('')
  const user = auth.currentUser.uid
  const [EventType,setEventType] = useState({});
  useEffect(()=>{
    db.ref(`/user/`+ user).on('value',snap=>{
      
      setFirstname(snap.val() && snap.val().Firstname);
   

    })
    
    db.ref('/Event/').on("value",(snapshot)=>{
      setEventType({
            ...snapshot.val(),
        })
        
    })
  },[])
 
  
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    
        db.ref('Event').push({selector,Price})
       
}
const onDelete =(id)=>{
 db.ref(`/Event/${id}`).remove()

}

  // carousel
  return <>
      <div className="text-dark mt-5">
 
        <h6 className="fw-bold p-4 name">{Firstname}</h6>
        
      {/* <hr/> */}
      <div className="container-xl">
        <ul>
          <li className="p-0 m-0 list-events d-inline-block">
              <a href="/"> 
                  <p className="text-secondary text-start links d-inline-block">Manage Events</p>
              </a>
          </li>

          <li className="ps-4 ms-4 list-event d-inline-block">
              <a href="/manage"> 
                  <p className="text-secondary text-start links d-inline-block">Create Events</p>
              </a>
          </li>

        </ul>
      </div>

      <hr className="me-4 ms-4"/>
        
      <div className="container-xl mt-4 ms-4 p-2 w-75 h-75 ">
      <label class="text-muted">Add Events</label>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-6">
          <div class="input-group-prepend">
            <label class="input-group-text" for="gender3">Event Type</label>
          </div>
          <select class="custom-select" id="gender3" 
          value={selector} onChange={e=>setSelector(e.target.value)} >
            <option selected>Choose...</option>
            <option  name="Wedding" >Wedding</option>
            <option name="Party" >Party</option>
            <option name="Funeral" >Funeral</option>
          </select>

          <div className="mb-7 mt-7 w-50 input-in">
          {/* value={Price} onChange={handleInputChange} */}
                  
         <input type="tel" class="form-control" name="Price" value={Price} onChange={e=>setPrice(e.target.value)}
           placeholder='Enter Price'></input>
              </div>
        </div>
        <Button type='submit' className="btn d-block acc-update-btn mt-4">Add Event</Button>
        </form>

        <div className="container-fluid mt-4 ms-0 me-0 p-3 d-flex events-container">
                  
                  { Object.keys(EventType).map((id,index)=>
                    
                        <>
                        <Card className="m-2 p-0 member-con d-flex">
                          <Card.Body>
                            <div className="container-xl cont-event">
                            <h4>EventType  </h4>
                          
                              
                                <input className="form-control w-50 pt-2 mt-2" value={EventType[id].selector} onChange={e=>setSelector(e.target.value)}></input>
                                <h4>Price</h4>
                                <input className="ps-1 mem-email pt-2" value={EventType[id].Price}></input>
                                
                              
                            </div>
                            <Button className="btn d-block acc-update-btn mt-4 bg-danger"
                            onClick={() => onDelete(id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                            </>

                      )}
                </div>
        
        </div>
      </div>
  </>;
};

export default ManageEvents;
