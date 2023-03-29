import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "./router";
import store from "./store";

// vue sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// progressbar
import VueProgressBar from "@aacassandra/vue3-progressbar";

const options = {
  color: "#50d38a",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

// notification toastr
import Notifications from '@kyvg/vue3-notification'

// social sharing
import VueSocialSharing from 'vue-social-sharing'


import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '94fc42daa3f883fa52e4',
    cluster: 'ap2',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    disableStats: true,
    forceTLS: false
});


createApp(App)
  .use(router)
  .use(store)
  .use(VueSweetalert2)
  .use(VueProgressBar, options)
  .use(Notifications)
  .use(VueSocialSharing)
  .mount("#app");
