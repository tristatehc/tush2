package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tristatehc.dto.CustomerDTO;
import com.tristatehc.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String>{
	List<Customer> findAllByOrderByLastNameAsc();
	@Query(value = "select a.* from  cts_cus a, thc_user_candi_priv b where 1=1  and (a.FAC_NAME = b.priv_facility or b.priv_facility = 'All') and  b.user_email in (?1) ",nativeQuery=true)
	List<Customer> findAllByOrderByLastNameAsc(String email);	

}
 