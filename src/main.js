import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

require("@/store/subscriber");
axios.defaults.baseURL = 'http://localhost:8000/api';


// Globale Component Front
import Navbar from "./components/FrontOffice/Home/Navbar.vue";
import Carousel from "./components/FrontOffice/Home/Carousel.vue";
import Garanties from "./components/FrontOffice/Home/Garanties.vue";
import Personnalise from "./components/FrontOffice/Home/Personnalise.vue";
import ProduitCat from "./components/FrontOffice/Home/ProduitCat.vue";
import Footer from "./components/FrontOffice/Home/Footer.vue";
import Client from "./components/FrontOffice/Home/Client.vue";
// Globale Component Back
import MainFooter from "./components/BackOffice/MainFooter.vue";
import MainHeader from "./components/BackOffice/MainHeader.vue";
import MainSidebar from "./components/BackOffice/MainSidebar.vue";
import SideBar from "./components/BackOffice/SideBar.vue";

store.dispatch("Auth/attempt", localStorage.getItem("token")).then(() => {
    createApp(App)
.use(store)
.use(router)
.component("Navbar", Navbar)
.component("Carousel", Carousel)
.component("Garanties", Garanties)
.component("Personnalise", Personnalise)
.component("ProduitCat", ProduitCat)
.component("Footer", Footer)
.component("Client", Client)
.component("MainFooter", MainFooter)
.component("MainHeader", MainHeader)
.component("MainSidebar", MainSidebar)
.component("SideBar", SideBar)
.mount('#app')
});


