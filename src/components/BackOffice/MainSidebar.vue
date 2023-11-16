<template>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="index3.html" class="brand-link" style="padding:17px">
    <span class="brand-text font-weight-light">AdminLTE 3</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar mt-3">
    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
             <li class="menu-title"><span data-key="t-menu">Menu</span></li>
        <li class="nav-item menu-open">
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <router-link :to="{ name: 'users' }" href="#" style="text-align: left;padding-bottom: 10px;" class="nav-link active">
                <i style="color: #abb9e8;" class="ml-4 fas fa-users"></i>
                <p class="ml-4">Utilisateurs</p>
              </router-link>
              <router-link :to="{ name: '' }" href="#" style="text-align: left;padding-bottom: 10px;" class="nav-link">
                <i style="color: #abb9e8;" class="ml-4 fas fa-users"></i>
                <p class="ml-4">Catégories</p>
              </router-link>
              <router-link :to="{ name: '' }" href="#" style="text-align: left;padding-bottom: 10px;" class="nav-link">
                <i style="color: #abb9e8;" class="ml-4 fas fa-users"></i>
                <p class="ml-4">Produits</p>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>
</template>
<style scoped>

.main-sidebar {
    background-color: #405189;
}
body:not(.layout-fixed) .main-sidebar .sidebar {
    overflow-y: initial;
    overflow-x: visible;
}
.brand-link {
    line-height: 2.5;
}
nav {
    padding: 0 !important;
}
.sidebar .info a {
    font-size: 15px;
}
.user-panel img {
    width: 3.1rem;
}
.nav-sidebar .nav-link {
  background-color: #405189 !important;
  border-bottom: none;
}
.nav-sidebar .nav-link p {
    color: #abb9e8;
}
.brand-link {
    border-bottom: none;
}
.brand-link .brand-image {
    max-height: 46px;
}
.brand-text {
  font-size: 17px;
}
.menu-title {
    text-align: left;
    margin-left: 24px;
    margin-bottom: 12px;
    letter-spacing: .05em;
    cursor: default;
    font-size: 11px;
    text-transform: uppercase;
    color: #838fb9;
    font-weight: 600;
}
</style>