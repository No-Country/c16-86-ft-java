package com.estacsis;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;





@SpringBootApplication




	public class EstacsisApplication {

	@Configuration
	public class CorsConfig {

		@Bean
		public CorsFilter corsFilter() {
			UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
			CorsConfiguration config = new CorsConfiguration();

			// Permitir solicitudes desde cualquier origen
			config.addAllowedOrigin("*");

			// Permitir solicitudes con los métodos GET, POST, PUT, DELETE, etc.
			config.addAllowedMethod("*");

			// Permitir incluir encabezados específicos en la solicitud
			config.addAllowedHeader("*");

			source.registerCorsConfiguration("/**", config);
			return new CorsFilter();
		}
		public static void main(String[] args) {

			SpringApplication.run(EstacsisApplication.class, args);

		}

	}
}
