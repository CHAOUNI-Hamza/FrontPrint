<template>
    <main class="main">
        	<div class="page-header text-center" style="background-image: url('https://www.olivierchristinat.com/sites/default/files/styles/large/public/photos/_mg_7578-modifier.jpg?itok=qdDie4iu')">
        		<div class="container">
        			<h1 class="page-title">Panier d'achat<span>Boutique</span></h1>
        		</div><!-- End .container -->
        	</div><!-- End .page-header -->
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Accueil</a></li>
                        <li class="breadcrumb-item"><a href="#">Boutique</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Panier d'achat</li>
                    </ol>
                </div><!-- End .container -->
            </nav><!-- End .breadcrumb-nav -->

            <div class="page-content">
            	<div class="cart">
	                <div class="container">
	                	<div class="row">
	                		<div class="col-lg-9">
	                			<table class="table table-cart table-mobile">
									<thead>
										<tr>
											<th>Produit</th>
											<th style="text-align: center;">Prix</th>
											<th style="text-align: center;">Prix TTC</th>
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
											<td class="price-col">84.00 DH</td>
											<td class="price-col">84.00 DH</td>
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
														<a href="#">Chaussures de running élastiques tricotées de couleur beige</a>
													</h3><!-- End .product-title -->
												</div><!-- End .product -->
											</td>
											<td class="price-col">84.00 DH</td>
											<td class="price-col">84.00 DH</td>
											<td class="remove-col"><button class="btn-remove"><i class="icon-close"></i></button></td>
										</tr>
									</tbody>
								</table><!-- End .table table-wishlist -->
	                		</div><!-- End .col-lg-9 -->
	                		<aside class="col-lg-3">
	                			<div class="summary summary-cart">
	                				<h3 class="summary-title">Total du panier</h3><!-- End .summary-title -->

	                				<table class="table table-summary">
	                					<tbody>
	                						<tr class="summary-subtotal">
	                							<td>Sous-total H.T :</td>
	                							<td style="min-width: 100px;">160.00 DH</td>
	                						</tr><!-- End .summary-subtotal -->
											<tr class="summary-subtotal">
	                							<td>Sous-total TTC :</td>
	                							<td style="min-width: 100px;">160.00 DH</td>
	                						</tr>
	                					</tbody>
	                				</table><!-- End .table table-summary -->

	                				<router-link :to="{ name: 'caisse' }" href="checkout.html" class="btn btn-outline-primary-2 btn-order btn-block">PASSER À LA CAISSE</router-link>
									<a href="category.html" class="btn btn-outline-dark-2 btn-block mb-3 mt-3"><span>CONTINUER LES ACHATS</span><i class="icon-refresh"></i></a>
									<router-link :to="{ name: 'caisse' }" href="checkout.html" class="btn btn-outline-primary-2 btn-order btn-block">TELECHARGER UN DEVIS</router-link>
	                			</div><!-- End .summary -->

		            			
	                		</aside><!-- End .col-lg-3 -->
	                	</div><!-- End .row -->
	                </div><!-- End .container -->
                </div><!-- End .cart -->
            </div><!-- End .page-content -->
        </main><!-- End .main -->
</template>
<style scoped>
.price-col {
	font-weight: bold;
}
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
/* Media query */
@media screen and (max-width: 768px) {}
@media screen and (max-width: 991px) {
	.page-content {
    padding: 17px;
}
	.table-mobile tr {
    margin-bottom: 20px;
	border: 1px solid #eef0f2;
	padding-bottom: 1rem;
}
.table-mobile {
    border: none;
}
.table td {
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.remove-col {
	border: none;
}
.cart-bottom {
	align-items: normal;
}
.cart-discount .btn {
    min-width: 51px;
}
.icon-close {
    background: #38aaf9;
    padding: 3px;
    border-radius: 50%;
    color: white;
    margin-bottom: 10px;
}
}
</style>