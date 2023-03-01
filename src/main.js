import Vue from 'vue'
import App from './App.vue'
import router from './router'
import WebRTC from 'vue-webrtc'
import VueSocketIO from 'vue-socket.io';
import socketio from 'socket.io-client';

window.axios = require('axios');
//window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = 'https://chat.chatto.jp:20000/';
//window.axios.defaults.baseURL = 'https://192.168.100.30:22000/';
window.axios.defaults.withCredentials = true

Vue.use(WebRTC)

Vue.config.productionTip = false

const SocketInstance = socketio.connect('https://chat.chatto.jp:20000');

Vue.use(VueSocketIO, SocketInstance)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
