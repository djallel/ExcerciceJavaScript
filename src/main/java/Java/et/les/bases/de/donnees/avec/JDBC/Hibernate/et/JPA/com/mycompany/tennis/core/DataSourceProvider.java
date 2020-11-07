package Java.et.les.bases.de.donnees.avec.JDBC.Hibernate.et.JPA.com.mycompany.tennis.core;

import org.apache.commons.dbcp.BasicDataSource;

import javax.sql.DataSource;

public class DataSourceProvider {

    private static BasicDataSource singleDataSource;

    public static DataSource getSingleDataSourceInstance(){
        if (singleDataSource==null){
            singleDataSource=new BasicDataSource();
            singleDataSource.setInitialSize(5);
            singleDataSource.setUrl("jdbc:mysql://localhost:3306/tennis?useSSL=false&useLegacyDatetimeCode=false&serverTimezone=Europe/Paris");

            singleDataSource.setUsername("root");
            singleDataSource.setPassword("root");
        }
        return singleDataSource;
    }
}
