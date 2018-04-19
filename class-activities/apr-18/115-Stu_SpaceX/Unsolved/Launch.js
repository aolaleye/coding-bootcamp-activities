export default class Launch {
    constructor (details, number, succeeded, year) {
        this.details = details;
        this.number = flight_number;
        this.succeeded = launch_success;
        this.year = launch_year;
    }

    wasFailure() {
        if (this.succeeded === false) {
            return false;
        } else {
            return true;
        }
        
    }

    launchInfo() {
        return `Launch Year: ${this.year}
Launch Number: ${this.number}
Launch Details: ${this.details}`;
    }

}