<template>
    <Navbar /><main class="main">
        	<div class="page-header text-center" style="background-image: url('https://www.olivierchristinat.com/sites/default/files/styles/large/public/photos/_mg_7578-modifier.jpg?itok=qdDie4iu')">
        		<div class="container">
        			<h1 class="page-title">Categories<span>Magasiner</span></h1>
        		</div><!-- End .container -->
        	</div><!-- End .page-header -->
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Accueil</a></li>
                        <li class="breadcrumb-item"><a href="#">Acheter</a></li>
                        <li class="breadcrumb-item"><a href="#">Pas de barre latérale</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Encadré</li>
                    </ol>
                </div><!-- End .container -->
            </nav><!-- End .breadcrumb-nav -->

            <div class="page-content">
                <div class="container">
        			<div class="toolbox">
        				<div class="toolbox-left">
                            <a href="#" class="sidebar-toggler"><i class="icon-bars"></i>Filtres</a>
        				</div><!-- End .toolbox-left -->

                        <div class="toolbox-center">
                            <div class="toolbox-info">
                                Affichage <span>12 of 56</span> Produits
                            </div><!-- End .toolbox-info -->
                        </div><!-- End .toolbox-center -->

        				<div class="toolbox-right">
        					<div class="toolbox-sort">
        						<label for="sortby">Recherche par:</label>
        						<div class="select-custom">
									<select name="sortby" id="sortby" class="form-control">
										<option value="popularity">CARTERIE</option>
										<option value="rating">PAPETERIE</option>
										<option value="date">COMMUNICATION</option>
                                        <option value="date">RESTAURATION</option>
                                        <option value="date">PACKAGING</option>
                                        <option value="date">SIGNALÉTIQUE</option>
									</select>
								</div>
        					</div><!-- End .toolbox-sort -->
        				</div><!-- End .toolbox-right -->
        			</div><!-- End .toolbox -->

                    <div class="products">
                        <div class="row">
                            <div class="col-6 col-md-4 col-lg-4 col-xl-3" v-for="item in 20">
                                <div class="product">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="https://img.freepik.com/vecteurs-libre/presentoir-affaires-roll-up-fins-presentation_1017-31432.jpg?w=2000" alt="Product image" class="product-image">
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>Ajouter à la souhaits</span></a>
                                        </div><!-- End .product-action -->

                                        <div class="product-action action-icon-top">
                                            <a href="#" class="btn-product btn-cart"><span>Ajouter au panier</span></a>
                                        </div><!-- End .product-action -->
                                    </figure><!-- End .product-media -->

                                    <div class="product-body">
                                        
                                        <h3 class="product-title"><a href="product.html">Lorem ipsum, doloorporis!</a></h3><!-- End .product-title -->
                                        
                                
                                    </div><!-- End .product-body -->
                                </div><!-- End .product -->
                            </div><!-- End .col-sm-6 col-lg-4 col-xl-3 -->
                        </div><!-- End .row -->

                        <div class="load-more-container text-center">
                            <a href="#" class="btn btn-outline-darker btn-load-more">Plus de produits <i class="icon-refresh"></i></a>
                        </div><!-- End .load-more-container -->
                    </div><!-- End .products -->
                </div><!-- End .container -->
            </div><!-- End .page-content -->
        </main><!-- End .main -->
    <Footer />
    
</template>
<style scoped>

.breadcrumb {
    background: none !important;
    border-radius: 0;
    margin: 0;
    padding: 0;
}
.breadcrumb-item+.breadcrumb-item:before {
    color: #999999;
    content: '\f112';
    font-family: "molla";
    padding-right: 0.7rem;
    font-size: 1.1rem;
    vertical-align: middle;
    margin-top: -0.1rem;
}
.breadcrumb a {
    font-weight: 300;
}


.toolbox {
    margin-top: 30px;
}


.product-body {
    text-align: center;
}


.btn.btn-load-more {
    text-transform: uppercase;
    min-width: 190px;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
}

.btn-outline-darker {
    color: #333;
    background-color: transparent;
    background-image: none;
    border-color: #d7d7d7;
    box-shadow: none;
}
</style>