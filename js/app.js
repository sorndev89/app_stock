
function app_dashboard(all_data)
{
    var bordy = '<div class="row p-4"> <div class="col-12 col-sm-6 col-md-3 grid-margin stretch-card"> <div class="card icon-card-primary"> <div class="card-body"> <div class="d-flex align-items-center"> <div class="icon mb-0 mb-md-2 mb-xl-0 mr-2"> <i class="mdi mdi-account-box"></i> </div> <p class="font-weight-medium mb-0">ສະມາຊິກ ທັງໝົດ</p> </div> <div class="d-flex align-items-center mt-3 flex-wrap"> <h3 class="font-weight-normal mb-0 mr-2">59467</h3> <div class="badge badge-outline-light badge-pill mt-md-2 mt-xl-0"> <div class="d-flex align-items-baseline"> <span class="mr-2">High</span> <span class="mb-0">311</span> <span class="mdi mdi-arrow-up"></span> </div> </div> </div> <small class="font-weight-medium d-block mt-2">Total for this month</small> </div> </div> </div> <div class="col-12 col-sm-6 col-md-3 grid-margin stretch-card"> <div class="card icon-card-success"> <div class="card-body"> <div class="d-flex align-items-center"> <div class="icon mb-0 mb-md-2 mb-xl-0 mr-2"> <i class="mdi mdi-basket"></i> </div> <p class="font-weight-medium mb-0">ລາຍການ ສິນຄ້າທັງໝົດ</p> </div> <div class="d-flex align-items-center mt-3 flex-wrap"> <h3 class="font-weight-normal mb-0 mr-2">28085</h3> <div class="badge badge-outline-light badge-pill mt-md-2 mt-xl-0"> <div class="d-flex align-items-baseline"> <span class="mr-2">High</span> <span class="mb-0">2.98</span> <span class="mdi mdi-arrow-up"></span> </div> </div> </div> <small class="font-weight-medium d-block mt-2">Total for this month</small> </div> </div> </div> </div>';
    $('.main_body').html(bordy);
    
    var intrvl = setInterval(function () {
        $('.loading-page').hide();
         clearInterval(intrvl);
     }, 800);
    
}

