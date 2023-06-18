package com.koyotito.project.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.koyotito.project.model.Archivo;
import com.koyotito.project.model.Clase;
import com.koyotito.project.model.DenunciaClase;
import com.koyotito.project.model.Likes;
import com.koyotito.project.model.Mensaje;
import com.koyotito.project.model.Profesor;
import com.koyotito.project.model.RelClaseTag;
import com.koyotito.project.model.RelGrupoClase;
import com.koyotito.project.model.RelTarjetaArchivo;
import com.koyotito.project.model.Tag;
import com.koyotito.project.model.Tarjeta;
import com.koyotito.project.model.Visitas;
import com.koyotito.project.services.ArchivoService;
import com.koyotito.project.services.ClaseService;
import com.koyotito.project.services.DenunciaService;
import com.koyotito.project.services.LikesService;
import com.koyotito.project.services.ProfesorService;
import com.koyotito.project.services.RelClaseTagService;
import com.koyotito.project.services.RelGrupoClaseService;
import com.koyotito.project.services.RelTarjetaArchivoService;
import com.koyotito.project.services.TagService;
import com.koyotito.project.services.TarjetaService;
import com.koyotito.project.services.UsuarioService;
import com.koyotito.project.services.VisitaService;

import ch.qos.logback.classic.Logger;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "http://localhost:4200")
public class ClaseController {
	
	private final Logger logger = (Logger) LoggerFactory.getLogger(ClaseController.class);
	
