package Basic;

public class thisMotclé {

    static int courant = 10;


    static int incrementSansThis(int courant) {
        courant = courant + courant; //quand on a pas this=> priorité au argument de la méthode
        System.out.println("incrementSansThis : " + courant);
        return courant;
    }

    int incrementAvecthis(int courant) {
        this.courant = this.courant + courant; // on a this donc on prend "courant" de l'objet
        System.out.println("incrementAvecthis : " + courant);
        return courant;
    }

     public static void main(String[] args) {

        incrementSansThis(20);

    }


}
