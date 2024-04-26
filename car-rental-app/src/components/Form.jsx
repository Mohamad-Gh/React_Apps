import React from "react";

function Form() {
  return (
    <form className="contentHero">
      <label>Full Name</label>
      <input type="text" placeholder="E.g: John Doe" />
      <label>Email</label>
      <input type="email" placeholder="youremail@example.com" />
      <label>Tell us about it</label>
      <textarea rows={5} cols={10} placeholder="Here we are" />
      <input type="submit" />
    </form>
  );
}

export default Form;
