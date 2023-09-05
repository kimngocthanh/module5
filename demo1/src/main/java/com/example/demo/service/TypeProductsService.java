package com.example.demo.service;

import com.example.demo.model.TypeProducts;
import com.example.demo.repository.TypeProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeProductsService implements ITypeProductsService{
    @Autowired
    private TypeProductsRepository typeProductsRepository;
    @Override
    public List<TypeProducts> getAllTypeProducts() {
        return typeProductsRepository.getAllTypeProducts();
    }

    @Override
    public TypeProducts getByIdTypeProducts(int id) {
        return typeProductsRepository.findById(id).get();
    }
}
