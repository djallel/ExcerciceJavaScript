package Basic;

public class BoucleWhile {

    public static void main(MainClass... args) {

        for (int nbPlanetes = 8; nbPlanetes <= 10; nbPlanetes++) {
            switch (nbPlanetes) {
                case 8:
                    System.out.println("Aux dernières nouvelles, le nombre total de planètes dans le système solaire est de : " + nbPlanetes);
                    break;
                case 9:
                    System.out.println("Il y a quelques années cependant, elles étaient au nombre de : " + nbPlanetes);
                    break;
                default:
                    System.out.println("Au cours de l'ère moderne, le nombre de planètes n'a jamais été officiellement de : " + nbPlanetes);
            }
        }

        System.out.println("-----------------");
        int nbPlanetes = 8;
        while (nbPlanetes <= 10) {
            switch (nbPlanetes) {
                case 8:
                    System.out.println("Aux dernières nouvelles, le nombre total de planètes dans le système solaire est de : " + nbPlanetes);
                    break;
                case 9:
                    System.out.println("Il y a quelques années cependant, elles étaient au nombre de : " + nbPlanetes);
                    break;
                default:
                    System.out.println("Au cours de l'ère moderne, le nombre de planètes n'a jamais été officiellement de : " + nbPlanetes);
            }
            ++nbPlanetes;
        }

        System.out.println("-----------------");
        nbPlanetes = 8;
        do {
            switch (nbPlanetes) {
                case 8:
                    System.out.println("Aux dernières nouvelles, le nombre total de planètes dans le système solaire est de : " + nbPlanetes);
                    break;
                case 9:
                    System.out.println("Il y a quelques années cependant, elles étaient au nombre de : " + nbPlanetes);
                    break;
                default:
                    System.out.println("Au cours de l'ère moderne, le nombre de planètes n'a jamais été officiellement de : " + nbPlanetes);
            }
            ++nbPlanetes;
        }
        while (nbPlanetes <= 10);


    }
}
