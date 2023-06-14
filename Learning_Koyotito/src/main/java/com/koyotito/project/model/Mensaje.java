package com.koyotito.project.model;

public class Mensaje {
	private int tipo; /*Mensaje tipo 1 = todo bien, tipo 2 = todo mal */
	private String msg;
	
	public Mensaje() {
		
	}
	public int getTipo() {
		return tipo;
	}
	public void setTipo(int tipo) {
		this.tipo = tipo;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	
	
}
