package org.hdcd;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

	
	@RequestMapping("/login")
	String login(){
		
		return "/"; 
	}
	
}
