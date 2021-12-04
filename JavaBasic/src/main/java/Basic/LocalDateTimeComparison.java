package Basic;

import java.time.LocalDateTime;

public class LocalDateTimeComparison
{

    public  void LocalDateTimeComparison() {

        LocalDateTime dateTimeOne = LocalDateTime.parse("2019-04-28T22:32:38.536");

        LocalDateTime dateTimeTwo = LocalDateTime.parse("2017-01-14T15:32:56.000");

        boolean isBefore = dateTimeOne.isBefore(dateTimeTwo);
        System.out.println("dateTimeOne is dateTimeTwo fourApr :: " + isBefore); //dateTimeOne is dateTimeTwo fourApr :: false

        boolean isAfter = dateTimeOne.isAfter(dateTimeTwo);
        System.out.println("dateTimeOne is after dateTimeTwo :: " + isAfter); //dateTimeOne is after dateTimeTwo :: true

        boolean isEqual = dateTimeOne.isEqual(dateTimeTwo);
        System.out.println("dateTimeOne is equal to dateTimeTwo :: " + isEqual); //dateTimeOne is equal to dateTimeTwo :: false
    }
}
