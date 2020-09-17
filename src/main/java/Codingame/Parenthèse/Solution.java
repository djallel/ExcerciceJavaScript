import java.util.*;
import java.io.*;
import java.math. *;

class Solution {
     private static HashMap<Character, Character> couples = new HashMap<>();

    static {
        couples.put('}', '{');
        couples.put(')', '(');
        couples.put(']', '[');
    }

    public static void main(String args[]) {

        String toto = "foo";
        int i =0;
        System.out.println(i++);

        if(toto.equalsIgnoreCase("foo")){

        }

        Scanner in = new Scanner(System.in);
        String expression = in.next();

        Stack<Character> openers = new Stack<>();
        boolean openersMatchedClosers = true;
        // 1 - Parcourir chaque char de la chaine
        for (Character c : expression.toCharArray()) {
            //2 - Si c'est une ouverture, on la pousse dans une stack
            if (couples.values().contains(c)) {
                openers.add(c);
            }
            // 3 - Si c'est une fermeture on s'assure qu'elle est du même type que la dernière ouverture de la stack
            if (couples.keySet().contains(c) && ( openers.isEmpty() || openers.pop() != couples.get(c) ) ) {
                openersMatchedClosers = false;
                break;
            }
        }
            // 4 - Enfin, si tout est OK jusque-là, s'assurer qu'il n'y pas non plus d'ouvertures non fermées (<==> stack non vide)
            openersMatchedClosers &= openers.isEmpty();
            System.out.println(openersMatchedClosers);
        }
        }