package com.telusko.JpaDemo;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class App2 {

    public static void main(String[] args) {
        System.out.println("coucou");

        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
                EntityManager em = emf.createEntityManager();

        Individu a = em.find(Individu.class, 1);
        System.out.println(a);
    }
}
