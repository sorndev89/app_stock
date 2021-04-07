<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class App extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function add_data($table,$data)
	{
		$this->db->insert($table,$data);
	}

	public function update_data($table,$data,$id)
	{
		$this->db->update($table,$data,"id = $id");
	}

	public function update_data_all($table,$data)
	{
		$this->db->update($table,$data);
	}

	public function del_data($table,$id)
	{
		$this->db->where('id', $id)->delete($table);
    }

    public function get_data_asc($table)
      {
        $query = $this->db->select("*")->from($table)->order_by("id","asc")->get();
        return $query->result_array();
      }
    
    public function get_user_images($table,$id)
    {
        $query = $this->db->select("user_images")->from($table)->where('id',$id)->get();
        $qdata = $query->row_array();
        return $qdata['user_images'];
 
    }
    
    public function get_data_one($table,$id)
      {
        $query = $this->db->select("*")->from($table)->where('id',$id)->get();
        return $query->result_array();
      }
    
      public function check_user_id($table,$user_id)
      {
        $query = $this->db->select("*")->from($table)->where('user_id',$user_id)->get();
        $count = $query->num_rows();
        if($count == 0){
            return 'true';
        }
        else{
            return 'false';
        }
      
      }

    public function get_data_user($go_page,$max_list)
    {
        //$data_where = array('tr_type !='=>'check_out');

        $query_row = $this->db->select("id,user_name,user_sex,user_id,user_type,user_status,user_images")->from('user')->get();
		$all_row = $query_row->num_rows();

        if($go_page == 'last'){
            $new_start = ceil($all_row/$max_list);
            $start = ($new_start-1)*$max_list;
        }
        else{
            $start = ($go_page-1)*$max_list;
        }
		
		$query = $this->db->select("id,user_name,user_id,user_type,user_status,user_sex,user_images")->from('user')->limit($max_list,$start)->order_by("id","asc")->get();
		$data = $query->result_array();
		
		$rt['data'] = $data;
		$rt['all_row'] = $all_row;

		return $rt;
    }

}