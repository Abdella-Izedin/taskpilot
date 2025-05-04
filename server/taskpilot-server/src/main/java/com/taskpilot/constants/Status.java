package com.taskpilot.constants;

public enum Status {
	ONGOING("Ongoing"),
	COMPLETED("Completed"),
	CANCELED("Canceled");

	private String label;
	
	Status(String label) {
		this.label = label;
	}
	
	public String getLabel() {
		return this.label;
	}
}
