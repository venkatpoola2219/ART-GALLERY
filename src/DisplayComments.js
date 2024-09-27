import React from 'react';
import { useLocation,Link } from 'react-router-dom';

export default function DisplayComments() {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className='container'>
          <div className='row'>
        <div><br/><Link to ='/' ><button className='rrr'>Back</button></Link></div>
      </div><br/>
      <div className="row">
        <div className="col-md-12" style={{textAlign:'center'}}>
          <div className="card p-4 shadow-sm" id='ram2'>
            <h3 style={{color:'red'}}>Submitted Comments</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Comments:</strong> {formData.comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
