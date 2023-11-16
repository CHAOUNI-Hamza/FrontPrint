import axios from "axios";

export default {
  namespaced: true,
  state: {
    data: [],
    lastPage: null,
  },
  mutations: {
    setLastPage(state, lastPage) {
      state.lastPage = lastPage;
    },
    setData(state, data) {
      state.data = data;
    }
  },
  getters: {
    getData(state) {
      return state.data;
    },
    getLastPage(state) {
      return state.lastPage;
    }
  },  
  actions: {
    async fetch({ commit }, params) {
      try {
        const response = await axios.get("/users", { params });
        commit("setData", response.data);
        commit("setLastPage", response.data.meta?.last_page);
      } catch (error) {
        console.error(error);
      }
    },
    async store({ commit, dispatch }, params) {
      try {
        const response = await axios.post("/users", params);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Utilisateur créé avec succès",
          showConfirmButton: false,
          timer: 1500,
        });
        return { success: true, response };
      } catch (error) {
        console.error(error);
      }
    },    
    async update({ dispatch }, params) {
      try {
        const response = await axios.post(
          `/users/${params.id}`,
          params
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Is Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        return dispatch("fetch", params = {
          order_by: "id",
          name: "",
          page: 1,
          pagination: 10,
        })
      } catch (error) {
        console.error(error);
      }
    },
    async destroy({ dispatch }, params) {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        });
        if (result.isConfirmed) {
          await axios.delete(`/users/${params}`, params);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
        return dispatch("fetch", params = {
          order_by: "id",
          name: "",
          page: 1,
          pagination: 10,
        })
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
};
