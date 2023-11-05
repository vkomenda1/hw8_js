import userRegistration from '../fixtures/userRegistration.json'

describe('Registration fields validation ', () => {
  userRegistration.regularFields.forEach(({ testData, expected }) => {
    it(`Registration without field ${testData.locator}`, () => {
      cy.visit('/');
      cy.get('.topnavbar [data-id="menu_account"]').click();
      cy.get('#accountFrm button').click();
      cy.get(testData.locator).type(testData.data);
      cy.get('#AccountFrm_newsletter1').check();
      cy.get('#AccountFrm_agree').check();
      cy.get('button[title="Continue"]').click();
      cy.get(expected.locator).should('contain', expected.helpBlock);
    })
  })
})

describe('Registration fields Country validation ', () => {
  userRegistration.countryField.forEach(({ testData, expected }) => {
    it(`Registration without field ${testData.locator}`, () => {
      cy.visit('/');
      cy.get('.topnavbar [data-id="menu_account"]').click();
      cy.get('#accountFrm button').click();
      cy.get(testData.locator);
      cy.get('#AccountFrm_newsletter1').check();
      cy.get('#AccountFrm_agree').check();
      cy.get('button[title="Continue"]').click();
      cy.get('#AccountFrm_country_id').select('FALSE');
      cy.get('button[title="Continue"]').click();
      cy.get(expected.locator).should('contain', expected.helpBlock);
    })
  })
})
