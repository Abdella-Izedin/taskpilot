package com.taskpilot.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.taskpilot.model.User;
import com.taskpilot.repository.UserRepository;

@Service
@Transactional
public class UserService {
	private final UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	public User findUserByUsername(String username) {
		User user = userRepository.findByUsername(username).orElse(null);
		return user;
	}
}
