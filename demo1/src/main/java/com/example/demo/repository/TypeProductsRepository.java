package com.example.demo.repository;

import com.example.demo.model.TypeProducts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TypeProductsRepository extends JpaRepository<TypeProducts,Integer> {
    @Query(value = "select * from type_products" , nativeQuery = true)
    List<TypeProducts> getAllTypeProducts();
}
