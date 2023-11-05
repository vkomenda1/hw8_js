import userAuthorization from '../fixtures/userAuthorization.json'

describe('Authorization fields validation', () => {
    userAuthorization.forEach(({ testData, expected }) => {
        it(`Authorization without field ${testData.locator}`, () => {
            cy.visit('/');
            cy.get('.topnavbar [data-id="menu_account"]').click();
            cy.get(testData.locator).type(testData.data);
            cy.get('button[title="Login"]').click();
            cy.get(expected.locator).should('contain', expected.helpBlock);
        })
    })
})