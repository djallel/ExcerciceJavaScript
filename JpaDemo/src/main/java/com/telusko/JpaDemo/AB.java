package com.telusko.JpaDemo;

public class AB {

    Grande x = new Grande();
    Petite y = x; // upcasting
    Grande z=(Grande)y; // downCasting

    Petite ptiteGrande = new Grande();
    Petite upcasting = ptiteGrande;
//    Grande grangePetite = new Petite(); // ERREUR
    Grande downCasting = (Grande) new Petite();

    //public class Grande extends Petite
    //public class Grande
    //public class Petite
}
