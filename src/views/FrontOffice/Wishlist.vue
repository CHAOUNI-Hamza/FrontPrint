<template>
    <main class="main">
        	<div class="page-header text-center" style="background-image: url('https://www.olivierchristinat.com/sites/default/files/styles/large/public/photos/_mg_7578-modifier.jpg?itok=qdDie4iu')">
        		<div class="container">
        			<h1 class="page-title">Liste de souhaits<span>Boutique</span></h1>
        		</div><!-- End .container -->
        	</div><!-- End .page-header -->
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Accueil</a></li>
                        <li class="breadcrumb-item"><a href="#">Boutique</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Liste de souhaits</li>
                    </ol>
                </div><!-- End .container -->
            </nav><!-- End .breadcrumb-nav -->

            <div class="page-content">
            	<div class="container">
					<table class="table table-wishlist table-mobile">
						<thead>
							<tr>
								<th>Produit</th>
								<th>Prix</th>
								<th>Statut des stocks</th>
								<th></th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td class="product-col">
									<div class="product">
										<figure class="product-media">
											<a href="#">
												<img src="https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/218825/1.jpg?1041" alt="Product image">
											</a>
										</figure>

										<h3 class="product-title">
											<a href="#">Chaussures de running élastiques tricotées de couleur beige</a>
										</h3><!-- End .product-title -->
									</div><!-- End .product -->
								</td>
								<td class="price-col">$84.00</td>
								<td class="stock-col"><span class="in-stock">En stock</span></td>
								<td class="action-col">
                                    <div class="dropdown">
									<button class="btn btn-block btn-outline-primary-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="icon-list-alt"></i>Sélectionner les options
                                    </button>

                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Première option</a>
                                        <a class="dropdown-item" href="#">Une autre option</a>
                                        <a class="dropdown-item" href="#">La meilleure option</a>
                                      </div>
                                    </div>
								</td>
								<td class="remove-col"><button class="btn-remove"><i class="icon-close"></i></button></td>
							</tr>
							<tr>
								<td class="product-col">
									<div class="product">
										<figure class="product-media">
											<a href="#">
												<img src="https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/218825/1.jpg?1041" alt="Product image">
											</a>
										</figure>

										<h3 class="product-title">
											<a href="#">Robe en jean bleu style salopette utilitaire</a>
										</h3><!-- End .product-title -->
									</div><!-- End .product -->
								</td>
								<td class="price-col">$76.00</td>
								<td class="stock-col"><span class="in-stock">En stock</span></td>
								<td class="action-col">
									<button class="btn btn-block btn-outline-primary-2"><i class="icon-cart-plus"></i>Ajouter au panier</button>
								</td>
								<td class="remove-col"><button class="btn-remove"><i class="icon-close"></i></button></td>
							</tr>
							<tr>
								<td class="product-col">
									<div class="product">
										<figure class="product-media">
											<a href="#">
												<img src="https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/218825/1.jpg?1041" alt="Product image">
											</a>
										</figure>

										<h3 class="product-title">
											<a href="#">Sac bandoulière à chaîne à fermoir en selle orange</a>
										</h3><!-- End .product-title -->
									</div><!-- End .product -->
								</td>
								<td class="price-col">$52.00</td>
								<td class="stock-col"><span class="out-of-stock">Rupture de stock</span></td>
								<td class="action-col">
									<button class="btn btn-block btn-outline-primary-2 disabled">Rupture de stock</button>
								</td>
								<td class="remove-col"><button class="btn-remove"><i class="icon-close"></i></button></td>
							</tr>
						</tbody>
					</table><!-- End .table table-wishlist -->
	            	<div class="wishlist-share">
	            		<div class="social-icons social-icons-sm mb-2">
	            			<label class="social-label">Partager sur:</label>
	    					<a href="#" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
	    					<a href="#" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
	    					<a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
	    					<a href="#" class="social-icon" title="Youtube" target="_blank"><i class="icon-youtube"></i></a>
	    					<a href="#" class="social-icon" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
	    				</div><!-- End .soial-icons -->
	            	</div><!-- End .wishlist-share -->
            	</div><!-- End .container -->
            </div><!-- End .page-content -->
        </main><!-- End .main -->
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
.table td {
    padding-top: 3rem;
    padding-bottom: 3rem;
    vertical-align: inherit;
}
.table .form-control {
    height: 40px;
}
.table th {
    text-align: left;
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
    margin-bottom: 2rem;
    transition: all 0.3s;
    box-shadow: none;
}
.cart-discount .btn {
    min-width: 40px;
    padding-left: 0;
    padding-right: 0;
}
.btn-outline-primary-2 {
    color: #c96;
    background-color: transparent;
    background-image: none;
    border-color: #c96;
    box-shadow: none;
    height: 40px;
    border-radius: 0;
}
.cart-bottom .btn {
    margin-left: auto;
}
.btn-outline-dark-2 {
    color: #333;
    background-color: transparent;
    background-image: none;
    border-color: #ebebeb;
    box-shadow: none;
}
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.85rem 1.5rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: -.01em;
    border-radius: 0;
    white-space: normal;
    transition: all 0.3s;
}
.custom-control-label::before {
    left: 0;
    top: 0.6rem;
    width: 1.6rem;
    height: 1.6rem;
    background-color: #f9f9f9;
    border: 1px solid #dadada;
    box-shadow: none !important;
}
.custom-control-label::after {
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background: no-repeat 50%/50% 50%;
}
.summary {
    text-align: left;
}
.table .action-col {
    width: 285px;
}
tr {
    text-align: left;
}



</style>