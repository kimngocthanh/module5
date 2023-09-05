package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String code;
    private String name;
    private String date;
    private int number;
    @ManyToOne
    @JoinColumn(name = "type",referencedColumnName = "id")
    private TypeProducts typeProducts;

    public Products() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Products(String code, String name, String date, int number) {
        this.code = code;
        this.name = name;
        this.date = date;
        this.number = number;
    }

    public Products(String code, String date, int number, TypeProducts typeProducts) {
        this.code = code;
        this.date = date;
        this.number = number;
        this.typeProducts = typeProducts;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public TypeProducts getTypeProducts() {
        return typeProducts;
    }

    public void setTypeProducts(TypeProducts typeProducts) {
        this.typeProducts = typeProducts;
    }
}
