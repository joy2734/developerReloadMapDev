package org.hdcd.menu.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.hdcd.menu.model.Menu;

@Mapper
public interface MenuMapper {
	public List<Menu> list() throws Exception;
}
