package ObjectOrientedProgramming.models;

public class Vehicle {
    private String plateNumber;
    private String model;

    public Vehicle(String plateNumber, String model) {
        this.plateNumber = plateNumber;
        this.model = model;
    }

    public String getPlateNumber() { return plateNumber; }
    public String getModelName()   { return model; }

    public double calculateFare(double km) {
        return km * 10;
    }

    // Overloaded: applies a surge multiplier on top of the base fare.
    public double calculateFare(double km, double surge) {
        return calculateFare(km) * surge;
    }
}
