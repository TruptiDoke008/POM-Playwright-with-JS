const { LoginPg } = require('./LoginPg');
const { dashboardPg } = require('./dashboardPg');
const { Checkout } = require('./Checkout');
const { FinalOrderSubmission } = require('./FinalOrderSubmission');

class POManager {

    constructor(page) {
        this.page = page;
        this.loginPg = new LoginPg(page);
        this.dashboardPg = new dashboardPg(page);
        this.checkout = new Checkout(page);
        this.orderSubmission = new FinalOrderSubmission(page);
    }

    getLoginPg() {
        return this.loginPg;
    }

    getdashboardPg() {
        return this.dashboardPg;
    }

    getcheckoutPg() {
        return this.checkout;
    }

    getOrderSubmission() {
        return this.orderSubmission;
    }
}

module.exports = { POManager };
