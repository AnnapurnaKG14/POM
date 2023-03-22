class Link_PO
{
    link_click(links)
    {
        cy.contains(links).click()
        cy.get(".oxd-userdropdown-tab").click()
    }
}

export default Link_PO;