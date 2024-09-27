import { BrowserRouter,Routes,Route } from "react-router-dom";
import Book from "./Book"
import Page2 from "./Page2";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { useState } from "react";
import Comments from "./Comments.js";
import DisplayComments from "./DisplayComments.js";
function App() {
  const [id,setid]=useState("");
  return (
  <>
  <BrowserRouter>    
  <Routes>
<Route path="/" element={<Book setid={setid}/>}></Route>
<Route path={`/Id=${id}`} element={<Page2 id={id}/>}></Route>
<Route path="/" element={<Comments />} ></Route>
<Route path="/display" element={<DisplayComments />} ></Route>

  </Routes>
 
   </BrowserRouter>
   </>
  )
}
 
export default App;