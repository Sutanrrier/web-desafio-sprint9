package com.sutanrrier.desafiospring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RequestMapping(value="/")
public class DesafiospringApplication {

	public static void main(String[] args) {
		SpringApplication.run(DesafiospringApplication.class, args);
	}
	
	@GetMapping
	public ResponseEntity<String> helloWorld(){
		return ResponseEntity.ok().body("Hello World!");
	}
}
