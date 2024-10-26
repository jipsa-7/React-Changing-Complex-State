import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({ fstName: "", lstName: "" });
  function updateFullName(event) {
    //don't try to access the event or anything related to the event inside a stateful setter. If we do that we will get an error.
    const { name, value } = event.target;
    setFullName((prevValue) => {
      //when you call updateFullName function, the setState method ie "setFullName" will receive the previous value of fstName and lstName as an argument (prevValue) and update it accordingly.
      if (name === "fName") {
        return { fstName: value, lstName: prevValue.lstName };
      } else if (name === "lName") {
        return { fstName: prevValue.fstName, lstName: value };
      }
    });
  }
  // const [fullName, setFullName] = useState({ fsName: " ", lsName: " " });
  // function updateFullName(event) {
  //   const { value, name } = event.target;
  //   setFullName((prevValue) => {
  //     if (name === "fName") {
  //       return { fsName: value, lsName: prevValue.lsName };
  //     } else if (name === "lName") {
  //       return { fsName: prevValue.fsName, lsName: value };
  //     }
  //   });
  // }

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // function updateFirstName(event) {
  //   //don't try to access the event or anything related to the event inside a stateful setter. If we do that we will get an error.
  //   const fName = event.target.value;
  //   setFirstName(fName);
  // }
  // function updateLastName(event) {
  //   const lName = event.target.value;
  //   setLastName(lName);
  // }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fstName} {fullName.lstName}
      </h1>
      <form>
        <input
          onChange={updateFullName}
          value={fullName.fstName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={updateFullName}
          value={fullName.lstName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
