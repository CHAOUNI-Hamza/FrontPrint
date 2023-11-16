<template>
    <div class="page-wrapper"><header class="header header-intro-clearance header-4">
            <div class="header-top">
                <div class="container">
                    <div class="header-left">
                        <a class="mr-3" href="tel:0655728155"><i class="icon-phone"></i>Tél. : 06 55 72 81 55</a>
                        <a href="https://wa.me/0655728155"><i class="icon-whatsapp"></i>Wha. : 06 55 72 81 55</a>
                    </div><!-- End .header-left -->

                    <div class="header-right">

                        <ul class="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li v-if="authenticated">
                                        <div class="header-dropdown">
                                            <a href="#">Hamza CHAOUNI</a>
                                            <div class="header-menu">
                                                <ul>
                                                    <li><router-link :to="{ name: 'parametres' }">Profile</router-link></li>
                                                    <li><a href="#">Historique</a></li>
                                                    <li><a @click="signOut" style="cursor: pointer;">Se deconneter</a></li>
                                                </ul>
                                            </div><!-- End .header-menu -->
                                        </div>
                                    </li>
                                    <li v-else>
                                        <div style="padding-top: 0.75rem;padding-bottom: 0.75rem;">
                                            <a href="#signin-modal" data-toggle="modal">Inscription / Connexion</a>
                                        </div>
                                        </li>
                                </ul>
                            </li>
                        </ul><!-- End .top-menu -->
                    </div><!-- End .header-right -->

                </div><!-- End .container -->
            </div><!-- End .header-top -->

            

            <div class="header-middle">
                <div class="container">
                    <div class="header-left">
                        <button class="mobile-menu-toggler">
                            <span class="sr-only">Basculer le menu mobile</span>
                            <i class="icon-bars"></i>
                        </button>
                        
                        <router-link :to="{ name: 'home' }" href="index.html" class="logo">
                            <img src="data:image/png;base64,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" alt="Molla Logo" width="105" height="25">
                        </router-link>
                    </div><!-- End .header-left -->

                    <div class="header-center">
                        <div class="header-search header-search-extended header-search-visible d-none d-lg-block">
                            <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
                            <form action="#" method="get">
                                <div class="header-search-wrapper search-wrapper-wide">
                                    <label for="q" class="sr-only">Search</label>
                                    <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
                                    <input type="search" class="form-control" name="q" id="q" placeholder="Recherche ..." required>
                                </div><!-- End .header-search-wrapper -->
                            </form>
                        </div><!-- End .header-search -->
                    </div>

                    <div class="header-right">
                        <div class="wishlist">
                            <router-link :to="{ name:'liste-souhaits' }" href="wishlist.html" title="Wishlist">
                                <a href="">
                                    <div class="icon">
                                    <i class="icon-heart-o"></i>
                                    <span class="wishlist-count badge">3</span>
                                </div>
                                <p>Liste de souhaits</p>
                                </a>
                            </router-link>
                        </div><!-- End .compare-dropdown -->

                        <div class="dropdown cart-dropdown">
                            <router-link :to="{ name: 'panier'}" class="dropdown-toggle" role="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" >
                                <div class="icon">
                                    <i class="icon-shopping-cart"></i>
                                    <span class="cart-count">2</span>
                                </div>
                                <p>Panier</p>
                            </router-link>

                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="dropdown-cart-products">
                                    <div class="product">
                                        <div class="product-cart-details">
                                            <h4 class="product-title">
                                                <a href="product.html">Brochure</a>
                                            </h4>

                                            <span class="cart-product-info">
                                                <span class="cart-product-qty">1</span>
                                                100DH
                                            </span>
                                        </div><!-- End .product-cart-details -->

                                        <figure class="product-image-container">
                                            <a href="product.html" class="product-image">
                                                <img src="https://i.pinimg.com/originals/bf/01/98/bf01988d99053ec656e20fdd88e36587.png" alt="product">
                                            </a>
                                        </figure>
                                        <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                    </div><!-- End .product -->
                                </div><!-- End .cart-product -->

                                <div class="dropdown-cart-total">
                                    <span>Total</span>

                                    <span class="cart-total-price">160.00DH</span>
                                </div><!-- End .dropdown-cart-total -->

                                <div class="dropdown-cart-action">
                                    <router-link :to="{ name: 'panier'}" href="cart.html" class="btn btn-primary">Voir le panier</router-link>
                                    <router-link :to="{ name: 'caisse' }" href="checkout.html" class="btn btn-outline-primary-2"><span>Vérifier</span><i class="icon-long-arrow-right"></i></router-link>
                                </div><!-- End .dropdown-cart-total -->
                            </div><!-- End .dropdown-menu -->
                        </div><!-- End .cart-dropdown -->
                    </div><!-- End .header-right -->
                </div><!-- End .container -->
            </div><!-- End .header-middle -->

            <div class="header-bottom sticky-header">
                <div class="container">
                    <div class="header-left">
                        <div class="dropdown category-dropdown">
                            <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                                Tous les catégories <i class="icon-angle-down"></i>
                            </a>

                            <div class="dropdown-menu">
                                <nav class="side-nav">
                                    <ul class="menu-vertical sf-arrows">
                                        <li style="border-top: 1px solid #ebebeb;"><a href="#">CARTERIE</a></li>
                                        <li><a href="#">PAPETERIE</a></li>
                                        <li><a href="#">COMMUNICATION</a></li>
                                        <li><a href="#">RESTAURATION</a></li>
                                        <li><a href="#">PACKAGING</a></li>
                                        <li><a href="#">SIGNALÉTIQUE </a></li>
                                    </ul><!-- End .menu-vertical -->
                                </nav><!-- End .side-nav -->
                            </div><!-- End .dropdown-menu -->
                        </div><!-- End .category-dropdown -->
                    </div><!-- End .header-left -->

                    <div class="header-center">
                        <nav class="main-nav" style="padding: 0;">
                            <ul class="menu sf-arrows">
                                <li>
                                    <a href="product.html" class="sf-with-ul">Carterie</a>
                                    <ul style="text-align: left;">
                                        <li>
                                            <a class="menu-title">Carterie</a>
                                        </li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Cartes de visite</a>

                                            <ul>
                                                <li><a href="about.html">Classique</a></li>
                                                <li><a href="about.html">Luxe</a></li>
                                                <li><a href="about-2.html">Ultra Blanches</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="login.html">Cartes de correspondance</a></li>
                                        <li><a href="faq.html">Cartes de voeux</a></li>
                                        <li><a href="404.html">Cartes d'invitation</a></li>
                                        <li><a href="coming-soon.html">Cartes postales</a></li>
                                        <li><a href="coming-soon.html">Cartes marque-pages</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="product.html" class="sf-with-ul">Papeterie</a>
                                    <ul style="text-align: left;">
                                        <li>
                                            <a class="menu-title">Papeterie</a>
                                        </li>
                                        <li><a href="login.html">Papier en-tête</a></li>
                                        <li><a href="login.html">Ordonnances</a></li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Chemise a Rabat</a>

                                            <ul>
                                                <li><a href="about.html">Double Rabat</a></li>
                                                <li><a href="about.html">Rabat simple</a></li>
                                                <li><a href="about-2.html">Ultra Blanches</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Enveloppes</a>

                                            <ul>
                                                <li><a href="about.html">Standard</a></li>
                                                <li><a href="about.html">Luxe</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="login.html">Blocs-notes</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="product.html" class="sf-with-ul">Communication</a>
                                    <ul style="text-align: left;">
                                        <li><a href="login.html">Flyer</a></li>
                                        <li><a href="login.html">Affiche</a></li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Dépliants</a>

                                            <ul>
                                                <li><a href="about.html">Pli simple</a></li>
                                                <li><a href="about.html">Pli roulés</a></li>
                                                <li><a href="about-2.html">Pli croirés</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Brochures</a>

                                            <ul>
                                                <li><a href="about.html">piquées</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Etiquettes</a>

                                            <ul>
                                                <li><a href="about.html">Tags</a></li>
                                                <li><a href="about.html">Stickers</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="login.html">Tickets</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="product.html" class="sf-with-ul">Restauration</a>
                                    <ul style="text-align: left;">
                                        <li><a href="login.html">Chevalets</a></li>
                                        <li><a href="login.html">Port-additions</a></li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Menus</a>

                                            <ul>
                                                <li><a href="about.html">Page à page</a></li>
                                                <li><a href="about.html">piqués</a></li>
                                                <li>
                                                    <a href="about-2.html">Dépliants</a>
                                                    <ul>
                                                <li><a href="about.html">1 Pli</a></li>
                                                <li><a href="about.html">2 Plis</a></li>
                                            </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="login.html">Sets de table</a></li>
                                        <li><a href="login.html">Ronds de serviette</a></li>
                                        <li><a href="login.html">Porte-cartes Magnétiques</a></li>
                                        <li><a href="login.html">Cravates accroche portes</a></li>
                                        <li><a href="login.html">Sous-verres</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="product.html" class="sf-with-ul">Packaging</a>
                                    <ul style="text-align: left;">
                                        <li><a href="login.html">Sacs papiers de luxe</a></li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Etuis pliants</a>

                                            <ul>
                                                <li><a href="about.html">Etuis</a></li>
                                                <li><a href="about.html">Boites</a></li>
                                                <li><a href="about.html">Berlingots</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="product.html" class="sf-with-ul">Signalétique</a>
                                    <ul style="text-align: left;">
                                        <li><a class="menu-title">Signalétique</a></li>
                                        <li><a href="login.html">Photocalls</a></li>
                                        <li><a href="login.html">Roll-up</a></li>
                                        <li><a href="login.html">X-banners</a></li>
                                        <li><a href="login.html">Stop-Trottoirs</a></li>
                                        <li><a href="login.html">Totems Rigides</a></li>
                                        <li><a href="login.html">Beach Flags</a></li>
                                    </ul>
                                </li>
                            </ul><!-- End .menu -->
                        </nav><!-- End .main-nav -->
                    </div><!-- End .header-center -->
                </div><!-- End .container -->
            </div><!-- End .header-bottom -->
        </header></div>
    

        <!-- Mobile Menu -->
    <div class="mobile-menu-overlay"></div><!-- End .mobil-menu-overlay -->

