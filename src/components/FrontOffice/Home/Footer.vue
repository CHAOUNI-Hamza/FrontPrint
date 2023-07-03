<template>
    <footer class="footer">
            <div class="cta bg-image bg-dark pt-4 pb-5 mb-0" style="background-image: url('https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg');">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-10 col-md-8 col-lg-6">
                            <div class="cta-heading text-center">
                                <h3 class="cta-title text-white">Inscrivez-vous à notre Newsletter. </h3><!-- End .cta-title -->
                                <p class="cta-desc text-white"><span class="font-weight-normal">recevez toutes les nouveautés</span></p><!-- End .cta-desc -->
                            </div><!-- End .text-center -->
                        
                            <form action="#">
                                <div class="input-group input-group-round">
                                    <input type="email" class="form-control form-control-white" placeholder="Entrez votre adresse email" aria-label="Email Adress" required>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit"><span>S'abonner</span><i class="icon-long-arrow-right"></i></button>
                                    </div><!-- .End .input-group-append -->
                                </div><!-- .End .input-group -->
                            </form>
                        </div><!-- End .col-sm-10 col-md-8 col-lg-6 -->
                    </div><!-- End .row -->
                </div><!-- End .container -->
            </div><!-- End .cta -->
        	<div class="footer-middle">
	            <div class="container">
	            	<div class="row">
	            		<div class="col-sm-6 col-lg-3">
	            			<div class="widget widget-about">
	            				<img src="data:image/png;base64,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" class="footer-logo" alt="Footer Logo" width="105" height="25">
	            				<p>Boostez votre entreprise avec les solutions d'imprimerie haut de gamme Exprint</p>

	            				<div class="widget-call">
                                    <i class="icon-phone"></i>
                                    Vous avez une question ? Appelez-nous 24h/24 et 7j/7
                                    <a href="tel:#">+212 6 55 72 81 55</a>         
                                </div><!-- End .widget-call -->
	            			</div><!-- End .widget about-widget -->
	            		</div><!-- End .col-sm-6 col-lg-3 -->

	            		<div class="col-sm-6 col-lg-3">
	            			<div class="widget">
	            				<h4 class="widget-title">Identité</h4><!-- End .widget-title -->

	            				<ul class="widget-list">
	            					<li><a href="about.html">Qui sommes-nous ?</a></li>
                                    <li><a href="#">Nos engagements</a></li>
	            					<li><a href="faq.html">Partenaires création</a></li>
	            					<li><a href="contact.html">Communauté ExPrint</a></li>
	            				</ul><!-- End .widget-list -->
	            			</div><!-- End .widget -->
	            		</div><!-- End .col-sm-6 col-lg-3 -->

	            		<div class="col-sm-6 col-lg-3">
	            			<div class="widget">
	            				<h4 class="widget-title">Informations</h4><!-- End .widget-title -->

	            				<ul class="widget-list">
	            					<li><a href="#">Blog</a></li>
	            					<li><a href="#">F.A.Q</a></li>
	            					<li><a href="#">Guide d'impression</a></li>
	            					<li><a href="#">Sample box</a></li>
	            					<li><a href="#">Contact</a></li>
	            				</ul><!-- End .widget-list -->
	            			</div><!-- End .widget -->
	            		</div><!-- End .col-sm-6 col-lg-3 -->

	            		<div class="col-sm-6 col-lg-3">
	            			<div class="widget">
	            				<h4 class="widget-title">Profile</h4><!-- End .widget-title -->

	            				<ul class="widget-list">
	            					<li><a href="#" style="font-size: 30px;"><i class="icon-facebook mr-4"></i><i class="icon-twitter mr-4"></i><i class="icon-youtube"></i></a></li>
	            					<li><a href="#" style="font-size: 30px;"><i class="icon-linkedin mr-4"></i><i class="icon-instagram"></i></a></li>
	            				</ul><!-- End .widget-list -->
	            			</div><!-- End .widget -->
	            		</div><!-- End .col-sm-6 col-lg-3 -->
	            	</div><!-- End .row -->
	            </div><!-- End .container -->
	        </div><!-- End .footer-middle -->

	        <div class="footer-bottom">
	        	<div class="container">
	        		<p class="footer-copyright">Copyright © 2023 EX PRINT. All Rights Reserved.</p><!-- End .footer-copyright -->
	        		<figure class="footer-payments">
	        			<img src="https://www.pngmart.com/files/7/Payment-Background-PNG.png" style="max-width: 51%;" alt="Payment methods" width="272" height="20">
	        		</figure><!-- End .footer-payments -->
	        	</div><!-- End .container -->
	        </div><!-- End .footer-bottom -->
        </footer><!-- End .footer -->
</template>
<style scoped>
.footer {
    background-color: #f5f6f9;
    margin-top: 50px;
}
.footer .widget {
    text-align: left;
}
</style>