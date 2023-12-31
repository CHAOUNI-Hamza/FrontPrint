import store from "@/store";
import axios from "axios";


store.subscribe((mutation) => {
  if (mutation.type === "Auth/setToken") {
    if (mutation.payload) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
      localStorage.setItem('token', mutation.payload);
    } else {
      axios.defaults.headers.common['Authorization'] = null
      localStorage.removeItem('token');
    }
  }

  if (mutation.type === "Auth/setRoleAuth") {
    if (mutation.payload) {
        localStorage.setItem('roleAuth', mutation.payload);
    } else {
        localStorage.removeItem('roleAuth');
    }
}
});


