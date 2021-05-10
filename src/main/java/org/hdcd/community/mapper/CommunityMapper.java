package org.hdcd.community.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.hdcd.community.model.Community;

@Mapper
public interface CommunityMapper {
	
	public void create(Community community) throws Exception;
	
	public Community read(int commuNum) throws Exception;
	
	public void update(Community community) throws Exception;
	
	public void delete(Community community) throws Exception;
	
	public List<Community> list(Community community) throws Exception;//추가 페이지 정보
}
