const {LoginPage} = require ('./LoginPage');
const {dashboardPage} = require ('./DashboardPage'); 


class POManager
{
    constructor()
    {
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
    }
}