<div class="mobile-menu-container mobile-menu-light">
    <div class="mobile-menu-wrapper">
        <span class="mobile-menu-close"><i class="icon-close"></i></span>
        
        <form action="#" method="get" class="mobile-search">
            <label for="mobile-search" class="sr-only">Recherche</label>
            <input type="search" class="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required>
            <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
        </form>

        <ul class="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Categories</a>
            </li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
                <nav class="mobile-nav">
                    <ul class="mobile-menu">
                        <li class="active">
                            <a href="index.html">Carterie</a>

                            <ul>
                                <li>
                                            <a href="about.html" class="sf-with-ul">Cartes de visite</a>

                                            <ul>
                                                <li><a href="about.html">Classique</a></li>
                                                <li><a href="about.html">Luxe</a></li>
                                                <li><a href="about-2.html">Ultra Blanches</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="login.html">Cartes de correspondance</a></li>
                                        <li><a href="faq.html">Cartes de voeux</a></li>
                                        <li><a href="404.html">Cartes d'invitation</a></li>
                                        <li><a href="coming-soon.html">Cartes postales</a></li>
                                        <li><a href="coming-soon.html">Cartes marque-pages</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="category.html">Papeterie</a>
                            <ul>
                                <li><a href="login.html">Papier en-tête</a></li>
                                        <li><a href="login.html">Ordonnances</a></li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Chemise a Rabat</a>

                                            <ul>
                                                <li><a href="about.html">Double Rabat</a></li>
                                                <li><a href="about.html">Rabat simple</a></li>
                                                <li><a href="about-2.html">Ultra Blanches</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Enveloppes</a>

                                            <ul>
                                                <li><a href="about.html">Standard</a></li>
                                                <li><a href="about.html">Luxe</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="login.html">Blocs-notes</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="product.html" class="sf-with-ul">Communication</a>
                            <ul>
                                <li><a href="login.html">Flyer</a></li>
                                        <li><a href="login.html">Affiche</a></li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Dépliants</a>

                                            <ul>
                                                <li><a href="about.html">Pli simple</a></li>
                                                <li><a href="about.html">Pli roulés</a></li>
                                                <li><a href="about-2.html">Pli croirés</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Brochures</a>

                                            <ul>
                                                <li><a href="about.html">piquées</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Etiquettes</a>

                                            <ul>
                                                <li><a href="about.html">Tags</a></li>
                                                <li><a href="about.html">Stickers</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="login.html">Tickets</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Hotellerie / Restauration</a>
                            <ul>
                                <li><a href="login.html">Chevalets</a></li>
                                        <li><a href="login.html">Port-additions</a></li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Menus</a>

                                            <ul>
                                                <li><a href="about.html">Page à page</a></li>
                                                <li><a href="about.html">piqués</a></li>
                                                <li>
                                                    <a href="about-2.html">Dépliants</a>
                                                    <ul>
                                                <li><a href="about.html">1 Pli</a></li>
                                                <li><a href="about.html">2 Plis</a></li>
                                            </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="login.html">Sets de table</a></li>
                                        <li><a href="login.html">Ronds de serviette</a></li>
                                        <li><a href="login.html">Porte-cartes Magnétiques</a></li>
                                        <li><a href="login.html">Cravates accroche portes</a></li>
                                        <li><a href="login.html">Sous-verres</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="blog.html">Packaging</a>

                            <ul>
                                <li><a href="login.html">Sacs papiers de luxe</a></li>
                                        <li>
                                            <a href="about.html" class="sf-with-ul">Etuis pliants</a>

                                            <ul>
                                                <li><a href="about.html">Etuis</a></li>
                                                <li><a href="about.html">Boites</a></li>
                                                <li><a href="about.html">Berlingots</a></li>
                                            </ul>
                                        </li>
                            </ul>
                        </li>
                        <li>
                            <a href="elements-list.html">Signalétique</a>
                            <ul>
                                <li><a class="menu-title">Signalétique</a></li>
                                        <li><a href="login.html">Photocalls</a></li>
                                        <li><a href="login.html">Roll-up</a></li>
                                        <li><a href="login.html">X-banners</a></li>
                                        <li><a href="login.html">Stop-Trottoirs</a></li>
                                        <li><a href="login.html">Totems Rigides</a></li>
                                        <li><a href="login.html">Beach Flags</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav><!-- End .mobile-nav -->
            </div><!-- .End .tab-pane -->
            <div class="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                <nav class="mobile-cats-nav">
                    <ul class="mobile-cats-menu">
                        <li><a href="#">CARTERIE</a></li>
                        <li><a href="#">PAPETERIE</a></li>
                        <li><a href="#">COMMUNICATION</a></li>
                        <li><a href="#">RESTAURATION</a></li>
                        <li><a href="#">PACKAGING</a></li>
                        <li><a href="#">SIGNALÉTIQUE </a></li>
                    </ul><!-- End .mobile-cats-menu -->
                </nav><!-- End .mobile-cats-nav -->
            </div><!-- .End .tab-pane -->
        </div><!-- End .tab-content -->

        <div class="social-icons">
            <a href="#" class="social-icon" target="_blank" title="Facebook"><i class="icon-facebook-f"></i></a>
            <a href="#" class="social-icon" target="_blank" title="Twitter"><i class="icon-twitter"></i></a>
            <a href="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
            <a href="#" class="social-icon" target="_blank" title="Youtube"><i class="icon-youtube"></i></a>
        </div><!-- End .social-icons -->
    </div><!-- End .mobile-menu-wrapper -->
