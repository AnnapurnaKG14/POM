///<reference types="@cypress/xpath"/>
import HomePage_PO from "../support/pageObjects/OrangeHRM/Homepage_PO";
import Link_PO from "../support/pageObjects/OrangeHRM/Link_PO";
import Logout_PO from "../support/pageObjects/OrangeHRM/Logout_PO";

describe('orange hrm', () => {
    const homepage_po = new HomePage_PO();
    const logout_po = new Logout_PO();
    const link_po = new Link_PO();


    beforeEach(function(){
        homepage_po.visitHomepage();
        homepage_po.Login();   
        cy.wait(9000)
    })

    it('full', () => {
        //cy.SelectName('Admin')
        cy.wait(9000)
        link_po.link_click()
        logout_po.logout_now()   
    });
});

// 10-manual testing 5jira test case test plan sdlc 
// 15 cypress
// 15 Api 
// 10 mobile
