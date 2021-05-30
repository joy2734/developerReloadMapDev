package org.hdcd.community.model;

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
	private String contype="";//글타입 front,back,devop,android...
	private String writer="";
	private String regDate;
	private String dType; //검색용 파라미터
	private String modifyDate;
}