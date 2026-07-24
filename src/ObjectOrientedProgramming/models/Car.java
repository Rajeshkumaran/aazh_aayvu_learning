package ObjectOrientedProgramming.models;

import ObjectOrientedProgramming.interfaces.RideService;

public class Car extends Vehicle implements RideService {

    public Car(String plateNumber, String model) {
        super(plateNumber, model);
    }

    public void openBoot() {
        System.out.println("Boot is opened " + super.getModelName());
    }

    @Override
    public double calculateFare(double km) {
        return km * 25;
    }

    @Override
    public void bookRide() {
        System.out.println("Car ride booked: " + super.getModelName() + " (" + super.getPlateNumber() + ")");
    }

    @Override
    public void endRide() {
        System.out.println("Car ride ended: " + super.getModelName());
    }
}
