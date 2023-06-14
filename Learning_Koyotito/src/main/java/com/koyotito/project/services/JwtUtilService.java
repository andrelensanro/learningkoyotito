package com.koyotito.project.services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

/*La gestion de los tokens*/


@Service
public class JwtUtilService {
  // LLAVE_MUY_SECRETA => [Base64] => TExBVkVfTVVZX1NFQ1JFVEE=
	/*Llave para firmar el token*/
  private static final String JWT_SECRET_KEY = "TExBVkVfTVVZX1NFQ1JFVEE=";
  //private static final String JWT_SECRET_KEY = "U0VDUkVUTyBTVVBFUiBTRUNSRVRP=";

  public static final long JWT_TOKEN_VALIDITY = 1000 * 60 * 60 * (long) 8; // 8 Horas

  @Autowired
  public UsuarioService usuarioservice;
  
  private final Logger logger = (Logger)LoggerFactory.getLogger(JwtUtilService.class);
  
  
  public String extractUsername(String token) {
    return extractClaim(token, Claims::getSubject);
  }

  public Date extractExpiration(String token) {
    return extractClaim(token, Claims::getExpiration);
  }

  public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
    return claimsResolver.apply(extractAllClaims(token));
  }

  private Claims extractAllClaims(String token) {
    return Jwts.parser().setSigningKey(JWT_SECRET_KEY).parseClaimsJws(token).getBody();
  }

  private Boolean isTokenExpired(String token) {
    return extractExpiration(token).before(new Date());
  }

  public String generateToken(UserDetails userDetails) {
    Map<String, Object> claims = new HashMap<>();
    // Agregando informacion adicional como "claim"
    var rol = userDetails.getAuthorities().stream().collect(Collectors.toList()).get(0);
//    var idd = userDetails.getAuthorities().stream().collect(Collectors.toList()).get(1);
//    var idp = userDetails.getAuthorities().stream().collect(Collectors.toList()).get(2);
//    var idt = userDetails.getAuthorities().stream().collect(Collectors.toList()).get(3);
    
    var email = userDetails.getUsername();
    logger.info("HOOOOOOOOOOOOOOOOOOOOOOOO " + rol.toString());
    claims.put("rol", rol);
    claims.put("idd", usuarioservice.findByCorreo(email).getIdUsuario());
    if( rol.toString().equals("ROLE_PROFE")) {
    	var idp = usuarioservice.findByCorreo(email).getProfesor().getIdProfesor();
    	claims.put("idp", idp);
    	claims.put("idt", 0L);
    }else {
    	var idt = usuarioservice.findByCorreo(email).getTutor().getIdTutor();
    	claims.put("idp", 0L);
    	claims.put("idt", idt);
    }
    return createToken(claims, userDetails.getUsername());
  }

  private String createToken(Map<String, Object> claims, String subject) {

    return Jwts
        .builder()
        .setClaims(claims)
        .setSubject(subject)
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY))
        .signWith(SignatureAlgorithm.HS256, JWT_SECRET_KEY)
        .compact();
  }

  public boolean validateToken(String token, UserDetails userDetails) {
    final String username = extractUsername(token);
    return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
  }
}