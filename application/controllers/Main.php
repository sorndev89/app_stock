<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
    }

	/// ຟັງຊັ່ນ index ສະແດງຂໍ້ມູນໜ້າທຳອິດ
	public function index()
	{
		$this->load->view('home');
	}

	
	/// ຟັງຊັ່ນ ຈັດການຂໍ້ມູນ
	public function mg_data()
	{
		$post_type = $this->input->post('post_type');

		switch ($post_type) {
			case 'add_update_user':
				$id = $this->input->post('id');
				$user_name = $this->input->post('user_name');
				$user_id = $this->input->post('user_id');
				$user_pass = $this->input->post('user_pass');
				$user_type = $this->input->post('user_type');
				$user_sex = $this->input->post('user_sex');
				$user_status = $this->input->post('user_status');
				$user_images = $this->input->post('user_images');
				$form_action = $this->input->post('form_action');
				

				switch ($form_action) {
					case 'add_user':
						$new_pass = password_hash($user_pass, PASSWORD_BCRYPT,['cost'=>9]);
                		$data =  array('user_name'=>$user_name, 'user_id'=>$user_id,'user_pass'=>$new_pass,'user_type'=>$user_type,'user_sex'=>$user_sex,'user_status'=>$user_status,'user_images'=>$user_images);
						$this->App->add_data('user',$data);
					break;
					case 'update_user':
						
						if($user_images == ''){
							if($user_pass == '')
							{
                				$data =  array('user_name'=>$user_name, 'user_type'=>$user_type,'user_sex'=>$user_sex,'user_status'=>$user_status);
								$this->App->update_data('user',$data,$id);
							}
							else
							{
								$new_pass = password_hash($user_pass, PASSWORD_BCRYPT,['cost'=>9]);
								$data =  array('user_name'=>$user_name,'user_pass'=>$new_pass, 'user_type'=>$user_type,'user_sex'=>$user_sex,'user_status'=>$user_status);
								$this->App->update_data('user',$data,$id);
							}

						}
						else
						{
							/// ລຶບຮູບຈາກຖານຂໍ້ມູນໂຕເກົ່າ 
							$file = $this->App->get_user_images('user',$id);
							if($file !=''){
								$delete = "images/profile/".$file;
								if(file_exists($delete)){ unlink($delete); }
							}
							//echo $file;
							/// ຈົບການລຶບຮູບ
							if($user_pass == '')
							{
								$data =  array('user_name'=>$user_name, 'user_type'=>$user_type,'user_sex'=>$user_sex,'user_status'=>$user_status,'user_images'=>$user_images);
								$this->App->update_data('user',$data,$id);
							}
							else
							{
								$new_pass = password_hash($user_pass, PASSWORD_BCRYPT,['cost'=>9]);
								$data =  array('user_name'=>$user_name, 'user_pass'=>$new_pass, 'user_type'=>$user_type,'user_sex'=>$user_sex,'user_status'=>$user_status,'user_images'=>$user_images);
								$this->App->update_data('user',$data,$id);
							}
						}

					break;
				}
				


				///// ສົ່ງລາຍການ ອັບເດດລ່າສຸດກັບ
				$go_page = $this->input->post('go_page');
				$max_list = $this->input->post('max_list');
				$db_user = $this->App->get_data_user($go_page,$max_list); 
				$user_json = json_encode($db_user['data'],JSON_UNESCAPED_UNICODE);
				$user_row = $db_user['all_row'];
				echo $user_json.'|X|'.$user_row;
				
				break;
			case 'delete_user':

				$id = $this->input->post('id');

				/// ລຶບຮູບພາບກ່ອນ
				$file = $this->App->get_user_images('user',$id);
							if($file !=''){
								$delete = "images/profile/".$file;
								if(file_exists($delete)){ unlink($delete); }
							}
							
				$this->App->del_data('user',$id);
				

				$go_page = $this->input->post('go_page');
				$max_list = $this->input->post('max_list');
				$db_user = $this->App->get_data_user($go_page,$max_list); 
				$user_json = json_encode($db_user['data'],JSON_UNESCAPED_UNICODE);
				$user_row = $db_user['all_row'];
				echo $user_json.'|X|'.$user_row.'|X|ok';
				
				break;
			case 'check_user_id':

				$user_id = $this->input->post('user_id');
				$re_data = $this->App->check_user_id('user',$user_id);
				echo $re_data;
				break;
			case 'test_get_img':
				$id = $this->input->post('id');
				$file = $this->App->get_user_images('user',$id);
				echo $file;
			break;

			default:
				# code...
				break;
		}
	}

	public function get_data()
	{
		$post_type = $this->input->post('post_type');

		switch ($post_type) {
			case 'get_all_user':

					$go_page = $this->input->post('go_page');
					$max_list = $this->input->post('max_list');
					$db_user = $this->App->get_data_user($go_page,$max_list); 
					$user_json = json_encode($db_user['data'],JSON_UNESCAPED_UNICODE);
					$user_row = $db_user['all_row'];
					echo $user_json.'|X|'.$user_row;
					
				break;
			
		}

	}

	public function upload_file()
	{
		$config = array("upload_path"=>"images/profile/","allowed_types"=>"jpg|gif|png|jpeg|pdf",);
		$this->load->library('upload', $config);
		if($this->upload->do_upload("file_upload")){
			$data = $this->upload->data();
			$name_pic=date("YmdHis");
			rename($data["full_path"],$data["file_path"].$name_pic.$data["file_ext"]);
			$this->load->library("image_lib");
			$config = array("image_library"=>"gd2","source_image"=>"images/profile/".$name_pic.$data["file_ext"],
				"maintain_ratio"=>TRUE );
			
			$this->image_lib->initialize($config);
			$file_name=$name_pic.$data["file_ext"];
		}
		else{
			$file_name='no_upload'; 
		}
		
		echo $file_name;
    }


	public function hash_string($string)
    {
        $hashed_string = password_hash($string, PASSWORD_BCRYPT,['cost'=>9]);
        return $hashed_string;
    }

    public function hash_verify($plain_text,$hashed_string)
    {
        $hashed_string = password_verify($plain_text,$hashed_string);
        return $hashed_string;
    }


}