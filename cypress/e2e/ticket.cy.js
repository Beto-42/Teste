describe('Acessar site de passagem', () => {
  it('Acessar site', () => {
    cy.visit('https://demo.guru99.com/test/newtours/');

    cy.cadastrar_usuario();
   // cy.acessar_site();

    cy.selecionar_passagem();

    //  cy.get('b > select').select('2');

                  
    //  cy.get(':nth-child(4) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
    //  .select('London').should('have.value', 'London');

    //  cy.get('[name="fromMonth"]').select('February');

    //  cy.get('[name="fromDay"]').select('20');

    //  cy.get(':nth-child(6) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
    //  .select('Portland').should('have.value', 'Portland');

    //  cy.get('[name="toMonth"]').select('August');
    //  cy.get('[name="toDay"]').select('4');

    //  cy.get('[value="Business"]').click();

    //  cy.get(':nth-child(10) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
    //    .select('Blue Skies Airlines').should('have.value', 'Blue Skies Airlines');

    //  cy.get('td > input').click();

    //  cy.get(':nth-child(2) > td > a > img').click();
                 
    //  cy.acessar_site();

    cy.acessar_site();

    cy.selecionar_passagem02();

      cy.acessar_site();

      cy.selecionar_passagem03();

      cy.acessar_site();

      cy.selecionar_passagem04();


      
      })

     
      
  })
  
