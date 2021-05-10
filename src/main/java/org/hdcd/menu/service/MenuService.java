package org.hdcd.menu.service;

import java.util.List;
import org.hdcd.menu.model.Menu;

public interface MenuService {
	public List<Menu> list() throws Exception;
}
