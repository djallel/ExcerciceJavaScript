package Basic;

public class EqualsVsEgaleEgale {
    public static void main(String[] args)
    {
        String s1 = new String("HELLO");
        String s2 = new String("HELLO");
        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));

        /**
         * (s1 == s2);
         * Lorsque nous utilisons l'opérateur == pour la comparaison s1 et s2,
         * le résultat est faux car les deux ont des adresses différentes en mémoire.
         *
         *s1.equals(s2)
         * En utilisant equal, le résultat est vrai car il ne compare que les valeurs données dans s1 et s2.
         */
    }

}
