package com.koyotito.project.media;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Value;
// import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

// import jakarta.annotation.PostConstruct;

@Service
public class FileSystemStorageService implements StorageService{

    @Value("${media.location}")
    private String medialocation;
    private Path rootLocation;

    @Override
    public String store(MultipartFile file, String idpersonal) {
    	
        rootLocation = Paths.get(medialocation+idpersonal);
        try {
            Files.createDirectories(rootLocation);
        } catch (IOException e) {
            e.printStackTrace();
        }


        try{
            if(file.isEmpty())
                throw new RuntimeException("File to store empty file");
            String filename = file.getOriginalFilename();
            Path destinationFile = rootLocation.resolve(Paths.get(filename))
                .normalize().toAbsolutePath();
            try(InputStream inputStream = file.getInputStream()){
                Files.copy(inputStream, destinationFile, StandardCopyOption.REPLACE_EXISTING);
            }
            return filename; // el nombre del archivo
        }catch(IOException e){
            throw new RuntimeException("Failed to store file", e);
        }
    }

    @Override
    public Resource loadAsResource(String filename) {
        try{
            Path file = rootLocation.resolve(filename);
            Resource resource = new UrlResource((file.toUri()));
            if( resource.exists() || resource.isReadable() ){
                return resource;
            }else{
                throw new RuntimeException("Could not read file " + filename);
            }
        }catch(MalformedURLException e){
            throw new RuntimeException("Could not read file " + filename);
        }
    }
    
}
