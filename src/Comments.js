import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Comments() {
  const [formData, setFormData] = useState({name: '', email: '',comments: ''});
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({...formData,[id]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/display', { state: { formData } });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card p-4 shadow-sm" id="ram1">
            <h3>Leave a Comment</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">NAME:</label>
                <input type="text" id="name" className="form-control"  placeholder="Enter your Name"  value={formData.name}
                  onChange={handleChange}
                  required />
               
              </div>
              <div className="mb-3">
                <label className="form-label">EMAIL:</label>
                <input type="email"  id="email" className="form-control" placeholder="Enter your Email"  value={formData.email}
                  onChange={handleChange}  required />
              </div>
              <div className="mb-3">
                <label className="form-label">COMMENTS:</label>
                <textarea  id="comments"  className="form-control"  placeholder="Enter your comments"  value={formData.comments}
                  onChange={handleChange}  required  /> 
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
