package org.hdcd.menu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.hdcd.menu.model.Menu;
import org.hdcd.menu.service.MenuService;

@RestController
public class MenuController {

	@Autowired
	private MenuService menuService;
	
	@GetMapping("/menu")
	public List<Menu> getMenus() throws Exception{
		return menuService.list();
	}
}
