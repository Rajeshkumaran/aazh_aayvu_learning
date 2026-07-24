package ObjectOrientedProgramming.ConceptsAndExamples.Inheritance;

import ObjectOrientedProgramming.models.Car;

public class InheritanceDemo {
    public static void main(String[] args) {
        Car v1 = new Car("TN18 AE1111", "Skoda Kushaq");
        Car v2 = new Car("TN18 AE1131", "Skoda Kylaq");

        v1.openBoot();
        v2.openBoot();

        System.out.println("Model: " + v1.getModelName());
        System.out.println("Car fare for 10 km: Rs." + v1.calculateFare(10));
    }
}
