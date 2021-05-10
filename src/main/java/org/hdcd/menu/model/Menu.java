package org.hdcd.menu.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Menu {
	private int menuId;
	private String menuName;
	private String menuLink;
	private String menuIcon;
}