</div><!-- End .mobile-menu-container -->


<!-- Sign in / Register Modal -->
<div class="modal fade" id="signin-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="icon-close"></i></span>
                    </button>

                    <div class="form-box">
                        <div class="form-tab">
                            <ul class="nav nav-pills nav-fill nav-border-anim" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Connexion</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Inscription</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="oublie-tab" data-toggle="tab" href="#oublie" role="tab" aria-controls="oublie" aria-selected="false">MP oublié</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="tab-content-5">
                                <div class="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                    <form @submit.prevent="submit()">

                                        <div class="form-group">
                                            <label for="singin-email">Adresse e-mail</label>
                                            <input v-model="signIn.email" @blur="v$.signIn.email.$touch" :class="{ error: v$.signIn.email.$errors.length }" type="text" class="form-control" id="singin-email"
                                            name="email">
                                            <div class="input-errors" v-for="error of v$.signIn.email.$errors" :key="error.$uid">
    <span class="error-msg">{{ error.$message }}</span>
  </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="password">Mot de passe</label>
                                            <input v-model="signIn.password" @blur="v$.signIn.password.$touch" :class="{ error: v$.signIn.password.$errors.length }" type="password" class="form-control" id="singin-email"
                                            name="password">
                                            <div class="input-errors" v-for="error of v$.signIn.password.$errors" :key="error.$uid">
    <span class="error-msg">{{ error.$message }}</span>
  </div>
                                        </div>
                                        <div class="input-errors" style="text-align: left;" v-if="getErrorAuth">
    <span class="error-msg">{{ getErrorAuth }}</span>
  </div>

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>Connexion</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>
                                        </div><!-- End .form-footer -->
                                    </form>
                                </div><!-- .End .tab-pane -->
                                <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                    <form @submit.prevent="send()">
                                        <div class="form-group">
                                            <label for="register-email">Votre adresse e-mail</label>
                                            <input v-model="signUp.email" @blur="v$.signUp.email.$touch" :class="{ error: v$.signUp.email.$errors.length || getEmailExists }" type="email" class="form-control" id="register-email" name="register-email" >
                                            <div class="input-errors" v-for="error of v$.signUp.email.$errors" :key="error.$uid">
                                                <span class="error-msg">{{ error.$message }}</span>
                                            </div>
                                            <div class="input-errors" v-if="getEmailExists">
                                                <span class="error-msg">{{ getEmailExists }}</span>
                                            </div>
                                        </div><!-- End .form-group -->
                                        <div class="form-group">
                                            <label for="register-email">Prénom</label>
                                            <input v-model="signUp.first_name" @blur="v$.signUp.first_name.$touch" :class="{ error: v$.signUp.first_name.$errors.length }" type="text" class="form-control" id="register-email" name="register-email" >
                                            <div class="input-errors" v-for="error of v$.signUp.first_name.$errors" :key="error.$uid">
                                                <span class="error-msg">{{ error.$message }}</span>
                                            </div>
                                        </div><!-- End .form-group -->
                                        <div class="form-group">
                                            <label for="register-email">Nom</label>
                                            <input v-model="signUp.last_name" @blur="v$.signUp.last_name.$touch" :class="{ error: v$.signUp.last_name.$errors.length }" type="text" class="form-control" id="register-email" name="register-email" >
                                            <div class="input-errors" v-for="error of v$.signUp.last_name.$errors" :key="error.$uid">
                                                <span class="error-msg">{{ error.$message }}</span>
                                            </div>
                                        </div><!-- End .form-group -->
                                        <div class="form-group">
                                            <label for="register-email">Téléphone</label>
                                            <input v-model="signUp.phone_number" @blur="v$.signUp.phone_number.$touch" :class="{ error: v$.signUp.phone_number.$errors.length }" type="text" class="form-control" id="register-email" name="register-email" >
                                            <div class="input-errors" v-for="error of v$.signUp.phone_number.$errors" :key="error.$uid">
                                                <span class="error-msg">{{ error.$message }}</span>
                                            </div>
                                        </div><!-- End .form-group -->
                                        <div class="form-group">
                                            <label for="register-email">Adresse</label>
                                            <input v-model="signUp.address" @blur="v$.signUp.address.$touch" :class="{ error: v$.signUp.address.$errors.length }" type="text" class="form-control" id="register-email" name="register-email" >
                                            <div class="input-errors" v-for="error of v$.signUp.address.$errors" :key="error.$uid">
                                                <span class="error-msg">{{ error.$message }}</span>
                                            </div>
                                        </div><!-- End .form-group -->
                                        <div class="form-group">
                                            <label for="register-email">Region</label>
                                            <input v-model="signUp.region" @blur="v$.signUp.region.$touch" :class="{ error: v$.signUp.region.$errors.length }" type="text" class="form-control" id="register-email" name="register-email" >
                                            <div class="input-errors" v-for="error of v$.signUp.region.$errors" :key="error.$uid">
                                                <span class="error-msg">{{ error.$message }}</span>
                                            </div>
                                        </div><!-- End .form-group -->
                                        <div class="form-group">
                                            <label for="register-email">Ville</label>
                                            <input v-model="signUp.city" @blur="v$.signUp.city.$touch" :class="{ error: v$.signUp.city.$errors.length }" type="text" class="form-control" id="register-email" name="register-email" >
                                            <div class="input-errors" v-for="error of v$.signUp.city.$errors" :key="error.$uid">
                                                <span class="error-msg">{{ error.$message }}</span>
                                            </div>
                                        </div><!-- End .form-group -->
                                        <div class="form-group">
                                            <label for="register-email">Pays</label>
                                            <input v-model="signUp.country" @blur="v$.signUp.country.$touch" :class="{ error: v$.signUp.country.$errors.length }" type="text" class="form-control" id="register-email" name="register-email" >
                                            <div class="input-errors" v-for="error of v$.signUp.country.$errors" :key="error.$uid">
                                                <span class="error-msg">{{ error.$message }}</span>
                                            </div>
                                        </div><!-- End .form-group -->

                                        <div class="form-group">
                                            <label for="register-password">Mot de passe</label>
                                            <input v-model="signUp.password" @blur="v$.signUp.password.$touch" :class="{ error: v$.signUp.password.$errors.length }" type="password" class="form-control" id="register-password" name="register-password" >
                                            <div class="input-errors" v-for="error of v$.signUp.password.$errors" :key="error.$uid">
                                                <span class="error-msg">{{ error.$message }}</span>
                                            </div>
                                        </div><!-- End .form-group -->
                                        <div class="form-group">
                                            <label for="register-password">Confirmer le mot de passe</label>
                                            <input v-model="signUp.confirmPassword" @blur="v$.signUp.confirmPassword.$touch" :class="{ error: v$.signUp.confirmPassword.$errors.length }" type="password" class="form-control" id="register-password" name="register-password" >
                                            <div class="input-errors" v-for="error of v$.signUp.confirmPassword.$errors" :key="error.$uid">
                                                <span class="error-msg">{{ error.$message }}</span>
                                            </div>
                                        </div><!-- End .form-group -->

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>S'INSCRIRE</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>
                                        </div><!-- End .form-footer -->
                                    </form>
                                </div><!-- .End .tab-pane -->
                                <div class="tab-pane fade show" id="oublie" role="tabpanel" aria-labelledby="signin-tab">
                                    <form @submit.prevent="submitForgot()">

                                        <div class="form-group">
                                            <label for="singin-email">Adresse e-mail</label>
                                            <input v-model="forgotPassword.email" @blur="v$.forgotPassword.email.$touch" :class="{ error: v$.forgotPassword.email.$errors.length || getEmailNotExists }" type="text" class="form-control" id="singin-email"
                                            name="email">
                                            <div class="input-errors" v-for="error of v$.forgotPassword.email.$errors" :key="error.$uid">
    <span class="error-msg">{{ error.$message }}</span>
  </div>
  <div class="input-errors" v-if="getEmailNotExists">
    <span class="error-msg">{{ getEmailNotExists }}</span>
  </div>
                                        </div>
                                    

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>ENVOYER</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>
                                        </div><!-- End .form-footer -->
                                    </form>
                                </div>
                            </div><!-- End .tab-content -->
                        </div><!-- End .form-tab -->
                    </div><!-- End .form-box -->
                </div><!-- End .modal-body -->
            </div><!-- End .modal-content -->
        </div><!-- End .modal-dialog -->
    </div><!-- End .modal -->


  </template>
  <script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators'
