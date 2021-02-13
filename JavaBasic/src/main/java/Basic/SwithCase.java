package Basic;

public class SwithCase {

    private static int nb = 5;

    public static void main(String[] args) {
        /**
         * --Debut-switchCase_nbAbsentDuCase_SansBreak_SansDefault----------------
         * nb est 5
         * nb est 0
         * -------------------
         * --Debut-switchCase_nbAbsentDuCase_SansBreak_AvecDefault----------------
         * nb est 0
         * nb est 0
         * cette valeur ne corresponds à aucun cas précis
         * -------------------
         * --Debut-switchCase_nbAbsentDuCase_AvecBreak_SansDefault----------------
         * nb est 0
         * nb est 0
         * -------------------
         * --Debut-switchCase_nbAbsentDuCase_AvecBreak_AvecDefault----------------
         * cette valeur ne corresponds à aucun cas précis
         * -------------------
         * --Debut-switchCase_nbDansCase_SansBreak_SansDefault----------------
         * nb est 0
         * nb est 5
         * 5
         * 6
         * 7
         * -------------------
         * --Debut-switchCase_nbDansCase_SansBreak_AvecDefault----------------
         * 5
         * 6
         * 7
         * cette valeur ne corresponds à aucun cas précis
         * -------------------
         * --Debut-switchCase_nbDansCase_AvecBreak_SansDefault----------------
         * nb est 5
         * nb est 5
         * 5
         * -------------------
         * --Debut-switchCase_nbDansCase_AvecBreak_AvecDefault----------------
         * 5
         * -------------------
         *
         * Process finished with exit code 0
         */


//                * 000
        /**
         * --Debut-switchCase_nbAbsentDuCase_SansBreak_SansDefault----------------
         * nb est 5
         * nb est 0
         * -------------------
         */
        System.out.println("--Debut-switchCase_nbAbsentDuCase_SansBreak_SansDefault----------------");
        switchCase_nbAbsentDuCase_SansBreak_SansDefault();
        System.out.println("-------------------");
//                * 001
        /**
         * --Debut-switchCase_nbAbsentDuCase_SansBreak_AvecDefault----------------
         * nb est 0
         * nb est 0
         * cette valeur ne corresponds à aucun cas précis
         * -------------------
         */
        System.out.println("--Debut-switchCase_nbAbsentDuCase_SansBreak_AvecDefault----------------");
        switchCase_nbAbsentDuCase_SansBreak_AvecDefault();
        System.out.println("-------------------");

//                * 010
        /**
         * --Debut-switchCase_nbAbsentDuCase_AvecBreak_SansDefault----------------
         * nb est 0
         * nb est 0
         * -------------------
         */
        System.out.println("--Debut-switchCase_nbAbsentDuCase_AvecBreak_SansDefault----------------");
        switchCase_nbAbsentDuCase_AvecBreak_SansDefault();
        System.out.println("-------------------");
//                * 011
        System.out.println("--Debut-switchCase_nbAbsentDuCase_AvecBreak_AvecDefault----------------");
        switchCase_nbAbsentDuCase_AvecBreak_AvecDefault();
        System.out.println("-------------------");
//                * 100
        System.out.println("--Debut-switchCase_nbDansCase_SansBreak_SansDefault----------------");
        switchCase_nbDansCase_SansBreak_SansDefault();
        System.out.println("-------------------");
//                * 101
        System.out.println("--Debut-switchCase_nbDansCase_SansBreak_AvecDefault----------------");
        switchCase_nbDansCase_SansBreak_AvecDefault();
        System.out.println("-------------------");
//                * 110
        System.out.println("--Debut-switchCase_nbDansCase_AvecBreak_SansDefault----------------");
        switchCase_nbDansCase_AvecBreak_SansDefault();
        System.out.println("-------------------");
//                * 111
        System.out.println("--Debut-switchCase_nbDansCase_AvecBreak_AvecDefault----------------");
        switchCase_nbDansCase_AvecBreak_AvecDefault();
        System.out.println("-------------------");


    }

