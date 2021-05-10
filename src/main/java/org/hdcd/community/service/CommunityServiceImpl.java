package org.hdcd.community.service;

import java.util.List;

import org.hdcd.community.mapper.CommunityMapper;
import org.hdcd.community.model.Community;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommunityServiceImpl implements CommunityService {
	
	@Autowired
	private CommunityMapper mapper;
	
	public void create(Community community) throws Exception{
		mapper.create(community);
	}

	public Community read(int commuNum) throws Exception{
		return mapper.read(commuNum);
	}

	public void update(Community community) throws Exception{
		mapper.update(community);
	}

	public void delete(Community community) throws Exception{
		mapper.delete(community);
	}

	public List<Community> list(Community community) throws Exception{
		return mapper.list(community);
	}
}
