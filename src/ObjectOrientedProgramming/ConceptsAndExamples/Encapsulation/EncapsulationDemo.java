package ObjectOrientedProgramming.ConceptsAndExamples.Encapsulation;

import ObjectOrientedProgramming.models.Vehicle;

public class EncapsulationDemo {
    public static void main(String[] args) {
        Vehicle v1 = new Vehicle("TN18 AE1111", "Skoda Kushaq");
        Vehicle v2 = new Vehicle("TN19 AE1211", "Royal Enfield Meteor 350");

        System.out.println("Fare for " + v1.getModelName() + " is Rs." + v1.calculateFare(5));
        System.out.println("Fare for " + v2.getModelName() + " is Rs." + v2.calculateFare(15));
    }
}
