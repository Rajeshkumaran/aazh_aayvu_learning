package ObjectOrientedProgramming.ConceptsAndExamples.Polymorphism;

import ObjectOrientedProgramming.models.Vehicle;
import ObjectOrientedProgramming.models.Car;
import ObjectOrientedProgramming.models.Auto;

public class PolymorphismDemo {
    public static void main(String[] args) {
        Vehicle v1 = new Car("TN 09 AR 1234", "BMW XYZ");
        Vehicle v2 = new Auto("TN 09 AR 1235", "Bajaj");

        System.out.println("Fare for " + v1.getModelName() + " is Rs." + v1.calculateFare(5));
        System.out.println("Fare for " + v2.getModelName() + " is Rs." + v2.calculateFare(5));
        System.out.println("Fare for " + v2.getModelName() + " with surge is Rs." + v2.calculateFare(5, 1.5));
    }
}
