package ObjectOrientedProgramming.models;

import ObjectOrientedProgramming.interfaces.RideService;

public class Auto extends Vehicle implements RideService {

    public Auto(String plateNumber, String model) {
        super(plateNumber, model);
    }

    public void openBoot() {
        System.out.println("Boot is opened " + super.getModelName());
    }

    @Override
    public double calculateFare(double km) {
        return km * 15;
    }

    @Override
    public void bookRide() {
        System.out.println("Auto ride booked: " + super.getModelName() + " (" + super.getPlateNumber() + ")");
    }

    @Override
    public void endRide() {
        System.out.println("Auto ride ended: " + super.getModelName());
    }
}
