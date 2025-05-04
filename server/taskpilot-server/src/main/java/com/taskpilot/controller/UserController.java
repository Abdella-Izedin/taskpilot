package com.taskpilot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskpilot.model.User;
import com.taskpilot.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	private final UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping("/username/{username}")
	public User getUserByUsername(@PathVariable String username) {
		return userService.findUserByUsername(username);
	}
}
