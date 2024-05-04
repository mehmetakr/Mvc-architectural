import { useState } from "react";
import Addpageview from "./Addpageview";
import Addpostmodel from "./Addpostmodel";
import axiosınstance from "../../constants";
import { useNavigate } from "react-router-dom";

// addpostcontroller sayfasıdır bu
const Addpage = () => {
  const formmodel = new Addpostmodel();
  const [form, setform] = useState(formmodel.state);


  const navigate = useNavigate()
  // key : hangi inputa yazıldığı bilgisi
  // e : inputun içeriği için aldık

  const oninputchange = (key, e) => {
    setform({ ...form, [key]: e.target.value });
  };


  const handlesubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.text || !form.title) {
      alert("Bilgiler yetersizdir. Lütfen tüm alanları doldurunuz..");
    } else {
      alert("Giriş başarılı");
      navigate("/")

    }
    // axiosdaki post ile kendi veritabanımıza yani db.json ımıza veri ekleme işlemı yapıcaz
    axiosınstance.post("posts", form).then((response) => console.log(response) );
  };


   // axiosinstance ile kendi veritabanımızdan veri silme işlemini gerçekleştiricez.





  return (
    <Addpageview handlesubmit={handlesubmit} oninputchange={oninputchange} />
  );
};

export default Addpage;
