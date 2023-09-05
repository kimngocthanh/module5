package com.example.demo.repository;

import com.example.demo.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface ProductsRepository extends JpaRepository<Products, Integer> {
    @Query(value = "select * from products", nativeQuery = true)
    Page<Products> getAllProducts(Pageable pageable);
    @Transactional
    @Modifying
    @Query(value = "insert into products (code,name,date,number,type) values(:#{#products.code},:#{#products.name},:#{#products.date},:#{#products.number},:#{#products.typeProducts})", nativeQuery = true)
    void addProduct(Products products);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM products WHERE products.id = :id", nativeQuery = true)
    void deleteProductById(int id);

    @Modifying
    @Query(value = "update products set code = :#{#product.code}, name = :#{#product.name}, date = :#{#product.date}, number = :#{#product.number}, type = :#{#product.typeProducts} where id = :id", nativeQuery = true)
    void updateProduct(@Param("product") Products products, @Param("id") int id);

}
