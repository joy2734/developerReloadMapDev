//package org.hdcd.config;
//
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//	
////	@Bean
////	PasswordEncoder passwordEncoder() {
////		return new BCryptPasswordEncoder();
////	}
//	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.authorizeRequests()
//			.antMatchers("/index")
//			.hasRole("USER");
//	
//		http.authorizeRequests()
//			.antMatchers("/index")
//			.hasRole("MEMBER");
//		
//		http.authorizeRequests()
//			.antMatchers("/index")
//			.hasRole("ADMIN");
//		
//		
//		http.formLogin()
//			.defaultSuccessUrl("/index")
//			.and()
//		.logout();
//		
//	}
//	
//
//	
//}
