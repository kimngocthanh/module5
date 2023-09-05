package com.example.demo.service;

import com.example.demo.model.TypeProducts;

import java.util.List;

public interface ITypeProductsService {
    List<TypeProducts> getAllTypeProducts();

    TypeProducts getByIdTypeProducts(int id);
}
