class HomePage_PO
{
    visitHomepage(){
        cy.wait(9000)
        cy.visit(Cypress.env("OrangeHRM_HomePage"));
    }

    Login()
    {
        cy.get('input[name="username"][placeholder="Username"]').type("Admin")
        cy.get('input[name="password"][placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()
    }
}

export default HomePage_PO;