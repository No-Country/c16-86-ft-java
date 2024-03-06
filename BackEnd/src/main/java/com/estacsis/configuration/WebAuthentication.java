package com.estacsis.configuration;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import com.estacsis.entity.ParkerEntity;
import com.estacsis.repository.ParkerRepository;
import com.fasterxml.classmate.AnnotationOverrides;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Configuration
public class WebAuthentication extends GlobalAuthenticationConfigurerAdapter {
    @Autowired
    private ParkerRepository parkerRepository;

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    @Override
    public void init(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(inputName -> {
            ParkerEntity parker = parkerRepository.findByEmail(inputName);
            if (parker != null){
                UserDetails userDetails = new User(parker.getUserParker(), parker.getPasswordParker(),
                        AuthorityUtils.createAuthorityList("ROLE_PARKER")); // Cambia a ROLE_PARKER

                // Verificar si el usuario es un "admin"
                if (parker.getUserParker().equalsIgnoreCase("admin@admin.com")) {
                    userDetails = new User(parker.getUserParker(), parker.getPasswordParker(),
                            AuthorityUtils.createAuthorityList("ROLE_ADMIN")); // Cambia a ROLE_ADMIN
                }

                // Generar el token JWT con información adicional
                String token = generateToken(userDetails.getUsername(), parker.getIdParker());

                // Devolver el UserDetails junto con el token JWT
                // Puedes crear una clase personalizada que contenga tanto el UserDetails como el token
                // O simplemente devolver un objeto Map con ambas informaciones
                Map<String, Object> response = new HashMap<>();
                response.put("userDetails", userDetails);
                response.put("token", token);
                response.put("id", parker.getIdParker()); // Agregar el ID

                return userDetails;
            }
            else {
                throw new UsernameNotFoundException("Unknown user: " + inputName);
            }
        });
    }

    // Método para generar el token JWT
    private String generateToken(String username, Long userId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("userId", userId); // Agregar el ID del usuario
        claims.put("created", new Date());

        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {

        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
