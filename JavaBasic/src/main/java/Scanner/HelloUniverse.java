package Scanner;

import java.util.Scanner;

public class HelloUniverse {

    public static void main(String... args) {

        PlaneteTellurique mercure = new PlaneteTellurique("Mercure");
        PlaneteTellurique venus = new PlaneteTellurique("Venus");
        PlaneteTellurique terre = new PlaneteTellurique("Terre");
        PlaneteTellurique mars = new PlaneteTellurique("Mars");
        PlaneteGazeuse jupiter = new PlaneteGazeuse("Jupiter");
        PlaneteGazeuse saturne = new PlaneteGazeuse("Saturne");
        PlaneteGazeuse uranus = new PlaneteGazeuse("Uranus");
        PlaneteGazeuse neptune = new PlaneteGazeuse("Neptune");

        Vaisseau chasseur = new VaisseauDeGuerre("CHASSEUR");
        Vaisseau fregate = new VaisseauDeGuerre("FREGATE");
        fregate.nbPassagers=24;
        fregate.tonnageMax=50;
        Vaisseau croiseur = new VaisseauDeGuerre("CROISEUR");
        Vaisseau cargo = new VaisseauDeGuerre("CARGO");
        Vaisseau vaisseauMonde = new VaisseauCivil("VAISSEAU-MONDE");

        Scanner sc = new Scanner(System.in);
        System.out.println("Quel vaisseau souhaitez-vous selectionnerr ?");
        String vaisseauSelectionne = sc.nextLine();
        System.out.println("Sur quellle planete voulez-vous vous poser Mercure, Venus, Terre,Mars,Jupiter,Saturne,Uranus,Neptune ?");
        String planeteSelectionne = sc.nextLine();
        System.out.println("Quel tonnage souhaitez-vous embarquer ?");
        int tonnage = sc.nextInt();

        Vaisseau vaisseau = null;
        switch (vaisseauSelectionne) {
            case ("CHASSEUR"):
                vaisseau = chasseur;
                break;
            case ("FREGATE"):
                vaisseau = fregate;
                break;
            case ("CROISEUR"):
                vaisseau = croiseur;
                break;
            case ("CARGO"):
                vaisseau = cargo;
                break;
            case ("VAISSEAU-MONDE"):
                vaisseau = vaisseauMonde;
                break;
        }

        PlaneteTellurique planete = null;
        switch (planeteSelectionne) {
            case ("Mercure"):
                planete = mercure;
                break;
            case ("Venus"):
                planete = venus;
                break;
            case ("Terre"):
                planete = planete;
                break;
            case ("Mars"):
                planete = mars;
                break;

        }
        planete.accueillirVaisseau(vaisseau);

        int rejet=vaisseau.emporterCargaison(tonnage);
        System.out.println("le rejet est de "+rejet);


    }

}
