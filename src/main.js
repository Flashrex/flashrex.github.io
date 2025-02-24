import './assets/main.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import deDE from './locales/de-DE.json'
import enUS from './locales/en-US.json'
import fiFI from './locales/fi-FI.json'

import App from './App.vue'

const i18n = createI18n({
    locale: 'de',
    messages: {
        'de': deDE,
        'us': enUS,
        'fi': fiFI
    }
})


const app = createApp(App);
app.use(i18n);
app.mount('#app');