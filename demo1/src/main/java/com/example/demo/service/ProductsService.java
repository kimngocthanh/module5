package com.example.demo.service;

import com.example.demo.model.Products;
import com.example.demo.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductsService implements IProductsService {
    @Autowired
    private ProductsRepository productsRepository;
    @Override
    public Page<Products> getAll(Pageable pageable) {
        return productsRepository.getAllProducts(pageable);
    }

    @Override
    public void addProduct(Products products) {
        productsRepository.addProduct(products);
    }

    @Override
    public void deleteProducts(int id) {
        productsRepository.deleteProductById(id);
    }

    @Override
    public void update(Products products, int id) {
        productsRepository.updateProduct(products,id);
    }
}
