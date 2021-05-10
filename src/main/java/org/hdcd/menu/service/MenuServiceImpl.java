package org.hdcd.menu.service;

import java.util.List;

import org.hdcd.menu.model.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.hdcd.menu.mapper.MenuMapper;

@Service
public class MenuServiceImpl implements MenuService{

	@Autowired
	private MenuMapper mapper;
	
	public List<Menu> list() throws Exception{
		return mapper.list();
	}
}
