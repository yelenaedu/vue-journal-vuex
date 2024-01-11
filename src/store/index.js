
import { createStore } from 'vuex'

import journal from '@/modules/daybook/store/journal'
/*  
  se puede cambiar el nombre(journalModule) para resumir lineas de codigos
  en la parte de const store
*/

const store = createStore({
    modules:{
        journal
    }
})

export default store