    private static void switchCase_nbDansCase_AvecBreak_SansDefault() {
        System.out.printf("nb est %s %n",nb );
        int nbAbsentDuCase=nb=5;
        System.out.printf("nb est %s %n",nb );
        switch (nb){
            case (5):
            {
                System.out.println("5");
                break;
            }
            case (6):
            {
                System.out.println("6");
                break;
            }
            case (7):
            {
                System.out.println("7");
                break;
            }
        }
    }

    private static void switchCase_nbDansCase_SansBreak_SansDefault() {
        System.out.printf("nb est %s %n",nb );
        int nbAbsentDuCase=nb=5;
        System.out.printf("nb est %s %n",nb );
        switch (nb){
            case (5):
            {
                System.out.println("5");
            }
            case (6):
            {
                System.out.println("6");
            }
            case (7):
            {
                System.out.println("7");
            }
        }
    }

    private static void switchCase_nbAbsentDuCase_SansBreak_SansDefault() {
        System.out.printf("nb est %s %n",nb );
        int nbAbsentDuCase=nb=0;
        System.out.printf("nb est %s %n",nb );
        switch (nb){
            case (5):
            {
                System.out.println("5");
            }
            case (6):
            {
                System.out.println("6");
            }
            case (7):
            {
                System.out.println("7");
            }
        }
    }

    private static void switchCase_nbAbsentDuCase_AvecBreak_SansDefault() {
        System.out.printf("nb est %s %n",nb );
        int nbAbsentDuCase=nb=0;
        System.out.printf("nb est %s %n",nb );
        switch (nb){
            case (5):
            {
                System.out.println("5");
                break; // si je n'avais pas fait ce break, j'aurai eu l'affichage de tous les cas 5 , 6 7
            }
            case (6):
            {
                System.out.println("6");
                break;
            }
            case (7):
            {
                System.out.println("7");
                break;
            }
        }
    }

    private static void switchCase_nbAbsentDuCase_AvecBreak_AvecDefault() {
        switch (nb=0){
            case (5):
            {
                System.out.println("5");
                break; // si je n'avais pas fait ce break, j'aurai eu l'affichage de tous les cas 5 , 6 7
            }
            case (6):
            {
                System.out.println("6");
                break;
            }
            case (7):
            {
                System.out.println("7");
                break;
            }
            default:
                System.out.println("cette valeur ne corresponds à aucun cas précis");

        }
    }

    static void switchCase_nbDansCase_AvecBreak_AvecDefault(){
        switch (nb=5){
            case (5):
            {
                System.out.println("5");
                break; // si je n'avais pas fait ce break, j'aurai eu l'affichage de tous les cas 5 , 6 7
            }
            case (6):
            {
                System.out.println("6");
                break;
            }
            case (7):
            {
                System.out.println("7");
                break;
            }
            default:
                System.out.println("cette valeur ne corresponds à aucun cas précis");

        }
    }

    static void switchCase_nbDansCase_SansBreak_AvecDefault(){
        switch (nb=5){
            case (5):
            {
                System.out.println("5");
            }
            case (6):
            {
                System.out.println("6");
            }
            case (7):
            {
                System.out.println("7");
            }
            default:
                System.out.println("cette valeur ne corresponds à aucun cas précis");

        }
    }

    static void switchCase_nbAbsentDuCase_SansBreak_AvecDefault(){
        System.out.printf("nb est %s %n",nb );
        int nbAbsentDuCase=nb=0;
        System.out.printf("nb est %s %n",nb );
//        nb=nbAbsentDuCase;
        switch (nb){
            case (5):
            {
                System.out.println("5");
            }
            case (6):
            {
                System.out.println("6");
            }
            case (7):
            {
                System.out.println("7");
            }
            default:
                System.out.println("cette valeur ne corresponds à aucun cas précis");

        }
    }

}