function app_manager_user(all_data)  /// ພັງຊັ່ນ ສະແດງໜ້າຈັດການ ຜູ້ໃຊ້ -------------------------------
{
    // ປະກາດຕົວແປ ທີ່ໃຊ້ເກັບໂຄດ HTML ຂອງໜ້າຈັດການຜູ້ໃຊ້ ທັງໝົດ
var body = ' <div class="col-md-12 col-lg-12 grid-margin stretch-card mt-2"> <div class="card f-user"> <div class="card-body"> <div class="d-flex align-items-start justify-content-between mb-4"> <p class="card-title flex-grow"> <i class="mdi mdi-account-card-details"></i> ລາຍການ ຊື່ຜູ້ໃຊ້ </p> <div class="dropdown dropright card-menu-dropdown"> <button type="button" class="btn btn-primary btn-rounded btn-icon bt-add-user" > <i class="mdi mdi-account-plus"></i> </button> </div> </div> <div class="table-responsive"> <table class="table"> <thead> <tr> <th class="pl-0 pt-0 text-center">#</th> <th class="pt-0">ລາຍຊື່ຜູ້ໃຊ້</th> <th class="pt-0">ລາຍລະອຽດ</th> <th class="pt-0 text-center">ຈັດການ</th> </tr> </thead> <tbody class="body-list-user"> <tr> <td>5</td> <td class="pl-0"> <div class="d-flex"> <img class="img-sm rounded-circle" src="images/faces/face1.jpg" alt="profile" /> <div class="ml-3"> WMQ61947 <p class="smaller-text mb-0 mt-2 text-muted">05 Apr 2019</p> </div> </div> </td> <td class="pr-0"> <div class="d-flex justify-content-between align-items-center"> <label class="badge badge-outline-success mr-4 mr-xl-2" >Completed</label > </div> </td> <td class="text-center"> <button type="button" class="btn btn-success btn-rounded btn-icon" > <i class="mdi mdi-border-color"></i> </button> <button type="button" class="btn btn-danger btn-rounded btn-icon" > <i class="mdi mdi-delete"></i> </button> </td> </tr> <tr> <td>6</td> <td class="pl-0"> <div class="d-flex"> <img class="img-sm rounded-circle" src="images/faces/face5.jpg" alt="profile" /> <div class="ml-3"> WMQ37027 <p class="smaller-text mb-0 mt-2 text-muted">07 Sep 2019</p> </div> </div> </td> <td class="pr-0"> <div class="d-flex justify-content-between align-items-center"> <label class="badge badge-outline-success mr-4 mr-xl-2" >Completed</label > </div> </td> <td class="text-center"> <button type="button" class="btn btn-success btn-rounded btn-icon" > <i class="mdi mdi-border-color"></i> </button> <button type="button" class="btn btn-danger btn-rounded btn-icon" > <i class="mdi mdi-delete"></i> </button> </td> </tr> </tbody> </table> </div> <div class="d-flex justify-content-between align-items-center flex-wrap mt-2" > <nav> <ul class="pagination flex-wrap pagination-flat pagination-success"> <li class="page-item"> <a class="page-link hover-cursor back-page" ><i class="mdi mdi-chevron-left"></i ></a> </li> <li class="page-item active"> <a class="page-link cerrent-page">1</a> </li> <li class="page-item"> <a class="page-link hover-cursor next-page" ><i class="mdi mdi-chevron-right"></i ></a> </li> </ul> </nav> <p class="text-muted mt-3 mb-0 ml-3 ml-md-0 d-none d-md-block sh-page-de" > Showing 6 out of 100 </p> </div> </div> </div> <div class="card f-form" style="display: none;"> <div class="card-body"> <div class="d-flex align-items-start justify-content-between mb-4"> <p class="card-title flex-grow"> <i class="mdi mdi-account-plus"></i> ຟອມເພີ່ມສະມາຊິກໃໝ່ </p> <div class="dropdown dropright card-menu-dropdown"> <button type="button" class="btn btn-success btn-rounded btn-icon bt-back" > <i class="mdi mdi-keyboard-backspace"></i> </button> </div> </div> <div class="row"> <div class="col-md-6 text-center"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right">ຮູບຜູ້ໃຊ້:</label> <div class="col-sm-9 text-left hover-cursor bt-up-img"> <i class="mdi mdi-plus-circle text-danger add-pic-user" style="font-size: 40px;" ></i> </div> <form enctype="multipart/form-data" id="user_images_form"> <input type="file" name="file_upload" id="file_upload" style="display: none;" /> </form> </div> </div> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right">ຊື່ຜູ້ໃຊ້:</label> <div class="col-sm-9"> <input type="text" class="form-control f-user-name" /> </div> </div> </div> </div> <div class="row"> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right">User ID:</label> <div class="col-sm-9 "> <input type="text" class="form-control f-user-id" /> </div> </div> </div> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right" >ເພດ:</label > <div class="col-sm-9"> <select class="form-control f-user-sex"> <option value="ທ່ານ">ຊາຍ</option> <option value="ທ່ານ ນ">ຍິງ</option> </select> </div> </div> </div> </div> <div class="row"> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right">ລະຫັດຜ່ານ:</label> <div class="col-sm-9"> <input type="password" class="form-control f-user-pass1" /> </div> </div> </div> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right" >ປະເພດຜູ້ໃຊ້:</label > <div class="col-sm-9"> <select class="form-control f-user-type"> <option value="user">User</option> <option value="admin">Admin</option> </select> </div> </div> </div> </div> <div class="row"> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right" >ຍຶນຍັນລະຫັດຜ່ານ:</label > <div class="col-sm-9"> <input type="password" class="form-control f-user-pass2" /> </div> </div> </div> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right"> ສະຖານະຜູ້ໃຊ້: </label> <div class="col-sm-9"> <select class="form-control f-user-status"> <option value="active"> ໃຊ້ງານຢູ່ </option> <option value="inactive"> ຍຸດນຳໃຊ້ </option> </select> </div> </div> </div> </div> <div class="row justify-content-center"> <button disabled type="button" class="btn btn-success btn-rounded btn-fw f-bt-save" > <i class="mdi mdi-content-save"></i> ບັນທຶກຂໍ້ມູນ </button> </div> <div class="sh_error mt-2"></div> </div> </div></div> ';

    $('.main_body').html(body);  /// ນຳ HTML ມາສະແດງຜົນໃນ Class .main_body ໃນໜ້າຫຼັກ

    // ເມື່ອມີການຄຼິກປຸ່ມ ເພີ່ມຜູ້ໃຊ້ ໃຫ້ປິດການສະແດງລາຍການ ຜູ້ໃຊ້ ແລະສະແດງຟອມເພີ່ມຜູ້ໃຊ້ມາແທນ
    $('.bt-add-user').click(function (e) { 
        e.preventDefault();
        $('.f-user').hide(); // ເຊື່ອງລາຍການຜູ້ໃຊ້ ເຊີ່ງລາຍການຜູ້ໃຊ້ຈະຢູ່ໃນ Class .f-user
        $('.f-form').show(); // ສະແດງຟອມ ເພີ່ມຜູ້ໃຊ້ ເຊີ່ງຟອມຈະຢູ່ໃນ Class .f-form
        $('.f-bt-save').html('<i class="mdi mdi-content-save"></i> ບັນທຶກຂໍ້ມູນ');
        $('.sh_error').html('');
        $('.f-user-name').val('');
        $('.f-user-id').val('');
        $('.f-user-type').val('user');
        $('.f-user-pass1').val('');
        $('.f-user-pass2').val('');
        $('.f-user-status').val('active');
        $('.f-user-id').attr('disabled', false);
        user.form_action = 'add_user';
        user.form_images = '';
        $('.bt-up-img').html('<i class="mdi mdi-plus-circle text-danger add-pic-user" style="font-size: 40px;" ></i>');
        /// ຟັງຊັ່ນ set time ຫລັງຈາກ ຜູ້ໃຊ້ກົດປຸ່ມເພີ່ມ ຜູ້ໃຊ້ ຟັນຊັ່ນນີ້ຈະເລີ່ມນັບ ປະມານ 1 ວິນາທີ ແລ້ວໂຟກັດ ໄປທີ່ຊ່ອງຟອມ ຊື່ຜູ້ໃຊ້
        var intrvl = setInterval(function () {
            $('.f-user-name:first').focus(); /// ໂຟກັບໄປຊ່ອງຟອມ ຊື່ຜູ້ໃຊ້
            clearInterval(intrvl);
        }, 800); /// ນັບເວລາ 

        
    });
    
    // ເມື່ອຄຼິກປຸ່ມກັບຄືນ ໃນໜ້າຟອມ ຈະສະແດງລາຍການຜູ້ໃຊ້ ແລະເຊື່ອມຟອມເພີ່ມຜູ້ໃຊ້
    $('.bt-back').click(function (e) { 
        e.preventDefault();
        $('.f-user').show(); // ສະແດງລາຍການຜູ້ໃຊ້
        $('.f-form').hide(); // ເຊື່ອງຟອມ
    });

    /// ສ້າງ Object ເກັບຂໍ້ມູນ ໃນໜ້າຈັດການຜູ້ໃຊ້ ============================
    var user = {
        form_action:'',
        form_images:'',
        form_edit_id:'',
        list_user:'',
        per_page:'',
        all_page:'',
        max_list:'5',
        cerrent_page:'',
        go_page: function(go_page) /// ຟັງຊັ່ນດືງລາຍການຜູ້ໃຊ້
        {
            /// ajax ໂພດສ໌ ບັນທຶກຂໍ້ມູນໄປ Server
            $.ajax({ 
                url: url + 'index.php/' + 'main/get_data',  /// ທີ່ຢູ່ຂອງການ ໂພດສ໌
                type: "POST",  /// ປະເພດການສົ່ງຂໍ້ມູນແບບ ໂພດສ໌
                data: {        /// ຂໍ້ມູນທີ່ຈະຖຶກສົ່ງໄປ
                    post_type:'get_all_user',  //// ຕົວແປ ພ້ອມຄ່າ ທີ່ຖຶກສົ່ງໄປ
                    go_page:go_page,
                    max_list:user.max_list
                }, 
                timeout: 120000,  /// ກຳນົດເວລາໃນການສົ່ງ
                success: function(data) {  /// ເມື່ອໂພດສ໌ ສຳເລັດຈະເກັບຂໍ້ມູນກັບມາ ໄວ້ໃນຕົວແປ data
                    //console.log('Add Data OK!!');
                   // console.log(data)

                    var gen_data = data.split('|X|');
                    user.list_user = gen_data[0];
                    user.all_page = Math.ceil(gen_data[1] / user.max_list);
                    user.cerrent_page = go_page;
                    user.render();
                },
                error: function(jqXHR, textStatus, errorThrown) {  //// ຫາກການໂພດສ໌ບໍ່ສຳເລັດ ໃຫ້ເກັບສະຖານະໃສ່ໂຕແປໃນວົງເລັບ
                    if (textStatus === "timeout" || textStatus === "error")  /// ການໂພດສ໌ບໍ່ສຳເລັດ ສະຖານະຢູ່ໂຕແປ textStatus ຫາກມີຄ່າເປັນ timeou ຫລື error ໃຫ້ເຮັດວຽກໃນຄຳສັ່ງນີ້
                    {  
                        console.log('Network Error');                          
                    }
                 }
            });
        },
        render: function() /// ຟັງຊັ່ນ render ລາຍການຜູ້ໃຊ້
        {
            /// ຖ້າໂຕແປໃນ cerrent_page(ໜ້າປະຈຸບັນ) ໃນ object User ເທົ່າກັບຄ່າຫວ່າງ ໃຫ້ຕົວແປ num = 1
            if( user.cerrent_page == ''){  
                var num = 1;
             }
             else{
                var num = user.cerrent_page;
             }

            var num_start = (parseInt(num)-1)*parseInt(user.max_list); /// ຄຳນວນລຳດັບຂອງ User
            $('.body-list-user').html('');  // ກຳນົດໃຫ້ຕາຕະລາງມີໂຄດ html ເປັນຫວ່າງເພື່ອຈະຂຽນ html ຂໍ້ມູນເຂົ້າໃໝ່
            var list_user_db = JSON.parse(user.list_user);  // ດືງຂໍ້ມູນຈາກ object JSON 
            $.each(list_user_db, function (index, value) {  /// ຟັງຊັ່ນດືງຂໍ້ມູນຈາກ JSON Array 
                if(value.user_images !='')  /// ກວດຊອບຮູບພາບຂອງ ຜູ້ໃຊ້
                { 
                    var user_images = value.user_images; 
                } 
                else 
                { 
                    var user_images = 'no_pice.jpg'; 
                }
                
                num_start++; /// ເພີ່ມຄ່າລຳດັບ
                //// ນຳຂໍ້ມູນໄປສະແດງຜົນ
                 $('.body-list-user').append('<tr> <td style="width:60px">'+num_start+'</td> <td class="pl-0"> <div class="d-flex"> <img class="img-sm rounded-circle" src="'+url+'images/profile/'+user_images+'" alt="profile"> <div class="ml-3"> '+value.user_sex +' '+ value.user_name+' <p class="smaller-text mb-0 mt-2 text-muted">User ID: '+value.user_id+'</p> </div> </div> </td> <td class="pr-0" style="width:120px"> <div class="d-flex justify-content-between align-items-center detail-user" data="'+value.id+'"> <label class="badge badge-outline-success mr-4 mr-xl-2 hover-cursor"><i class="mdi mdi-account-card-details"></i> ລາຍລະອຽດ</label> </div> </td> <td class="text-center" style="width:120px"> <button type="button" class="btn btn-success btn-rounded btn-icon edit-user" data="'+value.id+'"> <i class="mdi mdi-border-color"></i> </button> <button type="button" class="btn btn-danger btn-rounded btn-icon del-user" data="'+value.id+'"> <i class="mdi mdi-delete"></i> </button> </td> </tr>');
                 
            });

            /// ອັບເດດ ຂໍ້ມູນຈຳນວນໜ້າ
            $('.cerrent-page').html(user.cerrent_page);
            $('.sh-page-de').html('ສະແດງໜ້າທີ: '+user.cerrent_page+' ຈາກທັງໝົດ: '+user.all_page+' ໜ້າ');




            //// ================================= ເມື່ອ user ກົດປຸ້ມແກ້ໄຂ ============================
            $('.edit-user').click(function (e) { 
                e.preventDefault();
                var id = $(this).attr('data');
                var user_data = JSON.parse(user.list_user); 
                $.each(user_data, function (index, value) {  /// ນຳເຂໍ້ມູນທີ່ຕ້ອງການແກ້ໄຂ ມາສະແດງຜົນ
                     if(value.id == id){
                        $('.f-user-name').val(value.user_name);
                        $('.f-user-id').val(value.user_id);
                        $('.f-user-id').attr('disabled', true);
                        $('.f-user-type').val(value.user_type);
                        $('.f-user-sex').val(value.user_sex);
                        $('.f-user-pass1').val('');
                        $('.f-user-pass2').val('');
                        $('.f-user-status').val(value.user_status);
                        user.form_images = '';
                        if(value.user_images !=''){ $('.bt-up-img').html('<img class="img-sm rounded-circle" src="'+url+'images/profile/'+value.user_images+'" alt="profile">'); }
                        else { $('.bt-up-img').html('<i class="mdi mdi-plus-circle text-danger add-pic-user" style="font-size: 40px;" ></i>'); }
                     }
                });
                $('.sh_error').html(''); // ປິດຂໍ້ຄວາມແຈ້ງເຕືອນ
                $('.f-user').hide(); // ເຊື່ອງລາຍການຜູ້ໃຊ້ ເຊີ່ງລາຍການຜູ້ໃຊ້ຈະຢູ່ໃນ Class .f-user
                $('.f-form').show(); // ສະແດງຟອມ ເພີ່ມຜູ້ໃຊ້ ເຊີ່ງຟອມຈະຢູ່ໃນ Class .f-form
                $('.f-bt-save').html('<i class="mdi mdi-content-save"></i> ບັນທຶກຂໍ້ມູນ');
                
                user.form_action = 'update_user';  /// ກຳນົດຕົວແປໃຫ້ຮູ້ ສະຖານະຂອງຟອມແມ່ນການແກ້ໄຂ ອັບເດດ
                user.form_edit_id = id;  /// id ຂອງຜູ້ໃຊ້ທີ່ແກ້ໄຂ
                
                
                /// ຟັງຊັ່ນ set time ຫລັງຈາກ ຜູ້ໃຊ້ກົດປຸ່ມເພີ່ມ ຜູ້ໃຊ້ ຟັນຊັ່ນນີ້ຈະເລີ່ມນັບ ປະມານ 1 ວິນາທີ ແລ້ວໂຟກັດ ໄປທີ່ຊ່ອງຟອມ ຊື່ຜູ້ໃຊ້
                var intrvl = setInterval(function () {
                    $('.f-user-name:first').focus(); /// ໂຟກັບໄປຊ່ອງຟອມ ຊື່ຜູ້ໃຊ້
                    clearInterval(intrvl);
                }, 800); /// ນັບເວລາ 
            });   ////================================  ຈົບການຄຼິກປຸ່ມແກ້ໄຂ  =============================




            //// ===================================== ເມື່ອກົດປຸ້ມລຶບ ຜູ້ໃຊ້ ================================
            $('.del-user').click(function (e) { 
                e.preventDefault();
                var id = $(this).attr('data');
                /// ແຈ້ງເຕືອນຂໍຍືນຍັນ
                Swal.fire({
                    title: 'ທ່ານແນ່ໃຈບໍ່ ທີ່ຈະລຶບຂໍ້ມູນນີ້?',
                    text: "ແນ່ໃຈໃຫ້ກົດ ຍຶນຍັນ, ບໍ່ແນ່ໃຈໃຫ້ກົດ ຍົກເລີກ!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: ' <i class="mdi mdi-delete"></i> ຍຶນຍັນ!',
                    cancelButtonText: ' <i class="mdi mdi-close-circle"></i> ຍົກເລີກ'
                  }).then((result) => {
                      
                    if(result.value==true){ /// ຜູ້ໃຊ້ກົດ ຍືນຍັນລຶບ
                        $.ajax({ 
                            url: url + 'index.php/' + 'main/mg_data',  /// ທີ່ຢູ່ຂອງການ ໂພດສ໌
                            type: "POST",  /// ປະເພດການສົ່ງຂໍ້ມູນແບບ ໂພດສ໌
                            data: {        /// ຂໍ້ມູນທີ່ຈະຖຶກສົ່ງໄປ
                                post_type:'delete_user',  //// ຕົວແປ ພ້ອມຄ່າ ທີ່ຖຶກສົ່ງໄປ
                                id:id,
                                go_page:'1',
                                max_list:user.max_list
                            }, 
                            timeout: 120000,  /// ກຳນົດເວລາໃນການສົ່ງ
                            success: function(data) {  /// ເມື່ອໂພດສ໌ ສຳເລັດຈະເກັບຂໍ້ມູນກັບມາ ໄວ້ໃນຕົວແປ data
                               
                                //// ເມື່ອລຶບສຳເລັດໃຫ້ເອົາຂໍ້ມູນທີ່ອັບເດດ ກັບມາສະແດງຜົນ 
                                var gen_data = data.split('|X|');
                                if(gen_data[2]=='ok'){ //// ຖ້າຂໍ້ມູນຖຶກລຶບສຳເລັດ ==========
                                    user.list_user = gen_data[0];
                                    user.all_page = Math.ceil(gen_data[1] / user.max_list);
                                    user.cerrent_page = '1';
                                    user.render(); //// ເຮນເດີ້ ຂໍ້ມູນໃໝ່
    
                                    if (result.value) {
                                        Swal.fire(
                                          'ລຶບສຳເລັດ!',
                                          'ຂໍ້ມູນໄດ້ຖຶກລຶບອອກແລ້ວ.',
                                          'success'
                                        )
                                      }
                                }
                                else   //// ຖ້າການລຶບຂໍ້ມູນບໍ່ສຳເລັດ ===========
                                {
                                    if (result.value) {
                                        Swal.fire(
                                          'ລະບົບບໍ່ສາມາດລຶບໄດ້!',
                                          'ການເຊື່ອມຕໍ່ຫາ Server ຂັດຂ້ອງ, ກະລຸນາລອງໃໝ່!.',
                                          'error'
                                        )
                                      }
                                }
                            },
                            error: function(jqXHR, textStatus, errorThrown) {  //// ຫາກການໂພດສ໌ບໍ່ສຳເລັດ ໃຫ້ເກັບສະຖານະໃສ່ໂຕແປໃນວົງເລັບ
                                if (textStatus === "timeout" || textStatus === "error")  /// ການໂພດສ໌ບໍ່ສຳເລັດ ສະຖານະຢູ່ໂຕແປ textStatus ຫາກມີຄ່າເປັນ timeou ຫລື error ໃຫ້ເຮັດວຽກໃນຄຳສັ່ງນີ້
                                {  
                                    console.log('Network Error');    
                                    /// ລະບົບເຊື່ອມຕໍ່ມີບັນຫາ ============
                                    if (result.value) {
                                        Swal.fire(
                                          'ລະບົບບໍ່ສາມາດລຶບໄດ້!',
                                          'ການເຊື່ອມຕໍ່ຫາ Server ຂັດຂ້ອງ, ກະລຸນາລອງໃໝ່!.',
                                          'error'
                                        )
                                      }
                                }
                             }
                        });
                    } /// ຈົບກົດຍືນຍັນ
                  })
                  // ຈົບແຈ້ງເຕືອນ 
            }); /// ===========================================  ຈົບການກົດ ລຶບ  =======================




            /// ======================================= ສະແດງລາຍລະອຽດ ຜູ້ໃຊ້  ============================
            $('.detail-user').click(function (e) { 
                e.preventDefault();
                var id = $(this).attr('data');

                var user_data = JSON.parse(user.list_user);
                $.each(user_data, function (index, value) { 
                     if(value.id == id){
                        if(value.user_images != ''){ var img = value.user_images; } else { var img = 'no_pice.jpg'; }
                        Swal.fire({
                            title: '<strong>ຂໍ້ມູນສະມາຊິກຜູ້ໃຊ້</strong>',
                            html:
                            '<div class="col-md-12"> <div class="border-bottom text-center pb-4"> <img src="'+url+'images/profile/'+img+'" alt="profile" class="img-lg rounded-circle mb-3" /> <div class="mb-3"> <h3>'+value.user_sex+' '+value.user_name+'</h3> <div class="d-flex align-items-center justify-content-center"> <h5 class="mb-0 mr-2 text-muted">User ID: '+value.user_id+'</h5> </div> </div> <div class="d-flex col-md-12">ປະເພດຜູ້ໃຊ້: '+value.user_type+'</div> <div class="d-flex col-md-12">ສະຖານະ: '+value.user_status+'</div> </div> </div>'
                          });

                    }
                });

                
                
            }); //// =============================== ຈົບການສະແດງລາຍລະອຽດ ==================================

            
        }
      };  

    /// ================ ກົດປຸ່ມ ກັບລາຍການ =========
    $('.back-page').click(function (e) { 
        e.preventDefault();
        if(user.cerrent_page != '1'){
            var go_p = parseInt(user.cerrent_page)-1;
            user.go_page(go_p);
        }
    }); ///===================================



    /// ================= ກົດປຸ່ມລາຍການຕໍ່ໄປ ============
    $('.next-page').click(function (e) { 
        e.preventDefault();
        if(user.cerrent_page != user.all_page)
        {
            var go_p = parseInt(user.cerrent_page)+1;
            user.go_page(go_p);
        }
    }); ///===============================



      /// ================================================

      


      // =========================== ເມື່ອຜູ້ໃຊ້ປ້ອນຂໍ້ມູນໃນແຕ່ລະແບບຟອມ ໃຫ້ເອີ້ນຫາຟັງຊັ່ນກວດຂໍ້ມູນຂອງຟອມ ===============
      $('.f-user-name').keyup(function (e) { 
        check_form(); /// ໃຫ້ກວດຊອບຟອມ
      });

      $('.f-user-id').keyup(function (e) { 
        check_form(); /// ໃຫ້ກວດຊອບຟອມ
      });

      $('.f-user-pass1').keyup(function (e) { 
        check_form(); /// ໃຫ້ກວດຊອບຟອມ
      });

      $('.f-user-pass2').keyup(function (e) { 
        check_form(); /// ໃຫ້ກວດຊອບຟອມ
      });

      $('.f-user-type').change(function (e) { 
          e.preventDefault();
          check_form(); /// ໃຫ້ກວດຊອບຟອມ
      });

      $('.f-user-sex').change(function (e) { 
        e.preventDefault();
        check_form(); /// ໃຫ້ກວດຊອບຟອມ
    });

      $('.f-user-status').change(function (e) { 
        e.preventDefault();
        check_form(); /// ໃຫ້ກວດຊອບຟອມ
      });
      //// =====================================================================
      

        ///========================================== ຟັງຊັ່ນ ກວດຊອບຟອມ ຂໍ້ມູນ ====================================
        function check_form()
        {
            /// ປະກາດຕົວແປ ເກັບຂໍ້ມູນໃນແຕ່ລະຊ່ອງ ຂອງຟອມ
            var user_name = $('.f-user-name').val();
            var user_id = $('.f-user-id').val();
            var user_type = $('.f-user-type').val();
            var user_sex = $('.f-user-sex').val();
            var user_pass1 = $('.f-user-pass1').val();
            var user_pass2 = $('.f-user-pass2').val();
            var user_status = $('.f-user-status').val();

            var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,sum;  /// ປະກາດຕົວແປ ເກັບຂໍ້ມູນສົມທຽບ

            if(user_name != ''){ a=1; } else {a=0;} // ຖ້າຂໍ້ມູນທີ່ປ້ອມມີຄ່າ ໃຫ້ຕົວແປ a = 1 ຖ້າບໍ່ມີຄ່າ a = 0
            if(user_id != ''){ b=1; } else {b=0;}
            if(user_type != ''){ c=1; } else {c=0;}
            if(user_pass1 != ''){ e=1; } else {e=0;}
            if(user_status != ''){ f=1; } else {f=0;}
            if(user_pass2 != ''){ g=1; } else {g=0;}
            if(user_sex != ''){ h=1; } else {h=0;}

            /// ກວດຊອບເມື່ອມີການອັບເດດ
            if(user.form_action == 'update_user')
            {
                if(user_pass1 == '' && user_pass2 == '')
                {
                    e=1; g=1;
                }
                else{
                    if(user_pass1 != ''){ e=1; } else {e=0;}
                    if(user_pass2 != ''){ g=1; } else {g=0;}
                }
            }
            /// ຈົບການກວດຊອບ ຕາມເງື່ອນໄຂ ອັບເດດ
            sum = a+b+c+d+e+f+g+h; /// ລວມຍອດສົມທຽບ

            if(sum == 7){ /// ຖ້າແຕ່ລະຊ່ອງຂໍ້ມູນມີ່ຄ່າ ຈະບວກເທົ່າກັບ 5
                $('.f-bt-save').attr("disabled", false); /// ຖ້າຍອດສົມທຽບເທົ່າກັບ 5 ປຸ່ມບັນທຶກໃຫ້ສາມາດກົດໄດ້
            }
            else{
                $('.f-bt-save').attr("disabled", true); // ຖ້າຂໍ້ມູນສົມທຽບ ບໍ່ຮອດ 5 ປຸ່ມບັນທຶກ ຈະບໍ່ສາມາດກົດໄດ້
            }

        }
        /// ====================================  ຈົບຟັງຊັ່ນກວດຂໍ້ມູນໃນຟອມ ====================================

        /// ເມື່ອຄຼກຮູບ ເຄື່ອງໝາຍບວກ ເພື່ອອັບໂຫລດຮູບພາບ 
        $('.bt-up-img').click(function (e) { 
            e.preventDefault();
            $('#file_upload').click();
            
        });
        
        //// ເມື່ອເລືອກຮູບແລ້ວ ໃຫ້ຟອມ ສົ່ງຂໍ້ມູນໄປເລີຍ
        $('#file_upload').change(function (e) { 
            e.preventDefault();
            $('#user_images_form').submit();
        });

        // =========================================== ຟັງຊັ່ນອັບໂຫລດຮູບພາບ =====================================================================
        /// upload
    $('#user_images_form').on("submit", function (event) { //af++;
        /// ສະແດງສະຖານະ ເວລາອັບໂຫລດ
        check_form(); //// ເອີ້ນຟັງຊັ່ນເຊັກຟອມ
        $('.bt-up-img').html('<i class="fa fa-spin fa-refresh text-danger add-pic-user" style="font-size: 40px;" ></i>');
        var ftype = "'image/png','image/jpeg'";
        // console.log(used_data.file_size);
        event.preventDefault();
        var proceed = true;
        var max_file_size = 5000 * 1024; //allowed file size. (1 MB = 1048576)
        var result_output = '.sh_error'; //ID of an element for response output
        var shimg = '.sh_img';
        var form = '#user_images_form';
        var proceed = true;
        var allowed_file_types = ftype;
        var error = [];
        $(result_output).html('');
        // alert(max_file_size);

        $(this.elements['file_upload'].files).each(function (i, ifile) {
            if (ifile.value !== "") { 
                if (allowed_file_types.indexOf(ifile.type) === -1) { //check unsupported file
                    $('.bt-up-img').html('<i class="mdi mdi-plus-circle text-danger add-pic-user" style="font-size: 40px;" ></i>'); 
                    error.push('<div class="alert alert-fill-warning" role="alert"> <i class="mdi mdi-alert-circle"></i> ໄຟລ໌ທີ່ທ່ານເລືອກ ' + ifile.name + ' ບໍ່ແມ່ນໄຟລ໌ອະນຸຍາດໃຫ້ອັບໂຫລດ!</div>');
                    proceed = false; //set proceed flag to false
                } 
                total_files_size = ifile.size; //add file size to total size
            }
        });
        if (total_files_size > max_file_size) {
            $('.bt-up-img').html('<i class="mdi mdi-plus-circle text-danger add-pic-user" style="font-size: 40px;" ></i>'); 
            error.push('<div class="alert alert-fill-warning" role="alert"> <i class="mdi mdi-alert-circle"></i> ໄຟລ໌ທີ່ທ່ານເລືອກມີຂະໜາດ ' + formatSizeUnits(total_files_size) + ', ລະບົບອະນຸຍາດໃຫ້ອັບໂຫລດ ' + formatSizeUnits(max_file_size) + '. </div>');
            proceed = false; //set proceed flag to false
        } 

        if (proceed) {
            $(".upload-bar").css("width 0%");
            $('.upload-bar').slideDown('slow');
            $(this.elements['file_upload'].files).each(function (i, ifile) { });
            
            $.ajax({
                url: url + 'index.php/' + 'main/upload_file',
                type: "POST",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                xhr: function () {
                    //upload Progress
                    var xhr = $.ajaxSettings.xhr();
                    if (xhr.upload) {
                        xhr.upload.addEventListener('progress', function (event) {
                            var percent = 0;
                            var position = event.loaded || event.position;
                            var total = event.total;
                            if (event.lengthComputable) {
                                percent = Math.ceil(position / total * 100);
                            }
                            //$(".up-bar").css("width", +percent + "%");
                        }, true);
                    }
                    return xhr;
                },
                mimeType: "multipart/form-data"
            }).done(function (res) { //
                $(form)[0].reset();

              
                if (res == 'no_upload') {
                    $('.bt-up-img').html('<i class="mdi mdi-plus-circle text-danger add-pic-user" style="font-size: 40px;" ></i>'); 
                    $('.sh_error').html('<div class="alert alert-fill-warning" role="alert"> <i class="mdi mdi-alert-circle"></i> ການອັບໂຫລດຂໍໍ້ມູນບໍ່ສຳເລັດ! <br> - ຖານຂໍ້ມູນຜິດຜາດ. <br> - ບໍ່ມີ Folder ອັບໂຫລ. </div>');
                } else {
                    /// yes good
                    $('.bt-up-img').html('<img class="img-sm rounded-circle" src="'+url+'images/profile/'+res+'" alt="profile">');
                   user.form_images = res;
                }
            });
        } else { } /// if no up

        $(error).each(function (i) { //output any error to output element
            $(".img-profile").attr("src", url+"images/users.png");
            $(result_output).append('<div class="error">' + error[i] + "</div>");
        });
    });
    /// end upload
    /// ============================================= ຈົບຟັງຊັ່ນອັບໂຫລດ =====================================================================

  





        ////================================================ ເມື່ອຂໍ້ມູນຄົບຖ້ວນ ປຸ່ມບັນທຶກຈະສາມາດກົດໄດ້ ແລະເມື່ອຜູ້ໃຊ້ກົດບັນທຶກ ==================================
        $('.f-bt-save').click(function (e) { 
            e.preventDefault();
            
            $('.f-bt-save').html('<i class="fa fa-spin fa-refresh"></i>');
            $('.f-bt-save').attr("disabled", true);  /// ປິດປຸ່ມກົດ
            /// ປະກາດຕົວແປ ເກັບຂໍ້ມູນໃນແຕ່ລະຊ່ອງ ຂອງຟອມ
            var user_name = $('.f-user-name').val();
            var user_id = $('.f-user-id').val();
            var user_type = $('.f-user-type').val();
            var user_sex = $('.f-user-sex').val();
            var user_pass1 = $('.f-user-pass1').val();
            var user_pass2 = $('.f-user-pass2').val();
            var user_status = $('.f-user-status').val();
            var user_images = user.form_images;
            var id = user.form_edit_id;
            var check_id = false; /// ປະກສດຕົວແປ ກຳນົດການກວດຊອບ ID
            
            if(user.form_action=='add_user'){   //// ຖ້າສະຖານະຂອງຟອມແມ່ນການ ເພີ່ມຜູ້ໃຊ້ໃໝ່ ໃຫ້ເຮັດການຮ້ອງຂໍໄປ Server ເພື່ອກວດຊອບ User ID ບໍ່ໃຫ້ຊ້ຳກັນ
                //// ໂພດຂໍ້ມູນ ID ໄປກວດຊອບໃນຖານຂໍ້ມູນ 
                /// ajax ໂພດສ໌ ບັນທຶກຂໍ້ມູນໄປ Server
                $.ajax({ 
                    url: url + 'index.php/' + 'main/mg_data',  /// ທີ່ຢູ່ຂອງການ ໂພດສ໌
                    type: "POST",  /// ປະເພດການສົ່ງຂໍ້ມູນແບບ ໂພດສ໌
                    data: {        /// ຂໍ້ມູນທີ່ຈະຖຶກສົ່ງໄປ
                        post_type:'check_user_id',  //// ຕົວແປ ພ້ອມຄ່າ ທີ່ຖຶກສົ່ງໄປ
                        user_id:user_id
                    }, 
                    timeout: 120000,  /// ກຳນົດເວລາໃນການສົ່ງ
                    success: function(data) {  /// ເມື່ອໂພດສ໌ ສຳເລັດຈະເກັບຂໍ້ມູນກັບມາ ໄວ້ໃນຕົວແປ data
                        
                        if(data=='true'){ check_id = true; } // ຖ້າຕົວແປ data ອອກມາເປັນ true ໃຫ້ໂຕແປ check_id ມີຄ່າເປັນ true
                        go_post_data(); /// ເອີ້ນໃຊ້ ຟັງຊັ້ນກວດຂໍ້ມູນຕໍ່ໄປ 
                    },
                    error: function(jqXHR, textStatus, errorThrown) {  //// ຫາກການໂພດສ໌ບໍ່ສຳເລັດ ໃຫ້ເກັບສະຖານະໃສ່ໂຕແປໃນວົງເລັບ
                        if (textStatus === "timeout" || textStatus === "error")  /// ການໂພດສ໌ບໍ່ສຳເລັດ ສະຖານະຢູ່ໂຕແປ textStatus ຫາກມີຄ່າເປັນ timeou ຫລື error ໃຫ້ເຮັດວຽກໃນຄຳສັ່ງນີ້
                        {  
                            console.log('Network Error');  
                            
                        }
                    }
                }); //// ຈົບການໂພດສ໌ ຂໍເມູນ 
            }
            else /// ຖ້າບໍ່ແມ່ນການເພີ່ມ ຜູ້ໃຊ້ໃໝ່ໃຫ້ຍົກເລີກການກວດຊອບ ID
            {
                check_id = true; /// ຖ້າເປັນການອັບເດດຂໍ້ມູນ ID ບໍ່ໃຫ້ມີການກວດຊອບ
                go_post_data(); /// ເອີ້ນໃຊ້ ຟັງຊັ້ນກວດຂໍ້ມູນຕໍ່ໄປ 
            }
            
            
        function go_post_data() /// ຟັງຊັ່ນບັນທຶກຂໍ້ມູນ
        {
            
           
            if(!check_id)  /// ຖ້າຕົວແປ Check_id ມີຄ່າບໍ່ເປັນ true ໃຫ້ຍອດການກວດຊອບ 
                {
                    $('.f-bt-save').html('<i class="mdi mdi-content-save"></i> ບັນທຶກຂໍ້ມູນ');
                    $('.sh_error').html('<div class="alert alert-fill-warning" role="alert"> <i class="mdi mdi-alert-circle"></i> User ID ທີ່ທ່ານປ້ອນຊ້ຳກັນໃນຖານຂໍ້ມູນ! ກະລຸນາກວດຊອບຄືນ. </div>');
                }
            else{


                    if(user_pass1 != user_pass2){  /// ຖ້າລະຫັດຜ່ານ ທັງສອງບໍ່ຕົງກັນ ໃຫ້ຍຸດການກວດຊອບ
                        $('.f-bt-save').html('<i class="mdi mdi-content-save"></i> ບັນທຶກຂໍ້ມູນ');
                        $('.sh_error').html('<div class="alert alert-fill-warning" role="alert"> <i class="mdi mdi-alert-circle"></i> ລະຫັດຜ່ານບໍ່ຕົງກັນ! ກະລຸນາກວດຊອບຄືນ. </div>');
                        
                    }
                    else
                    {
                        $('.sh_error').html('');
                        $('.f-bt-save').html('<i class="fa fa-spin fa-refresh"></i>');
                        $('.f-bt-save').attr("disabled", true);


                        var user_pass = user_pass1;
                        if(user.form_action == 'add_user'){ var new_go_page = 'last' } else { var new_go_page = user.cerrent_page } 
                        //console.log(new_go_page);
                        /// ajax ໂພດສ໌ ບັນທຶກຂໍ້ມູນໄປ Server ເພື່ອບັນທຶກຂໍ້ມູນ
                        $.ajax({ 
                            url: url + 'index.php/' + 'main/mg_data',  /// ທີ່ຢູ່ຂອງການ ໂພດສ໌
                            type: "POST",  /// ປະເພດການສົ່ງຂໍ້ມູນແບບ ໂພດສ໌
                            data: {        /// ຂໍ້ມູນທີ່ຈະຖຶກສົ່ງໄປ
                                post_type:'add_update_user',  //// ຕົວແປ ພ້ອມຄ່າ ທີ່ຖຶກສົ່ງໄປ
                                id:id,
                                user_name:user_name,
                                user_id:user_id,
                                user_pass:user_pass,
                                user_type:user_type,
                                user_sex:user_sex,
                                user_status:user_status,
                                user_images:user_images,
                                form_action:user.form_action,
                                go_page:new_go_page,
                                max_list:user.max_list
                            }, 
                            timeout: 120000,  /// ກຳນົດເວລາໃນການສົ່ງ
                            success: function(data) {  /// ເມື່ອໂພດສ໌ ສຳເລັດຈະເກັບຂໍ້ມູນກັບມາ ໄວ້ໃນຕົວແປ data
                                console.log('Add Data OK!!')
                                $('.sh_error').html('');
                                $('.f-user-name').val('');
                                $('.f-user-id').val('');
                                $('.f-user-type').val('user');
                                $('.f-user-pass1').val('');
                                $('.f-user-pass2').val('');
                                $('.f-user-status').val('active');
                                //$('.f-bt-save').html('<i class="mdi mdi-content-save"></i> ບັນທຶກຂໍ້ມູນ');
                                $('.f-user').show(); // ສະແດງລາຍການຜູ້ໃຊ້
                                $('.f-form').hide(); // ເຊື່ອງຟອມ
                               // console.log(data);
                                var gen_data = data.split('|X|');
                                user.list_user = gen_data[0];
                                user.all_page = Math.ceil(gen_data[1] / user.max_list);
                                if(user.form_action == 'add_user'){ user.cerrent_page = user.all_page; } 
                                
                                user.render(); /// ສະແດງຂໍ້ມູນໃໝ່

                            },
                            error: function(jqXHR, textStatus, errorThrown) {  //// ຫາກການໂພດສ໌ບໍ່ສຳເລັດ ໃຫ້ເກັບສະຖານະໃສ່ໂຕແປໃນວົງເລັບ
                                if (textStatus === "timeout" || textStatus === "error")  /// ການໂພດສ໌ບໍ່ສຳເລັດ ສະຖານະຢູ່ໂຕແປ textStatus ຫາກມີຄ່າເປັນ timeou ຫລື error ໃຫ້ເຮັດວຽກໃນຄຳສັ່ງນີ້
                                {  
                                    console.log('Network Error');  
                                    $('.f-bt-save').html('<i class="mdi mdi-content-save"></i> ບັນທຶກຂໍ້ມູນ');
                                    $('.sh_error').html('<div class="alert alert-fill-warning" role="alert"> <i class="mdi mdi-alert-circle"></i> ລະບົບເຄືອຂ່າຍຜິດຜາດ! ບໍ່ສາມາດເຊື່ອມຕໍ່ຫາ Server ໄດ້. </div>');
                                    
                                }
                            }
                        }); //// ຈົບການໂພດສ໌ ຂໍເມູນ 
                    }
                } /// ຈົບການກວດຊອບ user id

            } /// ຈົບຟັງຊັ່ນ check data
         
            
            
        });  ///=================================== ຈົບການຄຼິກປຸ່ມ ບັນທຶກ ================================

    
        user.go_page(1);  //// ເມື່ອໜ້າເວັບໂຫລດຂໍ້ມູນສຳເລັດ ໃຫ້ເອີ້ນຟັງຊັ່ນສະແດງໜ້າຂໍ້ມູນທຳອິດ

        //// ເມື່ອໂຫລດໜ້າເວັນແລ້ວ ໃຫ້ເຊື່ອມຮູບໂຫລດ
    var intrvl = setInterval(function () {
        $('.loading-page').hide(); 
         clearInterval(intrvl);
     }, 800);

} /// ຈົບ  ພັງຊັ່ນ ສະແດງໜ້າຈັດການ ຜູ້ໃຊ້ -------------------------------------------------------

