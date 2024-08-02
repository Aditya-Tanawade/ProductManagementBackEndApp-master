package com.example.productmanagementbackendapp.repository;

import com.example.productmanagementbackendapp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product ,Integer> {
}
