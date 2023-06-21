package com.koyotito.project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.koyotito.project.filters.JwtRequestFilter;
import com.koyotito.project.services.UserDetailsServiceImpl;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class WebSecurityConfig {
	
	@Autowired
	private JwtRequestFilter jwtRequestFilter;

	@Bean
	SecurityFilterChain web(HttpSecurity http) throws Exception {
	    http
	        .csrf().disable() 
	    	.authorizeHttpRequests((authorize) -> authorize
	    			.requestMatchers("/usuario/login").permitAll()
	    			.requestMatchers("/media/**").permitAll()
	    			.requestMatchers("/usuario/registro").permitAll()
	    			.requestMatchers("/tutor/**").hasRole("TUTOR")
	    			.requestMatchers("/profesor/**").hasRole("PROFE")
	    			.anyRequest().authenticated()
	    	)
	    	.cors(withDefaults())
	    	.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
	    	.sessionManagement((session) -> session 
	    		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	    	);

	    		    
//	    http
//	    	.formLogin(withDefaults());
//	    
//	    http
//	    	.httpBasic(withDefaults());
//	    return http.build(); 
	    return http.build();
	}
//	@Bean
//	UserDetailsServiceImpl userDetailsService() {
//		return new UserDetailsServiceImpl();
//	}
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
}


