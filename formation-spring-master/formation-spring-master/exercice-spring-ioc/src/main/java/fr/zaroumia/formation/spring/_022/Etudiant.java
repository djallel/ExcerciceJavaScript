package fr.zaroumia.formation.spring._022;

public class Etudiant {

	public Etudiant() {
		System.out.println("constructeur par defaut de Etudiant");
	}

	private void init() {
		System.out.println("la m�thode init est appel�e");
	}

	private void destroy() {
		System.out.println("la m�thode destroy est appel�e");
	}
}
