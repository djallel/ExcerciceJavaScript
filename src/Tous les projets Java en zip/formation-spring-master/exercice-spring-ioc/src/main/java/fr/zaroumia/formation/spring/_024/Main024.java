package fr.zaroumia.formation.spring._024;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main024 {
	public static void main(final String[] args) {
		ApplicationContext applicationContext = new AnnotationConfigApplicationContext(Configuration024.class);
	}
}
