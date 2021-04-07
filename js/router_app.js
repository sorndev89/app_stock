var urlh = window.location.href + '#';  // ດືງ URL 
var hash = urlh.split('#')[1];
var url = urlh.split('#')[0]; // ສ້າງໂຕແປດືງ URL ຂອງໜ້າ Page


$(window).bind('hashchange', function() { load_page() });  // ຄຳສັ່ງເມື່ອ ຊ່ອງປ້ອນ URL ມີການປ່ຽນແປງ ໃຫ້ເອີ້ນຫາ Function Load_page


//// Function Load_page ເປັນການດືງຂໍ້ມູນ Page ທີ່ຕ້ອງການ ມາສະແດງຜົນໃນຮູບແບບ SPA
function load_page() {
    var urlh = window.location.href + '#';
    var hash = urlh.split('#')[1];
    var url = urlh.split('#')[0];

    if(hash==''){
        console.log('aaaaa');
        app_dashboard();
    }
    else{

        switch (hash) {
            case "dashboard":
                $('.loading-page').show();
                app_dashboard(all_data);        // ເອີ້ນຫາ ຟັງຊັ່ນ app_dashboard() ສະແດງຜົນໜ້າ ບອດ
                break;
            case "manager_user":
                $('.loading-page').show();
                app_manager_user(all_data);     // ເອີ້ນຫາ ຟັງຊັ່ນ app_manager_user() ສະແດງຜົນໜ້າ ຈັດການຜູ້ໃຊ້
                break;
            case "manager_stock":
                $('.loading-page').show();
                app_manager_stock(all_data);    // ເອີ້ນຫາ ຟັງຊັ່ນ  app_manager_stock() ສະແດງຜົນໜ້າ ຈັດການສະຕ໋ອກ
                break;
            case "report":
                $('.loading-page').show();
                app_report(all_data);           // ເອີ້ນຫາ ຟັງຊັ່ນ app_report() ສະແດງຜົນໜ້າ ລາຍງານ
                break;
        
            default:
                app_no_page(all_data);          // ເອີ້ນຫາ ຟັງຊັ່ນ app_no_page()
                break;
        }

    }

    
}

load_page();

// ສ້າງ Object ເກັບຂໍ້ມູນທີ່ດຶງມາຈາກ Server
var all_data = {
    user_id:'',
    user_type:''
}


//// ບັນດາ ຟັງຊັ່ນທີ່ຈຳເປັນຕ້ອງໃຊ້

  /// ຟັງຊັ່ນ ຄຳນວນຂະໜາດຂອງໄຟລ໌ =======================================
  function formatSizeUnits(bytes) {
    if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + ' GB'; } else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + ' MB'; } else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + ' KB'; } else if (bytes > 1) { bytes = bytes + ' bytes'; } else if (bytes == 1) { bytes = bytes + ' byte'; } else { bytes = '0 byte'; }
    return bytes;
}