	@Autowired
	private ProfesorService profesorService;
	@Autowired
	private ClaseService claseService;
	@Autowired
	private RelClaseTagService relclasetagService;
	@Autowired
	private TagService tagService;
	@Autowired
	private UsuarioService usuarioService;
	@Autowired
	private RelTarjetaArchivoService reltaService ;
	@Autowired
	private TarjetaService tarjetaService;
	@Autowired
	private ArchivoService archivoService;
	@Autowired
	private LikesService likesService;
	@Autowired
	private VisitaService visitaService;
	@Autowired
	private RelGrupoClaseService relgrupoService;
	@Autowired
	private DenunciaService denunciaService;
	
	
	@PostMapping("profesor/editar/{idClase}")
	public Clase editar(@PathVariable("idProfesor") Long idProfesor, @PathVariable("idClase") Long idClase,
			@RequestBody Clase clase) {
	
		
		if(idClase!=null) {
			Clase claseOld = new Clase();
			claseOld = claseService.findById(idClase);
			
			claseOld.setEstado(clase.getEstado());
			claseOld.setFecha(clase.getFecha());
			claseOld.setPapelera(clase.getPapelera());
			claseOld.setNombreClase(clase.getNombreClase());
			claseOld.setNumDenuncias(clase.getNumDenuncias());
			claseOld.setNumMeGusta(clase.getNumMeGusta());
			claseOld.setNumTarjetas(clase.getNumTarjetas());
			claseOld.setNumVisitas(clase.getNumVisitas());
			claseService.save(claseOld);
			return claseOld;	
		}
		
		return claseService.save(clase);	
	}
//	@PostMapping("profesor/{idProfesor}/editar/{idClase}") 
//	public void edit(@PathVariable("idProfesor") Long idProfesor, @PathVariable("idClase") Long idClase, @RequestBody Clase request) {
//		/*PENDIENTE CHECAR SI SE AUTOASIGNA EL ESTADO/NOMBRE DE LA CLASE CUANDO SE CAMBIA*/
//		
//		Profesor profesor = profesorService.findById(idProfesor);
//		int num_tar = 0;
//		Clase clase = new Clase();
//		clase = claseService.findById(idClase);
//		clase.setFecha(claseService.getFechaActual());
//		clase.setNumMeGusta(likesService.numLikes(idClase));
//		clase.setNumVisitas(visitaService.numVisitas(idClase));
//		clase.setNumDenuncias(denunciaService.numDenuncias(idClase));
//		clase.setProfesor(profesor);
//		clase.setEstado(request.getEstado());
//		clase.setNombreClase(request.getNombreClase());
//
//	
//		List<RelTarjetaArchivo> tarjeta_archivo = new ArrayList<>();
//		tarjeta_archivo = request.getRelTarjetaArchivos();
//		if(tarjeta_archivo != null) {
//			for(RelTarjetaArchivo r: tarjeta_archivo) {
//				Tarjeta t = new Tarjeta();
//				Archivo a = new Archivo();
//				a = r.getArchivo();
//				t = r.getTarjeta();
//				a.setProfesor(profesor);
//				a.setPapelera(false);
//				archivoService.save(a);				
//				t.setClase(clase);
//				// en caso de que sea nueva tarjeta se agrega el archivo primero
//				// a la tabla de archivo
//				// en caso de que sea nueva tarjeta se actualiza tarjeta
//				tarjetaService.save(t);
//				r.setArchivo(a);
//				r.setTarjeta(t);
//				r.setClase(clase);
//				//reltaService.save(r);
//				
//			}
//			num_tar = tarjeta_archivo.size();
//		}
//		clase.setNumTarjetas(num_tar);
//		claseService.save(clase);
//		
//		List<RelClaseTag> rel_del = new ArrayList<>();  
//		rel_del = clase.getRelClaseTags();
//
//		List<RelClaseTag> nue_rel = new ArrayList<>();  
//		nue_rel = request.getRelClaseTags();
//		
//		if(rel_del != null && nue_rel != null) {
//		
//			if(rel_del.size() != nue_rel.size()) {
//				logger.info("los tags son distintos");
//				for(RelClaseTag r: rel_del) {
//					relclasetagService.delete(r);
//				}
//				for(RelClaseTag r: nue_rel) {
//					Tag t = new Tag();
//					t = r.getTag();
//					r.setTag(t);
//					r.setClase(clase);
//					relclasetagService.save(r);
//				}
//			}else {
//				logger.info("puedo hacer un ajuste ya que los tamaños son iguales");
//				int n =0;
//				for(RelClaseTag r: rel_del) {
//					String str1 = (r.getTag()).getNombre();
//					String str2 = ((nue_rel.get(n)).getTag()).getNombre();
//					if(!str1.equals(str2)) {
//						Tag g = (nue_rel.get(n)).getTag();
//						r.setTag(g);
//						relclasetagService.save(r);
//					}else {
//						logger.info("es igual");
//					}
//					n++;
//				}
//			
//			}
//		}else {
//			logger.info("nulo uno o los dos");
//			if(rel_del == null)
//				logger.info("la clase original esta vacia en la tabla de tags");
//			if(nue_rel == null)
//				logger.info("la clase request esta vacia en la tabla de tags");
//		}
//}
///**Falta grupo clase
// * Visitas
// * Likes
// * ***/
	@GetMapping("profesor/{idProfesor}/eliminar/{idClase}")
	public void eliminar(@RequestParam("idClase") Long idClase) {
		
		List<RelTarjetaArchivo> tar_arc = new ArrayList<>();
		tar_arc = reltaService.findByClaseIdClase(idClase);
		
		for(RelTarjetaArchivo r: tar_arc) {
			reltaService.delete(r);
		}
		
		List<Tarjeta> tarjetas = new ArrayList<>();
		tarjetas = tarjetaService.findByClaseIdClase(idClase);
		
		for(Tarjeta t: tarjetas) {
			tarjetaService.delete(t);
		}
		
		List<RelClaseTag> cla_tag = new ArrayList<>();
		cla_tag = relclasetagService.findByClaseIdClase(idClase);
		
		for(RelClaseTag r: cla_tag) {
			relclasetagService.delete(r);
		}
		
		List<RelGrupoClase> gru_cla = new ArrayList<>();		
		gru_cla = relgrupoService.findByClaseIdClase(idClase);
		for(RelGrupoClase r: gru_cla){
			relgrupoService.delete(r);
		}
		
		List<DenunciaClase> den_cla = new ArrayList<>();		
		den_cla = denunciaService.findByClaseIdClase(idClase);
		for(DenunciaClase d: den_cla){
			denunciaService.delete(d);
		}
		
		List<Visitas> vis = new ArrayList<>();		
		vis = visitaService.findByClaseIdClase(idClase);
		for(Visitas v: vis){
			visitaService.delete(v);
		}
		List<Likes> lik = new ArrayList<>();		
		lik = likesService.findByClaseIdClase(idClase);
		for(Likes l: lik){
			likesService.delete(l);
		}
		
	
		Clase clase = new Clase();
		clase = claseService.findById(idClase);
		claseService.delete(clase);
		
	}
	
