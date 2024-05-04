const Addpageview = ({ handlesubmit, oninputchange }) => {
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h2>Yeni gönderi ekle</h2>

        <fieldset>
          <label>Kullanıcı Adı</label>
          <input
            type="text"
            placeholder="Kullanıcı adı giriniz"
            onChange={(e) => oninputchange("user", e)}
          />
        </fieldset>

        <fieldset>
          <label>Başlık</label>
          <input
            type="text"
            placeholder="Başlık giriniz"
            onChange={(e) => oninputchange("title", e)}
          />
        </fieldset>
        <fieldset>
          <label>Açıklama</label>
          <textarea
            type="text"
            placeholder="Açıklama giriniz"
            onChange={(e) => oninputchange("text", e)}
          />
        </fieldset>
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default Addpageview;
