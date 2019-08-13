describe("Input form ", () => {
    const textInput = "Buy Milk";

    beforeEach(() => {
        cy.visit("/");
    });

    it("Accepts user input", () => {
        cy.get("[data-cy-input]")
        .type(textInput)
        .should("have.value", textInput)
    });

    it("Submits a new todo", () => {
        cy.get("[data-cy-input]")
        .type(textInput)
        .type("{enter}")
        .should("have.value", "")

        cy.get("[data-cy-input]")
        .type(textInput)

        cy.get("[data-cy-submit]")
        .click()

        cy.get("[data-cy-input]")
        .should("have.value", "");

        cy.get(".todos")
        .should("be.visible")
        .should("have.length", 6)
        .eq(-1) //Find last/newest dom element in array
        .should("contain", textInput)
    });
})