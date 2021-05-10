package org.hdcd.community.controller;

import java.util.List;

import org.hdcd.community.model.Community;
import org.hdcd.community.service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommunityController {

	@Autowired
	private CommunityService communityService;
	
	@RequestMapping(value="/register", method = RequestMethod.POST)
	public int addComment(Community community) throws Exception{
		communityService.create(community);
		return 1;
	}
	
	@RequestMapping(value="/read", method= RequestMethod.GET)
	public Community readComment(int commuNum) throws Exception{
		return communityService.read(commuNum);
	}
	
	@RequestMapping(value="/update", method = RequestMethod.PUT)
	public int updateComment(Community community) throws Exception{
		communityService.update(community);
		return 1;
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.DELETE)
	public int deleteComment(Community community) throws Exception{
		communityService.delete(community);
		return 1;
	}
	
	@RequestMapping(value="list", method = RequestMethod.GET)
	public List<Community> getComments(Community community) throws Exception{
		return communityService.list(community);
	}
	
}