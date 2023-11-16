<template>
    <div class="wrapper">
        <MainHeader />
        <MainSidebar />
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container">
      <div class="row mb-2">
        <div class="col-sm-6 text-left">
          <h1 class="m-0">Starter Page</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Starter Page</li>
          </ol>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->

  <!-- Main content -->
  <div class="content">
    <div class="container-fluid table-crud">
      




        <div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6" style="text-align: left;"> 
						<h2>Gérer Les <b>Utilisateurs</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
						<a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>						
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>
							<span class="custom-checkbox">
								<input type="checkbox" id="selectAll">
								<label for="selectAll"></label>
							</span>
						</th>
						<th>Nom</th>
						<th>Prénom</th>
                        <th>Email</th>
                        <th>Statut</th>
                        <th>Role</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in getData.data">
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1">
								<label for="checkbox1"></label>
							</span>
						</td>
						<td>{{ item.last_name.toUpperCase() }}</td>
						<td>{{ item.first_name.charAt(0).toUpperCase() + item.first_name.slice(1) }}</td>
                        <td>{{ item.email }}</td>
                        <td>
                            <span :class="{ 'active': item.status == 'active', 'inactive': item.status == 'inactive' }">{{ item.status.toUpperCase() }}</span>
                        </td>
                        <td>
                          <span :class="{ 'user': item.role == 'user', 'admin': item.role == 'admin' }">{{ item.role.toUpperCase() }}</span>
                        </td>
						<td>
							<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr> 
				</tbody>
			</table>
			<div class="clearfix">
				<!--<div class="hint-text">Total : <b>{{ getData.meta?.total }}</b> utilisateurs</div>
				<ul class="pagination">
                    <li class="page-item"><a @click="params.page = LastPage - 1" href="#" class="page-link">Previous</a></li>
					<li v-for="LastPage in getLastPage" :key="LastPage" class="page-item disabled">
                        <a @click="params.page = LastPage" href="#">{{ LastPage }}</a>
                    </li>
					<li class="page-item"><a @click="getData.links?.next" href="#" class="page-link">Next</a></li>
				</ul>-->
			</div>
		</div>
	</div>        
</div>
<!-- Edit Modal HTML -->
<div id="addEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form @submit.prevent="submit">
    <div class="modal-header">
        <h4 class="modal-title">Ajouter Utilisateur</h4>
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    </div>
    <div class="modal-body">
        <div class="form-group">
            <label>Nom</label>
            <input type="text" class="form-control" v-model="data.last_name" @blur="v$.data.last_name.$touch" :class="{ error: v$.data.last_name.$errors.length }">
            <div class="input-errors" v-for="error of v$.data.last_name.$errors" :key="error.$uid">
                <span class="error-msg">{{ error.$message }}</span>
            </div>
        </div>
        <div class="form-group">
            <label>Prénom</label>
            <input type="text" class="form-control" v-model="data.first_name" @blur="v$.data.first_name.$touch" :class="{ error: v$.data.first_name.$errors.length }">
            <div class="input-errors" v-for="error of v$.data.first_name.$errors" :key="error.$uid">
                <span class="error-msg">{{ error.$message }}</span>
            </div>
        </div>
        <!-- ... autres champs ... -->
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="data.email" @blur="v$.data.email.$touch" :class="{ error: v$.data.email.$errors.length }">
            <div class="input-errors" v-for="error of v$.data.email.$errors" :key="error.$uid">
                <span class="error-msg">{{ error.$message }}</span>
            </div>
        </div>
        <div class="form-group">
            <label>Mot de passe</label>
            <input type="password" class="form-control" v-model="data.password" @blur="v$.data.password.$touch" :class="{ error: v$.data.password.$errors.length }">
            <div class="input-errors" v-for="error of v$.data.password.$errors" :key="error.$uid">
                <span class="error-msg">{{ error.$message }}</span>
            </div>
        </div>
        <!-- ... autres champs ... -->
        <div class="form-group">
            <label>Statut</label>
            <select class="form-control" v-model="data.status" @blur="v$.data.status.$touch" :class="{ error: v$.data.status.$errors.length }">
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
            </select>
            <div class="input-errors" v-for="error of v$.data.status.$errors" :key="error.$uid">
                <span class="error-msg">{{ error.$message }}</span>
            </div>
        </div>
        <div class="form-group">
            <label>Rôle</label>
            <select class="form-control" v-model="data.role" @blur="v$.data.role.$touch" :class="{ error: v$.data.role.$errors.length }">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
            <div class="input-errors" v-for="error of v$.data.role.$errors" :key="error.$uid">
                <span class="error-msg">{{ error.$message }}</span>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <input ref="removeButton" type="button" class="btn btn-default" data-dismiss="modal" value="Annuler">
        <input type="submit" class="btn btn-success" value="Ajouter">
    </div>
</form>

		</div>
	</div>
</div>
<!-- Edit Modal HTML -->
<div id="editEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Modifier Utilisateur</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Nom</label>
						<input type="text" class="form-control">
					</div>
                    <div class="form-group">
						<label>Prénom</label>
						<input type="text" class="form-control">
					</div>
                    <div class="form-group">
						<label>Telephone</label>
						<input type="text" class="form-control">
					</div>
					<div class="form-group">
						<label>Email</label>
						<input type="email" class="form-control">
					</div>
                    <div class="form-group">
						<label>Mot de passe</label>
						<input type="password" class="form-control">
					</div>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Annuler">
					<input type="submit" class="btn btn-info" value="Sauvegarder">
				</div>
			</form>
		</div>
	</div>
</div>
<!-- Delete Modal HTML -->
<div id="deleteEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Delete Employee</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete these Records?</p>
					<p class="text-warning"><small>This action cannot be undone.</small></p>
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
					<input type="submit" class="btn btn-danger" value="Delete">
				</div>
			</form>
		</div>
	</div>
</div>




    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content -->
</div>
<SideBar />
<MainFooter />
</div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators'
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
		v$: useVuelidate(),
        data: {
            last_name: '',
            first_name: '',
            email: '',
            password: '',
            status: '',
            role: ''
        },
    };
  },
  validations() {
    return {
		data: {
			last_name: { required },
			first_name: { required },
			email: { required, email },
			password: { required, min: 6 },
			status: { required },
			role: { required }
		}
	}
},
  computed: {
    ...mapGetters({
      getData: "User/getData",
      getLastPage: "User/getLastPage",
    }),
  },
  methods: {
    ...mapActions({
      fetch: "User/fetch",
	  store: "User/store",
    }),
    async submit() {
      try {
      const result = await this.store(this.data);
      if (result.success) {
        this.fetch();
        this.$refs.removeButton.click();
        this.data = {
            last_name: '',
            first_name: '',
            email: '',
            password: '',
            statut: '',
            role: ''
        }
      } else {
      }
    } catch (error) {
    }
    }
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style >
.active {
    color: #28a745;
    font-weight: 600;
}
.inactive {
    color: #f71111;
    font-weight: 600;
}
.admin {
    color: #5100ff;
    font-weight: 600;
}
.user {
    color: #009d47;
    font-weight: 600;
}
</style>