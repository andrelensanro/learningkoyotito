package com.koyotito.project.model;

public class Credentials {
	private String correo;
	private String password;
	private String token;
	
	public String getcorreo() {
		return correo;
	}
	
	public void setcorreo(String correo) {
		this.correo = correo;
	}
	
	public String getpassword() {
		return password;
	}
	
	public void setpassword(String password) {
		this.password = password;
	}
	
	public String getToken() {
		return token;
	}
	
	public void setToken(String token) {
		this.token = token;
	}
}
