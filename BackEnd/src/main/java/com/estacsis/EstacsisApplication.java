package com.estacsis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.estacsis"})
public class EstacsisApplication {

	public static void main(String[] args) {

		SpringApplication.run(EstacsisApplication.class, args);

	}

}
