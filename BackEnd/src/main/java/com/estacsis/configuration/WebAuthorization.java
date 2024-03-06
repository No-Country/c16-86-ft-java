package com.estacsis.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@EnableWebSecurity
@Configuration
public class WebAuthorization extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().authorizeRequests()

                .antMatchers("/LandingPage.jsx").permitAll() // Permite acceso sin autenticación a la ruta /index.html
                .antMatchers("/src/components/Auth/login.jsx").permitAll() // Permite acceso sin autenticación a la ruta /index.html
                .anyRequest().authenticated(); // Todas las demás rutas requieren autenticación




                http.formLogin()// Configura el formulario de inicio de sesión basado en formularios
                        .usernameParameter("email")
                        .passwordParameter("password")
                        .loginPage("/api/login");

                http.logout().logoutUrl("/api/logout").deleteCookies("JSESSIONID");

                http.csrf().disable();

                http.headers().frameOptions().disable();

                http.exceptionHandling().authenticationEntryPoint((req, res, exc) -> res.sendError(HttpServletResponse.SC_UNAUTHORIZED));

                http.formLogin().successHandler((req, res, auth) -> clearAuthenticationAttributes((HttpServletRequest) req));

                http.formLogin().failureHandler((req, res, exc) -> res.sendError(HttpServletResponse.SC_UNAUTHORIZED));

                http.logout().logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler());

                http.build();
    }
    private void clearAuthenticationAttributes(HttpServletRequest request) {

        HttpSession session = request.getSession(false);

        if (session != null) {

            session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);

        }
    }
}