function app_manager_stock(all_data) /// ພັງຊັ່ນ ສະແດງໜ້າຈັດການ ສະຕ໋ອກ -------------------------------
{
    // ປະກາດຕົວແປ ທີ່ໃຊ້ເກັບໂຄດ HTML ຂອງໜ້າຈັດການສະຕ໋ອກ ທັງໝົດ
var bordy = ' <div class="col-md-12 col-lg-12 grid-margin stretch-card mt-2"> <div class="card f-stock"> <div class="card-body"> <div class="d-flex align-items-start justify-content-between mb-4"> <p class="card-title flex-grow"> <i class="mdi mdi-book-open"></i> ລາຍການ ສິນຄ້າ </p> <div class="dropdown dropright card-menu-dropdown"> <button type="button" class="btn btn-primary btn-rounded btn-icon bt-add-product" > <i class="mdi mdi-hospital"></i> </button> </div> </div> <div class="table-responsive"> <table class="table"> <thead> <tr> <th class="pl-0 pt-0">#</th> <th class="pt-0">ລາຍການສິນຄ້າ</th> <th class="pt-0">ຮູບສິນຄ້າ</th> <th class="pt-0">ລາຄາສິນຄ້າ</th> <th class="pt-0 text-center">ຈັດການ</th> </tr> </thead> <tbody> <tr> <td>1</td> <td class="pl-0"> <div class="d-flex"> <div> WMQ96921 <p class="smaller-text mb-0 mt-2 text-muted">18 Sep 2019</p> </div> </div> </td> <td class="pr-0"> <div class="d-flex align-items-center"> <i class="mdi mdi-file-image hover-cursor text-danger" style="font-size: 30px;" ></i> </div> </td> <td class="pr-0"> <div class="d-flex align-items-center"> <label class="badge badge-outline-success mr-4 mr-xl-2" >150.000 ກີບ</label > </div> </td> <td class="text-center"> <button type="button" class="btn btn-success btn-rounded btn-icon" > <i class="mdi mdi-border-color"></i> </button> <button type="button" class="btn btn-danger btn-rounded btn-icon" > <i class="mdi mdi-delete"></i> </button> </td> </tr> <tr> <td>2</td> <td class="pl-0"> <div class="d-flex"> <div> WMQ96921 <p class="smaller-text mb-0 mt-2 text-muted">18 Sep 2019</p> </div> </div> </td> <td class="pr-0"> <div class="d-flex align-items-center"> <i class="mdi mdi-file-image hover-cursor text-danger" style="font-size: 30px;" ></i> </div> </td> <td class="pr-0"> <div class="d-flex align-items-center"> <label class="badge badge-outline-success mr-4 mr-xl-2" >150.000 ກີບ</label > </div> </td> <td class="text-center"> <button type="button" class="btn btn-success btn-rounded btn-icon" > <i class="mdi mdi-border-color"></i> </button> <button type="button" class="btn btn-danger btn-rounded btn-icon" > <i class="mdi mdi-delete"></i> </button> </td> </tr> <tr> <td>3</td> <td class="pl-0"> <div class="d-flex"> <div> WMQ96921 <p class="smaller-text mb-0 mt-2 text-muted">18 Sep 2019</p> </div> </div> </td> <td class="pr-0"> <div class="d-flex align-items-center"> <i class="mdi mdi-file-image hover-cursor text-danger" style="font-size: 30px;" ></i> </div> </td> <td class="pr-0"> <div class="d-flex align-items-center"> <label class="badge badge-outline-success mr-4 mr-xl-2" >150.000 ກີບ</label > </div> </td> <td class="text-center"> <button type="button" class="btn btn-success btn-rounded btn-icon" > <i class="mdi mdi-border-color"></i> </button> <button type="button" class="btn btn-danger btn-rounded btn-icon" > <i class="mdi mdi-delete"></i> </button> </td> </tr> <tr> <td>4</td> <td class="pl-0"> <div class="d-flex"> <div> WMQ96921 <p class="smaller-text mb-0 mt-2 text-muted">18 Sep 2019</p> </div> </div> </td> <td class="pr-0"> <div class="d-flex align-items-center"> <i class="mdi mdi-file-image hover-cursor text-danger" style="font-size: 30px;" ></i> </div> </td> <td class="pr-0"> <div class="d-flex align-items-center"> <label class="badge badge-outline-success mr-4 mr-xl-2" >150.000 ກີບ</label > </div> </td> <td class="text-center"> <button type="button" class="btn btn-success btn-rounded btn-icon" > <i class="mdi mdi-border-color"></i> </button> <button type="button" class="btn btn-danger btn-rounded btn-icon" > <i class="mdi mdi-delete"></i> </button> </td> </tr> </tbody> </table> </div> <div class="d-flex justify-content-between align-items-center flex-wrap mt-2" > <nav> <ul class="pagination flex-wrap pagination-flat pagination-success"> <li class="page-item"> <a class="page-link" href="#" ><i class="mdi mdi-chevron-left"></i ></a> </li> <li class="page-item active"> <a class="page-link" href="#">1</a> </li> <li class="page-item"><a class="page-link" href="#">2</a></li> <li class="page-item"><a class="page-link" href="#">3</a></li> <li class="page-item"><a class="page-link" href="#">4</a></li> <li class="page-item"> <a class="page-link" href="#" ><i class="mdi mdi-chevron-right"></i ></a> </li> </ul> </nav> <p class="text-muted mt-3 mb-0 ml-3 ml-md-0 d-none d-md-block"> Showing 6 out of 100 </p> </div> </div> </div> <div class="card f-form" style="display: none;"> <div class="card-body"> <div class="d-flex align-items-start justify-content-between mb-4"> <p class="card-title flex-grow"> <i class="mdi mdi-basket"></i> ຟອມເພີ່ມສິນຄ້າໃໝ່ </p> <div class="dropdown dropright card-menu-dropdown bt-back"> <button type="button" class="btn btn-success btn-rounded btn-icon"> <i class="mdi mdi-keyboard-backspace"></i> </button> </div> </div> <form class="form-sample"> <div class="row"> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right" >ຊື່ສິນຄ້າ:</label > <div class="col-sm-9"> <input type="text" class="form-control product_name" /> </div> </div> </div> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right">ລາຄາຊື້:</label> <div class="col-sm-9"> <input type="text" class="form-control product_price_buy" /> </div> </div> </div> </div> <div class="row"> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right ">ຈຳນວນ:</label> <div class="col-sm-9"> <input type="text" class="form-control product_amount" /> </div> </div> </div> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right">ລາຄາຂາຍ:</label> <div class="col-sm-9"> <input type="text" class="form-control product_price_sell" /> </div> </div> </div> </div> <div class="row"> <div class="col-md-6"> <div class="form-group row"> <label class="col-sm-3 col-form-label text-right" >ຮູບສິນຄ້າ:</label > <img class="img-sm rounded-circle" src="images/faces/face5.jpg" alt="profile" /> <img class="img-sm rounded-circle" src="images/faces/face5.jpg" alt="profile" /> <img class="img-sm rounded-circle" src="images/faces/face5.jpg" alt="profile" /> </div> </div> </div> <div class="row justify-content-center"> <button type="button" class="btn btn-success btn-rounded btn-fw bt-save-product" disabled> <i class="mdi mdi-content-save"></i> ບັນທຶກຂໍ້ມູນ </button> </div> </form> </div> </div> </div> ';

    
    $('.main_body').html(bordy); /// ນຳ HTML ມາສະແດງຜົນໃນ Class .main_body ໃນໜ້າຫຼັກ

    // ເມື່ອມີການຄຼິກປຸ່ມ ເພີ່ມສິນຄ້າ ໃຫ້ປິດການສະແດງລາຍການສິນຄ້າ ແລະສະແດງຟອມເພີ່ມສິນຄ້າໃຊ້ມາແທນ
    $('.bt-add-product').click(function (e) { 
        e.preventDefault();
        $('.f-stock').hide(); // ເຊື່ອງລາຍການສິນຄ້າ ເຊີ່ງລາຍການຜູ້ໃຊ້ຈະຢູ່ໃນ Class .f-stock
        $('.f-form').show(); // ສະແດງຟອມ ເພີ່ມສິນຄ້າ ເຊີ່ງຟອມຈະຢູ່ໃນ Class .f-form
         /// ຟັງຊັ່ນ set time ຫລັງຈາກ ຜູ້ໃຊ້ກົດປຸ່ມເພີ່ມ ຜູ້ໃຊ້ ຟັນຊັ່ນນີ້ຈະເລີ່ມນັບ ປະມານ 1 ວິນາທີ ແລ້ວໂຟກັດ ໄປທີ່ຊ່ອງຟອມ ຊື່ຜູ້ໃຊ້
         var intrvl = setInterval(function () {
            $('.product_name:first').focus(); /// ໂຟກັບໄປຊ່ອງຟອມ ຊື່ຜູ້ໃຊ້
            clearInterval(intrvl);
        }, 800); /// ນັບເວລາ 
    });

    // ເມື່ອຄຼິກປຸ່ມກັບຄືນ ໃນໜ້າຟອມ ຈະສະແດງລາຍການສິນ ແລະເຊື່ອມຟອມເພີ່ມສິນຄ້າ
    $('.bt-back').click(function (e) { 
        e.preventDefault();
        $('.f-stock').show(); // ສະແດງລາຍການສິນຄ້າ
        $('.f-form').hide(); // ເຊື່ອງຟອມ
    });

    var intrvl = setInterval(function () {
        $('.loading-page').hide();
         clearInterval(intrvl);
     }, 800);

}  /// ຈົບ  ພັງຊັ່ນ ສະແດງໜ້າຈັດການ ສະຕ໋ອກ-------------------------------------------------------
 
function app_report(all_data)  /// ພັງຊັ່ນ ສະແດງໜ້າຈັດການ ລາຍງານ -------------------------------
{
    var bordy = "Report";
    $('.main_body').html(bordy);

    var intrvl = setInterval(function () {
        $('.loading-page').hide();
         clearInterval(intrvl);
     }, 800);
}  /// ຈົບ  ພັງຊັ່ນ ສະແດງໜ້າຈັດການ ລາຍງານ -------------------------------------------------------

function app_no_page(all_data)  /// ພັງຊັ່ນ ສະແດງໜ້າຈັດການ ແຈ້ງເຕືອນບໍ່ມີໜ້າທີ່ຕ້ອງການໃນລະບົບ -------------------------------
{
    var bordy = "No Page";
    $('.main_body').html(bordy);

    var intrvl = setInterval(function () {
        $('.loading-page').hide();
         clearInterval(intrvl);
     }, 800);
}  /// ຈົບ  ພັງຊັ່ນ ສະແດງໜ້າຈັດການ ແຈ້ງເຕືອນບໍ່ມີໜ້າທີ່ຕ້ອງການໃນລະບົບ -------------------------------------------------------