import { mapActions, mapGetters } from "vuex";
import router from "@/router";
export default {
  data() {
    return {
        v$: useVuelidate(),
        signIn: {
        email: '',
        password: ''
      },
      signUp: {
        first_name: '',
        last_name: '',
        phone_number: '',
        address: '',
        region: '',
        city: '',
        country: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      forgotPassword : {
        email: ''
      }
    }
  },
  validations() {
    return {
        signIn: {
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
            }
        },
      signUp: {
        first_name: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(30),
                $autoDirty: true,
            },
        last_name: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(30),
                $autoDirty: true,
            },
        phone_number: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(30),
                $autoDirty: true,
            },
        address: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(30),
                $autoDirty: true,
            },
        region: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(30),
                $autoDirty: true,
            },
        city: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(30),
                $autoDirty: true,
            },
        country: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(30),
                $autoDirty: true,
            },
        email: {
                required,
                email,
                $autoDirty: true,
            },
        password: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(30),
                $autoDirty: true,
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs(this.signUp.password),
            }
      },
      forgotPassword : {
        email: { required, email, $autoDirty: true }
      }
    };
},
    methods: {
        ...mapActions({
            login: "Auth/signIn",
            register: "Auth/signUp",
            forgot: "Auth/forgotPassword",
            signOut: "Auth/signOut",
        }),
        submit() {
            this.login(this.signIn);
        },
        send() {
            this.register(this.signUp);
        },
        submitForgot() {
            this.forgot(this.forgotPassword)
        }
    },
    computed: {
        ...mapGetters({
            getEmailExists: "Auth/getEmailExists",
            getErrorAuth: "Auth/getErrorAuth",
            getEmailNotExists: "Auth/getEmailNotExists",
            authenticated: "Auth/authenticated",
            getRoleAuth: "Auth/getRoleAuth",
        }),
    },
}
</script>
  
  <style scoped>
  .nav-link {
    font-size: 1.7rem !important;
}
.header-intro-clearance .header-bottom .container::after {
    height: 0;
}
.nav.nav-pills .nav-item.show .nav-link, .nav.nav-pills .nav-item .nav-link.active {
    background: #fafafa;
    color: #1f2d3d;
    border-bottom-color: #1f2d3d;
}
.modal .form-box {
    max-width: 575px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fafafa;
    padding: 3.2rem 5rem 4.4rem;
    box-shadow: 0 3px 16px rgba(51,51,51,0.1);
}
.modal .form-control {
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
.modal .form-tab .form-group {
    text-align: left;
}
.modal .modal-body {
    padding: 0;
}
.modal label:not(.form-check-label):not(.custom-file-label) {
    font-weight: normal;
}
.modal .custom-control-label {
    position: static;
    margin-bottom: 0;
    margin-top: 0.1rem;
    font-size: 1.4rem;
    padding-left: 2.6rem;
    margin-left: -2.6rem;
}
.modal .custom-control-label::before {
    left: -8px;
    top: 0.3rem;
    width: 1.6rem;
    height: 1.6rem;
    background-color: #fafafa;
    border: 1px solid #fafafa;
    box-shadow: none !important;
}
.modal .custom-checkbox .custom-control-label::after {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fafafa;
    background-image: none;
    font-size: 1rem;
    font-family: 'molla';
    content: '\ec2d';
    line-height: 1;
    text-align: center;
    opacity: 0;
    margin-top: 0.1rem;
    visibility: hidden;
    transition: opacity .01s;
}
.modal .btn-outline-primary-2 {
    border: 1px solid #3399ff;
    border-radius: 0;
    padding: 8px;
    font-size: 12px;
    color: #3399ff;
}
.modal .btn-outline-primary-2:hover {
    color: #ffffff;
}
.modal .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
    background-image: none;
    opacity: 1;
    visibility: visible;
    left: -5px;
    top: 5px;
}
.header-intro-clearance .wishlist .wishlist-count {
    right: 2.5rem !important;
}
/* Media query */
@media screen and (max-width: 768px) {
    .mobile-cats-menu {
        text-align: left;
    }
    .mobile-menu {
        text-align: left;
    }
}
@media screen and (max-width: 992px) {
    .mobile-cats-menu {
        text-align: left;
    }
    .mobile-menu {
        text-align: left;
    }
}
  </style>
  