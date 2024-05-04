  

// state yapısı bu dosyada tutuluyor..

import {v4} from "uuid"


  class   Addpostmodel {



    state = {


id: v4(),
date: new Date(),
user:"",
title:"",
text:"",

    }
  }

  export default Addpostmodel