<template>
    <div class="container new-arrivals pt-5">
                <div class="heading heading-flex mb-3">
                    <div class="heading-left">
                        <h2 class="title">Paramètre</h2><!-- End .title -->
                    </div><!-- End .heading-left -->

                   <div class="heading-right">
                        <ul class="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab" role="tab" aria-controls="new-all-tab" aria-selected="true">PROFILE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="new-tv-link" data-toggle="tab" href="#new-tv-tab" role="tab" aria-controls="new-tv-tab" aria-selected="false">MOT DE PASSE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="new-computers-link" data-toggle="tab" href="#new-computers-tab" role="tab" aria-controls="new-computers-tab" aria-selected="false">MES ADRESSES</a>
                            </li>
                        </ul>
                   </div><!-- End .heading-right -->
                </div><!-- End .heading -->

                <div class="tab-content tab-content-carousel just-action-icons-sm">
                    <div class="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
                        <form>
                            <div class="row justify-content-center" style="text-align: left;">
                                <div class="col-md-5">
                                    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Prénom</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Deuxième prénom</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nom</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nom d’utilisateur</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Titre</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">ICE</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>

  <button type="submit" class="btn btn-outline-primary-2">
    <span>Mise à jour</span>
    <i class="icon-long-arrow-right"></i>
  </button>
                                </div>
                                <div class="col-md-5">
                                    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Téléphone</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Téléphone portable</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Fax</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Fuseaux horaires</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Site Web</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
                                </div>
                            </div>

</form>
                    </div><!-- .End .tab-pane -->
                    <div class="tab-pane p-0 fade" id="new-tv-tab" role="tabpanel" aria-labelledby="new-tv-link">
                        <form>
                            <div class="row justify-content-center" style="text-align: left;">
                                 <div class="col-md-6">
                                    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Mot de passe actuel</label>
    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nouveau mot de passe</label>
    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Confirmer le mot de passe</label>
    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>

  <button type="submit" class="btn btn-outline-primary-2">
    <span>Mise à jour</span>
    <i class="icon-long-arrow-right"></i>
  </button>
                                 </div>   
                               
                            </div>

</form>
                    </div><!-- .End .tab-pane -->
                    <div class="tab-pane p-0 fade" id="new-computers-tab" role="tabpanel" aria-labelledby="new-computers-link">
                        <form action="">
                            <div class="row">
                            <div class="col-md-8"></div>
                            <div class="col-md-4">
                                <a href="#signin-modal" data-toggle="modal" type="submit" class="btn btn-outline-primary-2">
    <span>Ajouter une nouvelle adresse</span>
    <i class="fa fa-plus" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                            <div class="row container p-5">
                                <div class="col-md-4">
                                    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Adresse principale</h5>
    <p class="card-text">
        <ul class="settingsAddress list-unstyled">
                    <li><span>Nom complet : </span> hamza   chaouni </li>
                    
                    
                    <li><span>Adresse 1 :</span> rue jbel hebri hay nacer</li>
                    
                    
                    <li><span>Ville :</span> Sale,  Rabat-Salé-Kénitra   </li>
                    
                    <li><span>Téléphone :</span> 0655728155</li> 
                    
                    
                    <li><span>Email :</span> chaounihamza19@gmail.com</li> 
                </ul>
    </p>
    <a href="#" class="card-link btn btn-outline-primary-2">Modifier</a>
  </div>
</div>
                                </div>
                            </div>
                        
                        </form>
                    </div><!-- .End .tab-pane -->
                </div><!-- End .tab-content -->
            </div><!-- End .container -->
            <div class="container download-pdf p-5 mt-5" style="background: #3399ff14;">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center">
                        <h2 class="title mb-2">Découvrez les secrets de l'impression par excellence en téléchargeant notre guide exclusif !</h2>
                        <div class="content">
                            <img  width="100%" src="https://baymedia.com.au/wp-content/uploads/2020/07/catalogue-png-3.png" alt="">
                            <p class="mb-2">suivez les conseils et astuces de notre guide gratuit</p>
                            <a href="category.html" class="btn btn-primary btn-round">
                                <span>EN SAVOIR PLUS</span>
                                <i class="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
</template>
<style scoped>
.nav.nav-pills .nav-item.show .nav-link, .nav.nav-pills .nav-item .nav-link.active {
    color: #fff;
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
form {
    border: 1px solid #0000001f;
    padding: 60px 0;
    margin: 30px 0;
}
.btn-outline-primary-2 {
    color: #c96;
    background-color: transparent;
    background-image: none;
    border-color: #c96;
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
    min-width: 170px;
    border-radius: 0;
    white-space: normal;
    transition: all 0.3s;
}

.card-body {
    text-align: left;
}
.card-text span {
    font-weight: 500;
}
.card-title {
    float: left;
    font-size: 1.7rem;
    font-weight: 400;
    margin: 0;
    background: #39f;
    padding: 6px;
    color: white;
    margin-bottom: 10px;
    width: 100%;
}
</style>