	@GetMapping("profesor/{idProfesor}/buscar-clases")
	public List<Clase> listClases(@PathVariable("idProfesor") Long idProfesor){
		List<Clase> clases = claseService.findByProfesorIdProfesor(idProfesor);
		
		logger.info("tamaño de las clases " + clases.size());
		logger.info("id profesor  " + idProfesor);
		return clases;
	}
	@GetMapping("clase/{idClase}/getNumVisitas")
	public Long getNumVisitas(@PathVariable("idClase") Long idClase) {
		return claseService.getNumVisitas(idClase);
	}
	
	@GetMapping("clase/denunciar-clase/{idClase}")
	public Mensaje denunciar_clase(@PathVariable("idClase") Long idClase,@RequestParam("motivo") String motivo) {
		
		logger.info("motivo " + motivo);
		DenunciaClase dc = new DenunciaClase();
		dc.setMotivo(motivo);
		
		
		LocalDateTime hoy = LocalDateTime.now();  
		Instant instant = hoy.atZone(ZoneId.systemDefault()).toInstant();
		Date date = Date.from(instant);
		
		dc.setFechaDenuncia(date);
		Clase c = new Clase();
		c = claseService.findById(idClase);
		// VERIFICACION DE QUE LA CLASE DEVUELTA NO SEA NULA
		dc.setClase(c);
		
		Mensaje msj = new Mensaje();
		msj.setMsg("Se denunció la clase de manera correcta. Evaluaremos el contenido. Muchas Gracias.");
		msj.setTipo(1);
		if(denunciaService.save(dc)==null) {
			msj.setMsg("En este momento no se puede hacer la denuncia.");
			msj.setTipo(0);
		}
		return msj;
	}
	
	@GetMapping("clase/aprobar-clase/{idClase}")
	public Mensaje aprobarClase(@PathVariable("idClase") Long idClase) {
		Clase clase = new Clase();
		clase = claseService.findById(idClase);
		
		Mensaje msj = new Mensaje();
		msj.setMsg("Se aprobó la clase de manera correcta. Gracias.");
		msj.setTipo(1);
		
		
		if(clase!=null) {
			String estado = clase.getEstado();
			if(estado.charAt(1)=='1') { // primero debe estar publicado
				clase.setEstado("11");
				claseService.save(clase);
			}else {
				msj.setMsg("Ha ocurrido un error, esta clase aún no puede ser aprobada ");
				msj.setTipo(0);
			}
		}else {
			msj.setMsg("En este momento no se puede aprobar la clase.");
			msj.setTipo(0);
		}
		
		return msj;
	}
	
	@GetMapping("clase/obtener-clase/{idClase}")
	public Clase findById(@PathVariable("idClase") Long idClase) {
		return claseService.findById(idClase);
	}
	
	@GetMapping("clase/obtener-tags/{idClase}")
	public List<String> findTagsByIdClase(@PathVariable("idClase") Long idClase) {
		var tags = new ArrayList<String>();
		List<RelClaseTag> r = relclasetagService.findByClaseIdClase(idClase);
		for(RelClaseTag rr: r) {
			tags.add(rr.getTag().getNombre());
		}
		return tags;
	}

}
