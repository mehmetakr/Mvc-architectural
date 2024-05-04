import { useEffect, useState } from "react";
import Listpostview from "./Listpostview";
import axios from "axios";

const Listpostcontroller = () => {
  const [formdata, setformdata] = useState(null);
  // yani modali burada açıp kapatma işlemini yapıcaz..
  const [showpopup, setpopshow] = useState(false);
const [username ,setusername] =useState(null);



  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => setformdata(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Listpostview
      formdata={formdata}
      setpopshow={setpopshow}
      showpopup={showpopup}
      username={username}
      setusername={setusername}
    />
  );
};

export default Listpostcontroller;
