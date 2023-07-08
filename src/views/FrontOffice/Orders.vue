<template>
    <div class="orders container pt-5">
      <div class="content">
        <form action="">
          <div class="row">
            <div class="col-md-3 col-sm-6 text-left">
              <label for="">Date de début</label>
              <input
                data-v-7dea8cf2=""
                type="date"
                class="form-control"
                placeholder=""
              />
            </div>
            <div class="col-md-3 col-sm-6 text-left">
              <label for="">Date de fin</label>
              <input
                data-v-7dea8cf2=""
                type="date"
                class="form-control"
                placeholder=""
              />
            </div>
            <div class="col-md-3 col-sm-6 text-left">
              <label for="">État de la commande</label>
              <input
                data-v-7dea8cf2=""
                type="date"
                class="form-control"
                placeholder=""
              />
            </div>
            <div class="col-md-3 col-sm-6 text-left">
              <label for="">Recherche</label>
              <input
                data-v-7dea8cf2=""
                type="text"
                class="form-control"
                placeholder="Recherche..."
              />
            </div>
          </div>
        </form>
        <form action="">
          <div class="row">
            <div class="col-md-3 col-sm-6"></div>
            <div class="col-md-3 col-sm-6">
              <button class="btn btn-table">Développer tout</button>
            </div>
            <div class="col-md-3 col-sm-6">
              <button class="btn btn-table">
                <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                Export excel
              </button>
            </div>
            <div class="col-md-3 col-sm-6 text-left">
              <button class="btn btn-table">
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                Export pdf
              </button>
            </div>
          </div>
        </form>
        <div class="div-table">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Paiement</th>
                <th scope="col">Numéro de commande</th>
                <th scope="col">Date de la commande</th>
                <th scope="col">Commandé par</th>
                <th scope="col">Total H.T</th>
                <th scope="col">T.V.A.</th>
                <th scope="col">Frais de port</th>
                <th scope="col">Promo Discount</th>
                <th scope="col">Total</th>
                <th scope="col">Bon de commande</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in 20" :key="item">
                <th class="num" scope="row">{{ item }}</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">00.00 DH</th>
                <th scope="col">00.00 DH</th>
                <th scope="col">00.00 DH</th>
                <th scope="col">00.00 DH</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .orders {
    margin-top: 40px;
  }
  
  .content {
    border: 1px solid #0000001c;
    padding: 2rem;
  }
  
  .btn-table {
    border: 1px solid #3399ff;
    border-radius: 0;
    width: 100%;
    padding: 10px;
    font-size: 12px;
    color: #3399ff;
    margin-bottom: 5px;
    transition: 0.2s;
  }
  
  .btn-table:hover {
    background: #3399ff;
    color: white;
  }
  
  .div-table {
    position: relative;
    overflow: auto;
    white-space: nowrap;
  }
  
  .table thead th {
    color: white;
  }
  
  .table thead tr {
    background-color: #3399ff;
  }
  
  .table .num {
    background: var(--warning);
    color: white;
  }
  
  .table {
    margin-top: 10px;
  }
  
  .table td,
  .table th {
    padding: 1.75rem 0.75rem;
  }
  
  .table thead th {
    border-bottom: none;
  }
  
  @media (min-width: 768px) {
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
  </style>









<!--
    <template>
    <div class="orders container pt-5">
        <div class="content">
            <form action="">
            <div class="row">
            <div class="col-md-3 text-left">
                <label for="">Date de début</label>
                <input data-v-7dea8cf2="" type="date" class="form-control" placeholder="">
            </div>
            <div class="col-md-3 text-left">
                <label for="">Date de fin</label>
                <input data-v-7dea8cf2="" type="date" class="form-control" placeholder="">
            </div>
            <div class="col-md-3 text-left">
                <label for="">État de la commande</label>
                <input data-v-7dea8cf2="" type="date" class="form-control" placeholder="">
            </div>
            <div class="col-md-3 text-left">
                <label for="">Recherche</label>
                <input data-v-7dea8cf2="" type="text" class="form-control" placeholder="Recherche...">
            </div>
        </div>
        </form>
        <form action="">
            <div class="row">
                <div class="col-md-3">
            </div>
            <div class="col-md-3">
                <button class="btn btn-table">Développer tout</button>
            </div>
            <div class="col-md-3">
                
                <button class="btn btn-table">
                    <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                    Export excel
                </button>
            </div>
            <div class="col-md-3 text-left">
                
                <button class="btn btn-table">
                    <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                    Export pdf
                </button>
            </div>
        </div>
        </form>
        <div class="div-table">
            <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Paiement</th>
          <th scope="col">Numéro de commande</th>
          <th scope="col">Date de la commande</th>
          <th scope="col">Commandé par</th>
          <th scope="col">Total H.T</th>
          <th scope="col">T.V.A.</th>
          <th scope="col">Frais de port</th>
          <th scope="col">Promo Discount</th>
          <th scope="col">Total</th>
          <th scope="col">Bon de commande</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in 20">
          <th class="num" scope="row">{{ item }}</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">00.00 DH</th>
          <th scope="col">00.00 DH</th>
          <th scope="col">00.00 DH</th>
          <th scope="col">00.00 DH</th>
        </tr>
      </thead>
    </table>
        </div>
        </div>
    
    
    </div>
    </template>
    <style>
    .orders {
        
        margin-top: 40px;
    }
    .content {
        border: 1px solid #0000001c;
        padding: 65px;
    }
    .btn-table {
        border: 1px solid #3399ff;
        border-radius: 0;
        width: 100%;
        padding: 10px;
        font-size: 12px;
        color: #3399ff;
        margin-bottom: 5px;
        transition: .2s;
    }
    .btn-table:hover {
        background: #3399ff;
        color: white;
    }
    .div-table {
        position: relative;
      overflow: auto;
      white-space: nowrap;
    }
    .table thead th {
        color: white;
    }
    .table thead tr {
        background-color: #3399ff;
    }
    .table .num {
        background: var(--warning);
        color: white;
    }
    .container {
        max-width: 1248px;
    }
    .table {
        margin-top: 10px;
    }
    .table td, .table th {
        padding: 1.75rem 0.75rem;
    }
    .table thead th {
        border-bottom: none;
    }
    </style>
-->