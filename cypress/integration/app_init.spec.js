describe("App initialization", () => {

    beforeEach( () => {
        cy.visit("/")
    })

    it("Loads todos on page load", () => {
        cy.get(".todos")
        .should("exist")
        .and("have.length", 4)
    });
    it("should be focused on a new todo input", () => {
        cy.focused().should("exist")
    })
})