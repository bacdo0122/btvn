
describe('empty spec', () => {
    it('passes', () => {
      cy.viewport(1580,1000)
      //login
      cy.visit('http://localhost:3001/')
      cy.wait(3000);
      cy.findByRole('button', {  name: /log in/i}).should('be.disabled')
      cy.findByRole('textbox').type('bacdo@gmail.com')
      cy.findByPlaceholderText(/enter your password/i).type("123456")
      cy.findByRole('button', {  name: /log in/i}).click();
      
      //actor
      cy.findByTestId('RecentActorsIcon').click();
      cy.wait(3000)
      cy.get('#Actors').findByRole("grid").find('div.MuiDataGrid-row').should('have.length', '2')
  
      //search actor

    //   cy.findByRole('textbox', {  name: /search/i}).type("le").type('{enter}');
    //   cy.wait(3000);
    //   cy.findByRole('textbox', {  name: /search/i}).clear().type('{enter}');
    //   cy.wait(3000)
    //   cy.findByRole('combobox', {  name: /actor/i}).click();
    //   cy.wait(3000); 
    //   cy.findByRole('option', {  name: /do van bac/i}).click();
    //   cy.wait(3000); 
    //   cy.findByTestId('CloseIcon').click();
  
      //create film
      // cy.findByRole('button', {  name: /create/i}).click();
      // cy.findByPlaceholderText(/enter name/i).type("She-Hulk: Attorney at Law");
      // cy.findByPlaceholderText(/enter id/i).type(20615);
      // cy.findByPlaceholderText(/enter domain Type/i).type(1);
      // cy.wait(3000);
      // cy.get('[data-test=banner]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /trending now/i}).click();
  
      // cy.get('[data-test=actor]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /do van bac/i}).click();
  
      // cy.get('[data-test=category]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /action/i}).click();
  
      // cy.get('[data-test=category]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /adventure/i}).click();
  
      // cy.get('[data-test=category]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /comedy/i}).click();
  
      // cy.get('[data-test=category]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /drama/i}).click();
  
      // cy.get('[data-test=category]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /sci-fi/i}).click();
  
      // cy.get('[data-test=btn-film]').click();
  
      //delete film
      // cy.wait(3000);
      // cy.findByRole('textbox', {  name: /search/i}).type("she-hulk").type('{enter}');
      // cy.wait(3000);
      // cy.findByRole('row', {  name: /Select row She-Hulk: Attorney at Law do van bac Comedy,Drama,Action,Sci-Fi,Adventure Trending Now America 5 2022/i}).within(()=>{
      //   cy.get("div").last().get("div[role=menu]").get("[aria-label=Delete]").click()
      // })
  
  
      //edit film
      // cy.findByRole('textbox', {  name: /search/i}).type("Who Are You: School 2015[Vietsub]").type('{enter}');
      //  cy.wait(3000);
      //  cy.findByRole("button", {name : /Edit/i}).click();
      //  cy.findByRole('row', {  name:  /Select row who are you: school 2015\[vietsub\] le viet hoang,do van bac adventure,comedy stand up to bullying! south korea 8 2015/i}).within(()=>{
      //   cy.get("div").last().get("div[role=menu]").get("[aria-label=Edit]").click()
      // })
      // cy.wait(3000);
      // cy.get('[data-test=banner]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /trending now/i}).click();
      // cy.get('[data-test=category]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /drama/i}).click();
  
      // cy.get('[data-test=category]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /romance/i}).click();
  
      // cy.get('[data-test=category]').findByRole("combobox", {name: ""}).click();
      // cy.findByRole('option', {  name: /suspence/i}).click();
      // cy.get('[data-test=btn-edit-film]').click();
  
  
  
      //detail
    //   cy.findByRole('textbox', {  name: /search/i}).type("Who Are You: School 2015[Vietsub]").type('{enter}');
    //   cy.wait(3000);
    //   cy.findByRole("button", {name : /detail/i}).click();
    //   cy.findByTestId('HighlightOffOutlinedIcon').click();
  
    }) 
  })