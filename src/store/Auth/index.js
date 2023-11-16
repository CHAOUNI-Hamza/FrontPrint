import axios from 'axios';
import router from "@/router";

export default {
    namespaced: true,
    state: {
        token: null,
        roleAuth: null,
        emailExists: '',
        emailNotExists: '',
        errorAuth: '',
        errorResetPassword: ''
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setRoleAuth(state, roleAuth) {
            state.roleAuth = roleAuth;
        },
        setEmailExists(state, data) {
            state.emailExists = data;
        },
        setEmailNotExists(state, data) {
            state.emailNotExists = data;
        },
        setErrorResetPassword(state, data) {
            state.errorResetPassword = data;
        },
        setErrorAuth(state, data) {
            state.errorAuth = data;
        }
    },
    getters: {
        authenticated(state) {
            return state.token;
        },
        getRoleAuth(state) {
            return state.roleAuth;
        },
        getEmailExists(state) {
            return state.emailExists;
        },
        getEmailNotExists(state) {
            return state.emailNotExists;
        },
        getErrorResetPassword(state) {
            return state.errorResetPassword;
        },
        getErrorAuth(state) {
            return state.errorAuth;
        },
    },
    actions: {
        async signIn({ commit, dispatch }, credentials) {
            try {
                const response = await axios.post("auth/login", credentials);
                document.getElementById('signin-modal').click();
                commit("setErrorAuth", '');
                if( response.data.roleAuth === 'admin' ) {
                    router.replace({ name: "dashboard" });
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Connecté avec succès',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  //return dispatch("attempt", {token: response.data.access_token, role: response.data.roleAuth});
                  return dispatch("attempt", response.data.access_token);
            } catch (error) {
                commit("setErrorAuth", error.response?.data?.error);
            }
        },
        async attempt({ commit, state }, token) {
            try {
                if (token) {
                    commit("setToken", token);
                    //commit("setRoleAuth", role);
                }
                if (!state.token) {
                    return;
                }
                const response = await axios.post(`auth/me`);
            } catch (error) {
                commit("setToken", null);
            }
        },
        async signUp({ commit }, credentials) {
            try {
                const response = await axios
                    .post("auth/store", credentials)
                    .then((res) => {
                        document.getElementById('signin-modal').click();
                        commit("setEmailExists", '');
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Le compte a été ajouté.',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    })
            } catch (error) {
                commit("setEmailExists", error.response.data.emailExists);
            }
        },
        async signOut({ commit }) {
            try {

                await axios.post('auth/logout').then(() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("roleAuth");
                    commit("setToken", null);
                    commit("setRoleAuth", null);
                    router.replace({ name: "home" });
                });

            } catch (error) {
                // Handle error
            }
        },
        async forgotPassword({ commit }, params) {
            try {
                const response = await axios
                    .post("auth/forgot-password", params)
                    .then((res) => {
                        document.getElementById('signin-modal').click();
                        commit("setEmailNotExists", '');
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Veuillez vérifier votre email',
                            showConfirmButton: false,
                            timer: 2000
                          })
                    })
            } catch (error) {
                commit("setEmailNotExists", error.response.data.emailNotExists);
            }

        },
        async ResetPassword({ commit }, params) {
            try {
                const response = await axios
                    .post("auth/reset-password", params)
                    .then((res) => {
                        commit("setErrorResetPassword", '');
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Le mot de passe a été changé',
                            showConfirmButton: false,
                            timer: 2000
                          })
                          router.replace({ name: "home" });
                    })
            }
            catch (error) {
                commit("setErrorResetPassword", error.response.data.error);
            }
        },
    },
};
