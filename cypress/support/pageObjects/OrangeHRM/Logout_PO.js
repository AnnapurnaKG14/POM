class Logout_PO
{
    logout_now()
    {
        cy.contains('Logout').click()

    }
}

export default Logout_PO;