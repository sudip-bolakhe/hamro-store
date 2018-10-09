package com.sudip.hamrostore;

import com.sudip.hamrostore.config.JwtFilter;
import com.sudip.hamrostore.utils.ApiConstants;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HamroStoreApplication {

    @Bean
    public FilterRegistrationBean jwtFilter(){
        final FilterRegistrationBean registrationBean= new FilterRegistrationBean();
        registrationBean.setFilter(new JwtFilter());
        registrationBean.addUrlPatterns(ApiConstants.BASE_REST_URL+"*");
        return registrationBean;
    }
    
	public static void main(String[] args) {
		SpringApplication.run(HamroStoreApplication.class, args);
	}
}
