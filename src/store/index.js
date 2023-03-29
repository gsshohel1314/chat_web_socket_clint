import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie';
const store = createStore({
  state: {
    // define global variables
    alt: "Image",
    cccLogo: "home/assets/images/ewu-logo-header-white.png",
    cccMap: "home/assets/images/map.png",
    dashboardLogo: "assets/img/ccc_logo.png",
    alumniHeaderImage: "assets/img/p1.png",
    alumniImage: "assets/img/p13.png",
    alumniLogo: "assets/img/logo.svg",
    post: "assets/img/post.jpg",
    avatar: "assets/img/avatar.png",
    backgroud_image: "assets/img/background-avatar.png",
    members: [],

    backendUrl: "http://localhost:8000",
    // backendUrl:  "http://server.fscd.xyz",
    // backendUrl: window.location.origin.includes('fscd.xyz') ? "http://server.fscd.xyz" : "http://localhost:8000" ,
  },

  getters: {
    // get state variables value
  },

  actions: {
    //action to be performed
    setAlumniLoggedInInfo(context, payload) {
      context.commit("updateAlumniLoggedInInfo", payload);
    },

    removeAlumniLoggedInInfo(context) {
      context.commit("updateAlumniLoggedInInfo", {auth_alumni_id: '', auth_user_id: '', token: ''});
    }
  },

  mutations: {
    // update state variables value
    updateAlumniLoggedInInfo(state, data) {
      if (data.token && data.auth_user_id && data.auth_alumni_id) {
        if (window.location.origin.includes('fscd.xyz')){
          Cookies.set('alumniLoggedInTokenCookie', data.token, { domain: '.fscd.xyz', path: '/', expires: 1/24 }) // expires in 1 hour
          Cookies.set('authIdCookie', data.auth_user_id, { domain: '.fscd.xyz', path: '/', expires: 1/24 }) // expires in 1 hour
          Cookies.set('alumniIdCookie', data.auth_alumni_id, { domain: '.fscd.xyz', path: '/', expires: 1/24 }) // expires in 1 hour
        } else{
          Cookies.set('alumniLoggedInTokenCookie', data.token) // expires in 1 hour
          Cookies.set('authIdCookie', data.auth_user_id) // expires in 1 hour
          Cookies.set('alumniIdCookie', data.auth_alumni_id) // expires in 1 hour
        }
      }else{
        if (window.location.origin.includes('fscd.xyz')){
          if (Cookies.get('alumniLoggedInTokenCookie') && Cookies.get('authIdCookie')){
            Cookies.remove('alumniLoggedInTokenCookie', { domain: '.fscd.xyz' })
            Cookies.remove('authIdCookie', { domain: '.fscd.xyz' })
            Cookies.remove('alumniIdCookie', { domain: '.fscd.xyz' })
          } else if (Cookies.get('jobUserLoggedInToken') && Cookies.get('authIdCookie')){
            Cookies.remove('jobUserLoggedInToken', { domain: '.fscd.xyz' })
            Cookies.remove('authIdCookie', { domain: '.fscd.xyz' })
            Cookies.remove('alumniIdCookie', { domain: '.fscd.xyz' })
          }
        } else {
          if (Cookies.get('alumniLoggedInTokenCookie') && Cookies.get('authIdCookie')){
            Cookies.remove('alumniLoggedInTokenCookie')
            Cookies.remove('authIdCookie')
            Cookies.remove('alumniIdCookie')
          } else if (Cookies.get('jobUserLoggedInToken') && Cookies.get('authIdCookie')){
            Cookies.remove('jobUserLoggedInToken')
            Cookies.remove('authIdCookie')
            Cookies.remove('alumniIdCookie')
          }
        }
      }
    }
  },

  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});

export default store;
