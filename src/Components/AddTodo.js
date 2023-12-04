import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
  const [Fname, setFname] = useState("");
  const [Sname, setSname] = useState("");
  const [mail, setMail] = useState("");
  const [phno, setphno] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zpin, setZpin] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (
      !Fname ||
      !Sname ||
      !mail ||
      !phno ||
      !address1 ||
      !address2 ||
      !city ||
      !state ||
      !zpin
    ) {
      alert("Any block cannot be blank");
    } else {
      addTodo(Fname, Sname, mail, phno, address1,  address2,city,state, zpin);
      setFname("");
      setSname("");
      setMail("");
      setphno("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setState("");
      setZpin("");
    }
  };
  return (
    <>
      <div className="container my-3">
        {" "}
        <br />
        <h3>Enter the Details</h3>
        <form className="row g-3" onSubmit={submit}>
          <div className="row g-3">
            <div className="col">
              <input
                type="text"
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                value={Sname}
                onChange={(e) => setSname(e.target.value)}
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="text" className="form-label">
              Phone numner
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              value={phno}
              onChange={(e) => setphno(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              className="form-control"
              id="inputAddress"
              placeholder="Main St"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select" value={state}  onChange={(e) => setState(e.target.value)}>
              <option selected>Choose...</option>
              <option>KARNATAKA</option>
              <option>ARUNACHAL PRADESH</option>
              <option>ASSAM</option>
              <option>BIHAR</option>
              <option>CHHATTISGARH</option>
              <option>GOA</option>
              <option>GUJARAT</option>
              <option>HARYANA</option>
              <option>HIMACHAL PRADESH</option>
              <option>JHARKHAND</option>
              <option>MADHYA PRADESH</option>
              <option>MAHARASHTRA</option>
              <option>MANIPUR</option>
              <option>MEGHALAYA</option>
              <option>MIZORAM</option>
              <option>NAGALAND</option>
              <option>ODISHA</option>
              <option>PUNJAB</option>
              <option>RAJASTHAN</option>
              <option>SIKKIM</option>
              <option>TAMIL NADU</option>
              <option>TELANGANA</option>
              <option>TRIPURA</option>
              <option>UTTAR PRADESH</option>
              <option>UTTARAKHAND</option>
              <option>WEST BENGAL</option>
            </select>

          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              value={zpin}
              onChange={(e) => setZpin(e.target.value)}
            />
          </div>
          <div className="col-12"></div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-sm ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
