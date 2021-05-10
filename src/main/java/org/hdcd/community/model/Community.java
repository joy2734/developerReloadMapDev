package org.hdcd.community.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Community {
	private int commuNum;
	private String title="";
	private String content="";
	private String type="";	//글타입 front,back,devop,android...
	private Date regDate;
	private Date modifyDate;
}