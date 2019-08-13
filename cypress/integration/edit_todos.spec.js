describe("Edit todos", () => {
    beforeEach(() => {
        cy.visit("/")
    });

    it("Completes a todo", () => {
        cy.get(".todos")
        .find("i#done") // Searches array of elements for an i tag with an id of "done"
        .first() //Gets first item in array of done elements
        .click();

        cy.get(".todos")
        .first()
        .find("p") //Finds p tag of the first "todo" element
        .should("have.css", "text-decoration");
    });

    it("Edits a todo", () => {
        const inputText = "Edited todo";

        cy.get(".todos")
        .find("i#edit") 
        .first()
        .click();

        cy.get(".todos")
        .first()
        .find("input") //Searches for input tag on select dom element
        .should("exist")
        .clear() //Clears input of values
        .type(inputText)
        .type("{enter}")

        cy.get(".todos")
        .first()
        .contains(inputText);
    });

    it("Deletes a todo", () => {
        cy.get(".todos")
        .find("i#delete")
        .first()
        .click();

        cy.get(".todos")
        .should("have.length", 3);
    });
});