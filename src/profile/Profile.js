// import React from "react";

// function Profile(props) {
//   {
//     props.fullName;
//     //  props.profession, props.bio;
//   }
//   function handleName() {
//     alert("bonjour, {props.fullName}");
//     return handleName;
//   }
//   return <Profile />;
// }
// export default Profile;

/***------------------------------------------- */

import React from "react";

const Profile = (props) => {
  const {
    fullName = "Ali ",
    bio = "Etudiant motivé en recherche de stage",
    profession = "Etudiant",
    handleName = () => alert("Bienvenue" + " " + fullName),
  } = props;

  return (
    <div style={{ textAlign: "left" }}>
      <h1>bonjour {fullName}</h1>
      <h2> bio : {bio}</h2>
      <h2> profession : {profession}</h2>
      {/* <img src={props.children} alt="myimg" className=" my-img" /> */}

      <button onClick={handleName} style={{ width: "100px", height: "20px" }}>
        {" "}
        Click me
      </button>
    </div>
  );
};

export default Profile;
