package com.example.demo.controller;

import com.example.demo.model.Products;
import com.example.demo.model.TypeProducts;
import com.example.demo.service.IProductsService;
import com.example.demo.service.ITypeProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ProductsController {
    @Autowired
    private IProductsService productsService;

    @Autowired
    private ITypeProductsService typeProductsService;

    @GetMapping("/products")
    public ResponseEntity<Page<Products>> getAll(@RequestParam( defaultValue = "0") int page,
                                                 @RequestParam( defaultValue = "5") int size,
                                                 @RequestParam( defaultValue = "") String searchName){
        Pageable pageable = PageRequest.of(page,size);
        Page<Products> productsPage = productsService.getAll(pageable);
        if(productsPage.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productsPage,HttpStatus.OK);
    }

    @GetMapping("/type")
    public ResponseEntity<List<TypeProducts>> getTypeProduct() {
        List<TypeProducts> typeProductsList = typeProductsService.getAllTypeProducts();
        if(typeProductsList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeProductsList,HttpStatus.OK);
    }

    @GetMapping("/type/{id}")
    public ResponseEntity<TypeProducts> getByIdType(@PathVariable int id) {
        TypeProducts typeProducts = typeProductsService.getByIdTypeProducts(id);
        System.out.println(typeProducts.getName());
        return new ResponseEntity<>(typeProducts,HttpStatus.OK);
    }
    @PostMapping("/products/create")
    public ResponseEntity<?> addProduct(@RequestBody Products products) {
        productsService.addProduct(products);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<?> delete(@PathVariable int id){
        productsService.deleteProducts(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/products/edit/{id}")
    public ResponseEntity<?> edit(@PathVariable int id, @RequestBody Products products) {
        productsService.update(products,id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
