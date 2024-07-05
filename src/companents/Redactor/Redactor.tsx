import React from 'react';

const Redactor = () => {
    return (
       <form>
           <h2 className="text-center">Redactor</h2>
           <div className="form-block text-center">
               <select className="form-select">
                   <option selected>Open this select menu</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
               </select>
               <div className="mb-3">
                   <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                   <input type="email" className="form-control" id="exampleFormControlInput1"
                          placeholder="Title"/>
               </div>
               <div className="mb-3">
                   <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
               </div>
               <button type="submit" className="btn btn-primary">Save</button>
           </div>
       </form>
    );
};

export default Redactor;