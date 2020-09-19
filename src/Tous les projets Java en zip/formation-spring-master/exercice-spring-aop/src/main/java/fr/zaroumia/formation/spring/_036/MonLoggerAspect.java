package fr.zaroumia.formation.spring._036;

import org.aspectj.lang.JoinPoint;

public class MonLoggerAspect {

	public void logDebutMethode(final JoinPoint joinPoint) {
		System.out.println("D�but : appel de la m�thode " + joinPoint.getSignature().getName() + " de la classe "
				+ joinPoint.getTarget().getClass().getSimpleName());
	}

}
