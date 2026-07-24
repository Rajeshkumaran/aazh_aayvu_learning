package ObjectOrientedProgramming.ConceptsAndExamples.Abstraction;

// ABSTRACTION = expose WHAT something does, hide HOW it does it.
// The checkout code only ever calls pay() — it never sees bank APIs,
// card networks, or UPI flows. All of that complexity is hidden behind
// the IPayment contract.

// The CONTRACT — any payment method MUST implement pay().
// No body, no implementation detail — just WHAT it does.
interface IPayment {
    void pay(double amount);
}

// HOW a credit card pays — completely hidden from the caller.
class CreditCardPayment implements IPayment {
    private String cardNumber;

    CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Override
    public void pay(double amount) {
        String masked = "**** **** **** " + cardNumber.substring(cardNumber.length() - 4);
        System.out.println("Paid Rs." + amount + " via Credit Card → " + masked);
    }
}

// HOW a UPI payment works — a completely different internal flow,
// but the same single method the caller sees.
class UPIPayment implements IPayment {
    private String upiId;

    UPIPayment(String upiId) {
        this.upiId = upiId;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paid Rs." + amount + " via UPI → " + upiId);
    }
}

public class AbstractionDemo {

    // checkout() is completely decoupled from any payment implementation.
    // Swap CreditCard for UPI, add CryptoPay tomorrow — this method never changes.
    static void checkout(IPayment payment, double amount) {
        System.out.println("Processing checkout...");
        payment.pay(amount);
        System.out.println("Payment complete.\n");
    }

    public static void main(String[] args) {
        IPayment creditCard = new CreditCardPayment("1234567890123456");
        IPayment upi        = new UPIPayment("arjun@okaxis");

        checkout(creditCard, 499.00);
        checkout(upi,        320.00);

        // Both objects are treated identically by checkout()
        // because they share the IPayment contract — that's abstraction.
    }
}

