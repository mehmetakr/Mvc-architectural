import React from "react";
import Popupcontroller from "../Components/Popup/Popupcontroller";

const Listpostview = ({
  formdata,
  setpopshow,
  showpopup,
  setusername,
  username,
}) => {
  console.log(formdata);
  return (
    <div className="container">
      {formdata?.map((i) => (
        <div key={i.id} className="post">
          <div className="info ">
            <h3>{i.title}</h3>
            <p
              onClick={() => {
                setpopshow(true);
                setusername(i.user);
              }}
              className="isim"
            >
              {i.user}
            </p>
          </div>
          <p className="text"> {i.text} </p>
        </div>
      ))}
      {showpopup && (
        <Popupcontroller username={username} setpopshow={setpopshow} />
      )}
    </div>
  );
};

export default Listpostview;
