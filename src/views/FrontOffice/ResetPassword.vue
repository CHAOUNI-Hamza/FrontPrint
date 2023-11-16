<template>
    <Navbar /><div class="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17">
            	<div class="container">
            		<div class="form-box">
            			<div class="form-tab">
	            			<ul class="nav nav-pills nav-fill" role="tablist">
							    <li class="nav-item">
							        <a class="nav-link" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Réinitialiser le mot de passe</a>
							    </li>
							</ul>
							<div class="tab-content">
							    <div class="tab-pane fade show active" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
							    	<form @submit.prevent="submit()">
							    		<div class="form-group">
							    			<label for="singin-email-2">Adresse e-mail</label>
							    			<input v-model="reset.email" @blur="v$.reset.email.$touch" :class="{ error: v$.reset.email.$errors.length }" type="text" class="form-control" id="singin-email-2" name="singin-email" required>
                                            <div class="input-errors" v-for="error of v$.reset.email.$errors" :key="error.$uid">
                                                        <span class="error-msg">{{ error.$message }}</span>
                                                    </div>
							    		</div><!-- End .form-group -->

							    		<div class="form-group">
							    			<label for="singin-password-2">Mot de passe</label>
							    			<input v-model="reset.password" @blur="v$.reset.password.$touch" :class="{ error: v$.reset.password.$errors.length }" type="password" class="form-control" id="singin-password-2" name="singin-password" required>
                                            <div class="input-errors" v-for="error of v$.reset.password.$errors" :key="error.$uid">
                                                        <span class="error-msg">{{ error.$message }}</span>
                                                    </div>
							    		</div><!-- End .form-group -->

                                        <div class="form-group">
							    			<label for="singin-password-2">Confirmer le mot de passe</label>
							    			<input v-model="reset.password_confirmation" @blur="v$.reset.password_confirmation.$touch" :class="{ error: v$.reset.password_confirmation.$errors.length }" type="password" class="form-control" id="singin-password-2" name="singin-password">
                                            <div class="input-errors" v-for="error of v$.reset.password_confirmation.$errors" :key="error.$uid">
                                                        <span class="error-msg">{{ error.$message }}</span>
                                                    </div>
							    		</div><!-- End .form-group -->
                                        <div class="input-errors" style="text-align: left;" v-if="getErrorResetPassword">
                                                        <span class="error-msg">{{ getErrorResetPassword }}</span>
                                                    </div>
                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>Réinitialiser</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>
                                        </div><!-- End .form-footer -->
							    	</form>
							    </div><!-- .End .tab-pane -->
							</div><!-- End .tab-content -->
						</div><!-- End .form-tab -->
            		</div><!-- End .form-box -->
            	</div><!-- End .container -->
            </div>
    <Footer />
    
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators'
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
        v$: useVuelidate(),
        reset: {
        email: '',
        password: '',
        password_confirmation: '',
        token: this.$route.params.token,
      }
    }
  },
  validations() {
    return {
        reset: {
            password: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(30),
                $autoDirty: true,
            },
            email: { 
                required,
                email,
                minLength: minLength(10),
                maxLength: maxLength(40),
                $autoDirty: true,
            },
            password_confirmation: {
                required,
                sameAsPassword: sameAs(this.reset.password),
            }
        }
    };
},
    methods: {
        ...mapActions({
            resetPassword: "Auth/ResetPassword",
        }),
        submit() {
            this.resetPassword(this.reset);
        }
    },
    computed: {
        ...mapGetters({
            getErrorResetPassword: "Auth/getErrorResetPassword",
        }),
        
    },
    create() {
        console.log(this.$route.params.token)
    }
}
</script>
<style scoped>
.login-page {
    background-color: white !important;
}
.btn-outline-primary-2 {
    border: 1px solid #3399ff;
    border-radius: 0;
    padding: 8px;
    font-size: 12px;
    color: #3399ff;
}
.btn-outline-primary-2:hover {
    color: #ffffff;
}
.form-control {
    height: 40px;
    padding: 0.85rem 2rem;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 300;
    color: #777;
    background-color: #fafafa;
    border: 1px solid #ebebeb;
    border-radius: 0;
    margin-bottom: 1rem;
    transition: all 0.3s;
    box-shadow: none;
}
.form-tab .form-group {
    text-align: left;
}
.input-errors {
    margin-bottom: 10px;
}
  .error {
    border: 1px solid #ff0018 !important;
  }
  .input-errors .error-msg {
    background: red;
    padding: 4px 11px;
    color: white;
    font-weight: 900;
    border-radius: 9px;
  }
</style>