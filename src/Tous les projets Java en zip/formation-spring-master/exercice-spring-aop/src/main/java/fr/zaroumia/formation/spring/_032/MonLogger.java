package fr.zaroumia.formation.spring._032;

public class MonLogger {

	public void LogDebutMethode(final String classe, final String methode) {
		System.out.println("D�but : appel de la m�thode " + methode + " dans la classe " + classe);
	}

	public void LogFinMethode(final String classe, final String methode) {
		System.out.println("Fin : appel de la m�thode " + methode + " dans la classe " + classe);
	}
}
