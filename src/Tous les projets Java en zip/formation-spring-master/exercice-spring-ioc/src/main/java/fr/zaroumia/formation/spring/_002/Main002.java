package fr.zaroumia.formation.spring._002;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main002 {
	public static void main(final String[] args) {
		// Cr�er une instance de ApplicationContext
		ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("appContext_002.xml");
		applicationContext.setDisplayName("Context d'aplication");
		// R�cup�rer un bean de type MonBean
		MonBean bean = applicationContext.getBean(MonBean.class);

		// Appeler la m�thode
		bean.helloWorld();

	}
}
