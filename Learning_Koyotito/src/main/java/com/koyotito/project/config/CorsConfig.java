package com.koyotito.project.config;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig {
	
	@Bean
    public WebMvcConfigurer mvcConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry){
            	
            	registry.addMapping("/tutor/**")
            	.allowedOrigins("http://localhost:4200")
            	.allowedMethods("*");
            	registry.addMapping("/usuario/**")
            	.allowedOrigins("http://localhost:4200")
            	.allowedMethods("*");
            	registry.addMapping("/alumno/**")
            	.allowedOrigins("http://localhost:4200")
            	.allowedMethods("*");
            	registry.addMapping("/profesor/**")
            	.allowedOrigins("http://localhost:4200")
            	.allowedMethods("*");
            	registry.addMapping("/media/**")
            	.allowedOrigins("http://localhost:4200")
            	.allowedMethods("*");
            	registry.addMapping("/usuario/login")
    			.allowedOrigins("http://localhost:4200")
    			.allowedMethods("*")
    			.exposedHeaders("*");
            }
        };
    }
	
	
	

//  @Bean
//  CorsConfigurationSource corsConfigurationSource() {
//	  
//    CorsConfiguration configuration = new CorsConfiguration();
//    configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200/**", "http://localhost:3000"));
//    configuration.
//    configuration.setAllowedMethods(Arrays.asList("GET","POST", "PUT", "DELETE"));
//    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//    source.registerCorsConfiguration("/**", configuration);
//    return source;
//  }
}
