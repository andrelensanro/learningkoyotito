package com.koyotito.project.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthenticationReq implements Serializable {

  private static final long serialVersionUID = 1L;

  private String username;
  private String clave;

  @JsonCreator
  public AuthenticationReq(@JsonProperty("correo") String username, @JsonProperty("password") String clave) {
 
  
    this.username = username;
    this.clave = clave;
  }

  public String getusername() {
    return username;
  }

  public void setusername(String username) {
    this.username = username;
  }

  public String getclave() {
    return clave;
  }

  public void setclave(String clave) {
    this.clave = clave;
  }
}
