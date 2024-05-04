import { useEffect, useState } from "react";
import Popupview from "./Popupview";
import axiosınstance from "../../constants";

const Popupcontroller = ({ setpopshow, username }) => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    axiosınstance
      .get(`posts?user=${username}`)
      .then((response) => setdata(response.data));
  }, [username]);

  return (
    <div>
      <Popupview data={data} setpopshow={setpopshow} username={username} />
    </div>
  );
};

export default Popupcontroller;
