/** Entry point */
function main() {
    const rooms = Number(prompt("Nombre de salles en activité")) || 0;
    const days = Number(prompt("Nombre de jours ouvert")) || 0;
    alert(`Prix minimum d'un billet : ${minTicketPrice(rooms, days)}`);
}

/**
 * Computes the minimum price for a ticket to recoup costs.
 * @param {number} rooms
 * @param {number} days
 * @returns {number}
 */
function minTicketPrice(rooms, days) {
    const hoursPerDay = 8;
    const hours = hoursPerDay * days;
    const sessionLength = 2;
    const sessionsPerDay = hoursPerDay / sessionLength;
    const seatsPerRoom = 150;
    const sessionsPerYear = rooms * sessionsPerDay * days;
    const ticketsPerYear = sessionsPerYear * seatsPerRoom;
    return (salaries(rooms, hours) + distributorFees(sessionsPerYear))
        / ticketsPerYear;
}

expect(minTicketPrice(10, 250)).toBe(1.94);
expect(minTicketPrice(2, 125)).toBe(2.1);
expect(minTicketPrice(50, 200)).toBe(1.935);
expect(minTicketPrice(5, 50)).toBe(2);

/**
 * Computes the number of supervisors needed for a given number of cashiers.
 * @param {number} cashiers
 * @returns {number}
 */
function supervisors(cashiers) {
    const cashiersPerSupervisor = 10;
    return Math.ceil(cashiers / cashiersPerSupervisor);
}

expect(supervisors(1)).toBe(1);
expect(supervisors(9)).toBe(1);
expect(supervisors(11)).toBe(2);
expect(supervisors(21)).toBe(3);

/**
 * Computes annual salaries.
 * @param {number} rooms
 * @param {number} hours
 * @returns {number}
 */
function salaries(rooms, hours) {
    const cashiersPerRoom = 2;
    const cashiers = rooms * cashiersPerRoom;
    const cashierRate = 20;
    const cashierSalaries = cashiers * cashierRate * hours;

    const supervisorRate = 25;
    const supervisorsSalaries = supervisors(cashiers) * supervisorRate * hours;

    return cashierSalaries + supervisorsSalaries;
}

expect(salaries(1, 1)).toBe(65);
expect(salaries(5, 1)).toBe(225);

/**
 * Computes annual distributor fees.
 * @param {number} sessions
 * @returns {number}
 */
function distributorFees(sessions) {
    const annualLicense = 10000;
    const feePerSession = 200;
    return annualLicense + (feePerSession * sessions);
}

expect(distributorFees(0)).toBe(10000);
expect(distributorFees(5)).toBe(11000);
