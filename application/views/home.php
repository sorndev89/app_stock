<html lang="en"><head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>App Stock Admin</title>
    <!-- base:css -->
    <link rel="stylesheet" href="<?php echo base_url("vendors/mdi/css/materialdesignicons.min.css");?>">
    <link rel="stylesheet" href="<?php echo base_url("vendors/flag-icon-css/css/flag-icon.min.css");?>">
    <link rel="stylesheet" href="<?php echo base_url("vendors/css/vendor.bundle.base.css");?>">
    <!-- endinject -->
    <!-- plugin css for this page -->
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="<?php echo base_url("css/vertical-layout-light/style.css");?>"> 
    <link rel="stylesheet" href="<?php echo base_url("css/vertical-layout-light/sweetalert2.min.css");?>">
    <link rel="stylesheet" href="<?php echo base_url("vendors/font-awesome/css/font-awesome.min.css");?>"/>
    
    <!-- endinject -->
    <link rel="shortcut icon" href="<?php echo base_url("images/sorndev.jpg");?>">
  </head>
  
  <body>
      <!--- ແຖບໂລດດີ້ງ....  -->
      <div class='loading-page'> <div class="dot-opacity-loader lp"> <span></span> <span></span> <span></span> </div> </div>
      <!--- ແຖບໂລດດີ້ງ....  -->
    <div class="container-scroller">
      <!-- partial:../../partials/_navbar.html -->
      <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center text-primary">
          <strong>SornDev</strong>
          
          <!--- 
          <a class="navbar-brand brand-logo" href="../../index.html"><img src="<?php echo base_url("images/logo_sorndev.svg");?>" alt="logo"></a>
          <a class="navbar-brand brand-logo-mini" href="../../index.html"><img src="<?php echo base_url("images/sorndev.jpg");?>" alt="logo"></a>-->
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class="mdi mdi-menu"></span>
          </button>
          <ul class="navbar-nav navbar-nav-left">
            <li class="nav-item d-none d-lg-block">
              <a href="#" class="nav-link"><p>Sales</p></a>
            </li>
            <li class="nav-item d-none d-lg-block">
              <a href="#" class="nav-link"><p>Purchases</p></a>
            </li>
            <li class="nav-item d-none d-lg-block">
              <a href="#" class="nav-link"><p>My status</p></a>
            </li>
          </ul>
          <ul class="navbar-nav navbar-nav-right">
           
           
           
           
            
            <li class="nav-item nav-profile dropdown">
              <a class="nav-link" href="#" data-toggle="dropdown" id="profileDropdown">
                <img src="images/faces/face5.jpg" alt="profile">
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <a class="dropdown-item">
                  <i class="mdi mdi-settings text-primary"></i>
                  Settings
                </a>
                <a class="dropdown-item">
                  <i class="mdi mdi-logout text-primary"></i>
                  Logout
                </a>
              </div>
            </li>
            
            
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
       

        
        <!-- partial -->
        <!-- partial:../../partials/_sidebar.html -->
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <div class="sidebar-profile">
            <div class="d-flex align-items-center justify-content-between">
              <img src="images/faces/face5.jpg" alt="profile">
              <div class="profile-desc">
                <p class="name mb-0">Admin SornDev</p>
                <p class="designation mb-0">Status: Admin</p>
              </div>
            </div>
          </div>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#dashboard">
                <i class="mdi mdi-shield-half-full menu-icon"></i>
                <span class="menu-title">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#manager_user">
                <i class="mdi mdi-puzzle menu-icon"></i>
                <span class="menu-title">ຈັດການ ຜູ້ໃຊ້</span>
              </a>
            </li>
            
            
          
            
            
            <li class="nav-item">
              <a class="nav-link" href="#manager_stock">
                <i class="mdi mdi-image menu-icon"></i>
                <span class="menu-title">ຈັດການ ສະຕ໋ອກ</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#report">
                <i class="mdi mdi-file-document-box-outline menu-icon"></i>
                <span class="menu-title">ລາຍງານ</span>
              </a>
            </li>
          </ul>
        </nav>
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper main_body">

          
          






              

          </div>
          <!-- content-wrapper ends -->
          <!-- partial:../../partials/_footer.html -->
          <footer class="footer">
            <div class="d-sm-flex justify-content-center justify-content-sm-between">
              <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2020 App Stock Develop By SornDev. All rights reserved.</span>
              <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with <i class="mdi mdi-heart text-danger"></i></span>
            </div>
          </footer>
          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- base:js -->
    
    <script src="<?php echo base_url("vendors/js/vendor.bundle.base.js");?>"></script> 
    
    <!-- endinject -->
    <!-- Plugin js for this page-->
    <!-- End plugin js for this page-->
    <!-- inject:js --> 
    <script src="<?php echo base_url("js/sweetalert2.min.js");?>"></script>
    <script src="<?php echo base_url("js/off-canvas.js");?>"></script>
    <script src="<?php echo base_url("js/hoverable-collapse.js");?>"></script>
    <script src="<?php echo base_url("js/template.js");?>"></script>
    <script src="<?php echo base_url("js/settings.js");?>"></script>
    <script src="<?php echo base_url("js/todolist.js");?>"></script>
    <script src="<?php echo base_url("js/app.js?v=").time();?>"></script>
    <script src="<?php echo base_url("js/router_app.js?v=").time();?>"></script>
    
    <!-- endinject -->
    <!-- plugin js for this page -->
    <!-- End plugin js for this page -->
    <!-- Custom js for this page-->
    <!-- End custom js for this page-->
  
  </body></html>