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
											<th>Prix</th>
											<th>Quantité</th>
											<th>Total</th>
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
											<td class="quantity-col">
                                                <div class="cart-product-quantity">
                                                    <input type="number" class="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required>
                                                </div><!-- End .cart-product-quantity -->
                                            </td>
											<td class="total-col">$84.00</td>
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
											<td class="quantity-col">
                                                <div class="cart-product-quantity">
                                                    <input type="number" class="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required>
                                                </div><!-- End .cart-product-quantity -->                                 
                                            </td>
											<td class="total-col">$76.00</td>
											<td class="remove-col"><button class="btn-remove"><i class="icon-close"></i></button></td>
										</tr>
									</tbody>
								</table><!-- End .table table-wishlist -->

	                			<div class="cart-bottom">
			            			<div class="cart-discount">
			            				<form action="#">
			            					<div class="input-group" style="height: 40px;">
				        						<input type="text" class="form-control" required placeholder="coupon code">
				        						<div class="input-group-append">
													<button class="btn btn-outline-primary-2" type="submit"><i class="icon-long-arrow-right"></i></button>
												</div><!-- .End .input-group-append -->
			        						</div><!-- End .input-group -->
			            				</form>
			            			</div><!-- End .cart-discount -->

			            			<a href="#" class="btn btn-outline-dark-2"><span>MISE À JOUR DU PANIER</span><i class="icon-refresh"></i></a>
		            			</div><!-- End .cart-bottom -->
	                		</div><!-- End .col-lg-9 -->
	                		<aside class="col-lg-3">
	                			<div class="summary summary-cart">
	                				<h3 class="summary-title">Total du panier</h3><!-- End .summary-title -->

	                				<table class="table table-summary">
	                					<tbody>
	                						<tr class="summary-subtotal">
	                							<td>Sous-total:</td>
	                							<td>$160.00</td>
	                						</tr><!-- End .summary-subtotal -->
	                						<tr class="summary-shipping">
	                							<td>Shipping:</td>
	                							<td>&nbsp;</td>
	                						</tr>

	                						<tr class="summary-shipping-row">
	                							<td>
													<div class="custom-control custom-radio">
														<input type="radio" id="free-shipping" name="shipping" class="custom-control-input">
														<label class="custom-control-label" for="free-shipping">Livraison gratuite</label>
													</div><!-- End .custom-control -->
	                							</td>
	                							<td>$0.00</td>
	                						</tr><!-- End .summary-shipping-row -->

	                						<tr class="summary-shipping-row">
	                							<td>
	                								<div class="custom-control custom-radio">
														<input type="radio" id="standart-shipping" name="shipping" class="custom-control-input">
														<label class="custom-control-label" for="standart-shipping">Standard:</label>
													</div><!-- End .custom-control -->
	                							</td>
	                							<td>$10.00</td>
	                						</tr><!-- End .summary-shipping-row -->

	                						<tr class="summary-shipping-row">
	                							<td>
	                								<div class="custom-control custom-radio">
														<input type="radio" id="express-shipping" name="shipping" class="custom-control-input">
														<label class="custom-control-label" for="express-shipping">Express:</label>
													</div><!-- End .custom-control -->
	                							</td>
	                							<td>$20.00</td>
	                						</tr><!-- End .summary-shipping-row -->

	                						<tr class="summary-shipping-estimate">
	                							<td>Estimation pour votre pays<br> <a href="dashboard.html">Modifier l'adresse</a></td>
	                							<td>&nbsp;</td>
	                						</tr><!-- End .summary-shipping-estimate -->

	                						<tr class="summary-total">
	                							<td>Total:</td>
	                							<td>$160.00</td>
	                						</tr><!-- End .summary-total -->
	                					</tbody>
	                				</table><!-- End .table table-summary -->

	                				<router-link :to="{ name: 'caisse' }" href="checkout.html" class="btn btn-outline-primary-2 btn-order btn-block">PASSER À LA CAISSE</router-link>
	                			</div><!-- End .summary -->

		            			<a href="category.html" class="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUER LES ACHATS</span><i class="icon-refresh"></i></a>
	                		</aside><!-- End .col-lg-3 -->
	                	</div><!-- End .row -->
	                </div><!-- End .container -->
                </div><!-- End .cart -->
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
</style>