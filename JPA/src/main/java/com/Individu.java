package com;

import javax.persistence.*;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Calendar;

@Entity
@Table(name="individu")
public class Individu  {

    @Id
    @Column(name="individuId")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Basic
    @Column(length=30, nullable=false)
    private String nom;

    @Basic
    @Column(length=30, nullable=false)
    private String prenom;

    @Transient
    private Integer age;

    @Temporal(TemporalType.DATE)
    private Calendar dateNaissance;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(updatable=false)
    private Calendar dateCreation;

    @Lob
    @Basic(fetch=FetchType.LAZY)
    private byte[] image;

    // les getter/setter ont été omis pour faciliter la lecture


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Calendar getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Calendar dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public Calendar getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(Calendar dateCreation) {
        this.dateCreation = dateCreation;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}