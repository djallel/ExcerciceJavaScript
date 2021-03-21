package com;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import java.util.List;

public class monUniteDePersistance
{

    public static void main(String[] args) {
        EntityManager em = Persistence
                .createEntityManagerFactory("com.monUniteDePersistance").createEntityManager();


        em.getTransaction().begin();


        Individu individu = new Individu();
        individu.setPrenom("John");
        individu.setNom("Smith");

// Demande d'insertion dans la base de données
        em.persist(individu);
        List<Individu> individus = null;
        individus = em.createNativeQuery("select * from individu", Individu.class)
                .getResultList();

// Demande de chargement d'une entité.
// Le second paramètre correspond à la valeur de la clé de l'entité recherchée.
        individu = em.find(Individu.class, individu.getId());

// Demande de suppression (delete)
        em.remove(individu);

        em.getTransaction().commit();
    }
}
