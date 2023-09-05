package com.example.demo.service;

import com.example.demo.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductsService {
    Page<Products> getAll(Pageable pageable);
    void addProduct(Products products);
    void deleteProducts(int id);
    void update(Products products, int id);
}
