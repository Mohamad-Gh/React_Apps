import React from "react";

function Form() {
  return (
    <div>
      <h2 className="formTitle">Contact Us</h2>
      <form action="Post" className="formAbout">
        <label>
          Full Name <span>*</span>
        </label>
        <input type="text" placeholder="E.g: John Doe" required />
        <label>
          Email<span> *</span>
        </label>
        <input type="email" placeholder="youremail@example.com" required />
        <label>
          Tell us about it<span> *</span>
        </label>
        <textarea rows={8} cols={10} placeholder="Here we are" required />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default Form;
