<template>
    <main class="main">
        	<div class="page-header text-center" style="background-image: url('https://www.olivierchristinat.com/sites/default/files/styles/large/public/photos/_mg_7578-modifier.jpg?itok=qdDie4iu')">
        		<div class="container">
        			<h1 class="page-title">Caisse<span>Shop</span></h1>
        		</div><!-- End .container -->
        	</div><!-- End .page-header -->
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Caisse</li>
                    </ol>
                </div><!-- End .container -->
            </nav><!-- End .breadcrumb-nav -->

            <div class="page-content">
            	<div class="checkout">
	                <div class="container">
            			<div class="checkout-discount">
            				<form action="#">
        						<input type="text" class="form-control" required id="checkout-discount-input">
            					<label for="checkout-discount-input" class="text-truncate">Avez-vous un coupon ? <span>Cliquez ici pour entrer votre code</span></label>
            				</form>
            			</div><!-- End .checkout-discount -->
            			<form action="#">
		                	<div class="row">
		                		<div class="col-lg-9" style="text-align: left;">
		                			<h2 class="checkout-title">Détails de facturation</h2><!-- End .checkout-title -->
		                				<div class="row">
		                					<div class="col-sm-6">
		                						<label>Prénom *</label>
		                						<input type="text" class="form-control" required>
		                					</div><!-- End .col-sm-6 -->

		                					<div class="col-sm-6">
		                						<label>Nom *</label>
		                						<input type="text" class="form-control" required>
		                					</div><!-- End .col-sm-6 -->
		                				</div><!-- End .row -->

	            						<label>Nom de l'entreprise (facultatif)</label>
	            						<input type="text" class="form-control">

	            						<label>Pays</label>
	            						<input type="text" class="form-control" required>

	            						<label>Adresse postale</label>
	            						<input type="text" class="form-control" placeholder="House number and Street name" required>
	            						<input type="text" class="form-control" placeholder="Appartments, suite, unit etc ..." required>

	            						<div class="row">
		                					<div class="col-sm-6">
		                						<label>Ville</label>
		                						<input type="text" class="form-control" required>
		                					</div><!-- End .col-sm-6 -->

		                					<div class="col-sm-6">
		                						<label>État / Comté *</label>
		                						<input type="text" class="form-control" required>
		                					</div><!-- End .col-sm-6 -->
		                				</div><!-- End .row -->

		                				<div class="row">
		                					<div class="col-sm-6">
		                						<label>Code postal / ZIP</label>
		                						<input type="text" class="form-control" required>
		                					</div><!-- End .col-sm-6 -->

		                					<div class="col-sm-6">
		                						<label>Téléphone</label>
		                						<input type="tel" class="form-control" required>
		                					</div><!-- End .col-sm-6 -->
		                				</div><!-- End .row -->

	                					<label>Adresse e-mail</label>
	        							<input type="email" class="form-control" required>

	        							<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="checkout-create-acc">
											<label class="custom-control-label" for="checkout-create-acc">Créer un compte ?</label>
										</div><!-- End .custom-checkbox -->

										<div class="custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="checkout-diff-address">
											<label class="custom-control-label" for="checkout-diff-address">Expédier vers une adresse différente ?</label>
										</div><!-- End .custom-checkbox -->

	                					<label>Notes de commande (facultatif)</label>
	        							<textarea class="form-control" cols="30" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
		                		</div><!-- End .col-lg-9 -->
		                		<aside class="col-lg-3">
		                			<div class="summary">
		                				<h3 class="summary-title">Votre commande</h3><!-- End .summary-title -->

		                				<table class="table table-summary">
		                					<thead>
		                						<tr>
		                							<th>Produit</th>
		                							<th>Total</th>
		                						</tr>
		                					</thead>

		                					<tbody>
		                						<tr>
		                							<td><a href="#">Chaussures de running élastiques tricotées de couleur beige</a></td>
		                							<td>$84.00</td>
		                						</tr>

		                						<tr>
		                							<td><a href="#">Chaussures de running élastiques tricotées de couleur beige</a></td>
		                							<td>$76,00</td>
		                						</tr>
		                						<tr class="summary-subtotal">
		                							<td>Sous-total:</td>
		                							<td>$160.00</td>
		                						</tr><!-- End .summary-subtotal -->
		                						<tr>
		                							<td>Livraison:</td>
		                							<td>Free shipping</td>
		                						</tr>
		                						<tr class="summary-total">
		                							<td>Total:</td>
		                							<td>$160.00</td>
		                						</tr><!-- End .summary-total -->
		                					</tbody>
		                				</table><!-- End .table table-summary -->

		                				<div class="accordion-summary" id="accordion-payment">
										    <div class="card">
										        <div class="card-header" id="heading-1">
										            <h2 class="card-title">
										                <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
										                    Virement bancaire direct
										                </a>
										            </h2>
										        </div><!-- End .card-header -->
										        <div id="collapse-1" class="collapse show" aria-labelledby="heading-1" data-parent="#accordion-payment">
										            <div class="card-body">
										                Effectuez votre paiement directement sur notre compte bancaire. Veuillez utiliser votre ID de commande comme référence de paiement. Votre commande ne sera pas expédiée tant que les fonds n'auront pas été crédités sur notre compte.
										            </div><!-- End .card-body -->
										        </div><!-- End .collapse -->
										    </div><!-- End .card -->

										    <div class="card">
										        <div class="card-header" id="heading-2">
										            <h2 class="card-title">
										                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
										                    Paiements par chèque
										                </a>
										            </h2>
										        </div><!-- End .card-header -->
										        <div id="collapse-2" class="collapse" aria-labelledby="heading-2" data-parent="#accordion-payment">
										            <div class="card-body">
										                Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. 
										            </div><!-- End .card-body -->
										        </div><!-- End .collapse -->
										    </div><!-- End .card -->

										    <div class="card">
										        <div class="card-header" id="heading-3">
										            <h2 class="card-title">
										                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
										                    Paiement à la livraison
										                </a>
										            </h2>
										        </div><!-- End .card-header -->
										        <div id="collapse-3" class="collapse" aria-labelledby="heading-3" data-parent="#accordion-payment">
										            <div class="card-body">Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
										            </div><!-- End .card-body -->
										        </div><!-- End .collapse -->
										    </div><!-- End .card -->

										    <div class="card">
										        <div class="card-header" id="heading-4">
										            <h2 class="card-title">
										                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
										                    PayPal <small class="float-right paypal-link">Qu'est-ce que PayPal ?</small>
										                </a>
										            </h2>
										        </div><!-- End .card-header -->
										        <div id="collapse-4" class="collapse" aria-labelledby="heading-4" data-parent="#accordion-payment">
										            <div class="card-body">
										                Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
										            </div><!-- End .card-body -->
										        </div><!-- End .collapse -->
										    </div><!-- End .card -->

										    <div class="card">
										        <div class="card-header" id="heading-5">
										            <h2 class="card-title">
										                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
										                    Credit Card (Stripe)
										                    <img src="https://www.pngmart.com/files/7/Payment-Background-PNG.png" alt="payments cards">
										                </a>
										            </h2>
										        </div><!-- End .card-header -->
										        <div id="collapse-5" class="collapse" aria-labelledby="heading-5" data-parent="#accordion-payment">
										            <div class="card-body"> Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.
										            </div><!-- End .card-body -->
										        </div><!-- End .collapse -->
										    </div><!-- End .card -->
										</div><!-- End .accordion -->

		                				<button type="submit" class="btn btn-outline-primary-2 btn-order btn-block">
		                					<span class="btn-text">Passer la commande</span>
		                					<span class="btn-hover-text">Passer à la caisse</span>
		                				</button>
		                			</div><!-- End .summary -->
		                		</aside><!-- End .col-lg-3 -->
		                	</div><!-- End .row -->
            			</form>
	                </div><!-- End .container -->
                </div><!-- End .checkout -->
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


.table.table-summary a {
    font-size: 12px;
}
.table.table-summary tbody td {
    font-size: 13px;
}

.custom-control-label::before {
    left: 0;
    top: 0.3rem;
    width: 1.6rem;
    height: 1.6rem;
    background-color: #f9f9f9;
    border: 1px solid #dadada;
    box-shadow: none !important;
}
.custom-control-label {
    position: static;
    margin-bottom: 0;
    margin-top: 0.1rem;
    font-size: 1.4rem;
    padding-left: 3.6rem;
    margin-left: -2.6rem;
}
.custom-checkbox .custom-control-label::after {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
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


</style>