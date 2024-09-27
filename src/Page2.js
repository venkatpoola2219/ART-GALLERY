import React, { useEffect, useState } from 'react';
import Comments from './Comments';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page2.css'
import { Link } from 'react-router-dom';
export default function Page2(props) {
  const [state, setState] = useState(null);
  const url = `https://api.artic.edu/api/v1/artworks/${props.id}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setState(json.data));
  }, [url]);

  if (!state) return <div></div>;
   
  return (<>
     <Navbar/>
    <div className="container mt-4">
      <div className='row'>
        <div><Link to ='/' ><button className='rrr'>Back</button></Link></div>
      </div><br/>
      <div className="row mb-4">
       
        <div className="col-md-6">
        
          <img
            src={`https://www.artic.edu/iiif/2/${state.image_id}/full/843,/0/default.jpg`}
            className="mx-auto d-block img-fluid"
            alt={state.title}/>
          
        </div>

        <div className="col-md-6">
          <div className="card p-5 shadow-sm" id='ram'>
            <h2 className="card-title" id="b">Title : {state.title}</h2>
            <h3 id='c'><span id='a'>Ref No:</span> {state.main_reference_number}</h3>
            <h3 id='c'><span id='a'>Artist:</span> {state.artist_display}</h3>
            <h3 id='c'><span id='a'>Place :</span>{state.place_of_origin}</h3>
            <h3 id='c'><span id='a'>Medium Display :</span> {state.medium_display}</h3>
            <h3 id='c'><span id='a'>Art Title :</span> {state.artwork_type_title}</h3>
            <h3 id='c'><span id='a'>Dept Title :</span> {state.department_title}</h3>
            <h3 id='c'><span id='a'>Category :</span> {state.category_titles}</h3>
            <h6 id='c'>{state.copyright_notice}</h6>
          </div>
        </div>
      </div>
     <Comments/>
    </div>
    </>);
}
