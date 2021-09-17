package Basic;

import org.springframework.util.StringUtils;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.time.LocalDate;
import java.util.GregorianCalendar;
import java.util.Locale;
import java.util.regex.Pattern;

public class Brouillon {

    public static void main(String[] args) {
       String nom= "Jean-François";
        nomCompose(nom);

        boolean zz = isValidEmailAddress("b_tabet@esi.dz");
        System.out.println(zz);
    }

    private static void nomCompose(String nom) {
        String initial= String.valueOf(nom.charAt(0));
        for (int i = 0, n = nom.length(); i < n; i++) {
            char c = nom.charAt(i);
             if("-".equals(new String(new char[]{c}))){
                initial= (initial+String.valueOf(nom.charAt(i+1))).toLowerCase();
            }
        }
        System.out.println("ini "+initial);

        Pattern.compile("'").matcher("COUCOU'cc").replaceAll("");

        System.out.println(Pattern.compile("'").matcher("COUCOU'cc").replaceAll(""));
    }

    private String appostrophe(String nom) {


       return Pattern.compile("'").matcher(nom).replaceAll("");
    }

    private static boolean isValidEmailAddress(String email) {
        boolean result = true;
        try {
            InternetAddress emailAddr = new InternetAddress(email);
            emailAddr.validate();
        } catch (AddressException ex) {
            result = false;
        }
        return result;
    }
}
