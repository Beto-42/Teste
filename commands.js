
//Cadastrar usuário
Cypress.Commands.add("cadastrar_usuario" , () => {

    cy.get(':nth-child(10) > [colspan="2"] > table > tbody > tr > [width="100"] > font > a').click();

    cy.get(':nth-child(2) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input')
    .type('Beto');

    cy.get(':nth-child(3) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input')
    .type('Luiz de Oliveira');

    cy.get(':nth-child(4) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input')
    .type('44991625897');

    cy.get('#userName').type('roberto@gmail.com');

    cy.get(':nth-child(7) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input')
    .type('Avenida Mandacarú');

    cy.get(':nth-child(8) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input')
    .type('Maringá');

    cy.get(':nth-child(9) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input')
    .type('Paraná');

    cy.get(':nth-child(10) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input')
    .type('87080-580');

    cy.get('select').select('BRAZIL');

    cy.get('#email').type('beto');
    cy.get(':nth-child(14) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('123');
    cy.get(':nth-child(15) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('123');
    cy.get(':nth-child(17) > td > input').click();

    cy.get('td > :nth-child(2) > font > a').click();

    cy.get(':nth-child(1) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('beto');
    cy.get(':nth-child(2) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('123');
    cy.get(':nth-child(2) > [width="80"] > a').click();


});




// Login no site de passagens áreas
 Cypress.Commands.add("acessar_site", () => {
    cy.get(':nth-child(2) > [width="112"] > input').type("beto")

   cy.get(':nth-child(3) > [width="112"] > input').type("123")

    cy.get('div > input').click()

     

});

// Selecionando passagens, destino, dia da viagem...
 Cypress.Commands.add('selecionar_passagem', () => {

    cy.get(':nth-child(2) > [width="80"] > a').click();

    cy.get('b > select').select('2');
                  
      cy.get(':nth-child(4) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
      .select('London').should('have.value', 'London');

      cy.get('[name="fromMonth"]').select('February');

      cy.get('[name="fromDay"]').select('20');

      cy.get(':nth-child(6) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
      .select('Portland').should('have.value', 'Portland');

      cy.get('[name="toMonth"]').select('August');
      cy.get('[name="toDay"]').select('4');

      cy.get('[value="Business"]').click();

      cy.get(':nth-child(10) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
        .select('Blue Skies Airlines').should('have.value', 'Blue Skies Airlines');

      cy.get('td > input').click();

      cy.get(':nth-child(2) > td > a > img').click();
    
    });

    //Tentando selecionar mas alterando os dias e companhia área
    Cypress.Commands.add('selecionar_passagem02', () => {
        cy.get(':nth-child(2) > [width="80"] > a').click();

        cy.get('b > select').select('2');
                      
          cy.get(':nth-child(4) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
          .select('London').should('have.value', 'London');
    
          cy.get('[name="fromMonth"]').select('February');
    
          cy.get('[name="fromDay"]').select('25');
    
          cy.get(':nth-child(6) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
          .select('Portland').should('have.value', 'Portland');
    
          cy.get('[name="toMonth"]').select('August');
          cy.get('[name="toDay"]').select('10');
    
          cy.get('[value="First"]').click();
    
          cy.get(':nth-child(10) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
            .select('Pangea Airlines').should('have.value', 'Pangea Airlines');
    
          cy.get('td > input').click();
    
          cy.get(':nth-child(2) > td > a > img').click();
        
        });

        Cypress.Commands.add('selecionar_passagem03', () => {
            cy.get(':nth-child(2) > [width="80"] > a').click();

            cy.get('b > select').select('2');
                          
              cy.get(':nth-child(4) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
              .select('London').should('have.value', 'London');
        
              cy.get('[name="fromMonth"]').select('September');
        
              cy.get('[name="fromDay"]').select('4');
        
              cy.get(':nth-child(6) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
              .select('Portland').should('have.value', 'Portland');
        
              cy.get('[name="toMonth"]').select('September');
              cy.get('[name="toDay"]').select('23');
        
              cy.get(':nth-child(2) > [size="2"] > [checked=""]').click();
        
              cy.get(':nth-child(10) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
                .select('Unified Airlines').should('have.value', 'Unified Airlines');
        
              cy.get('td > input').click();
        
              cy.get(':nth-child(2) > td > a > img').click();
            
            });

            Cypress.Commands.add('selecionar_passagem04', () => {

                cy.get(':nth-child(2) > [width="80"] > a').click();

                cy.get('[value="oneway"]').click(); 
    
                cy.get('b > select').select('2');
                              
                  cy.get(':nth-child(4) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
                  .select('London').should('have.value', 'London');
            
                  cy.get('[name="fromMonth"]').select('September');
            
                  cy.get('[name="fromDay"]').select('4');
            
                  cy.get(':nth-child(6) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
                  .select('Portland').should('have.value', 'Portland');
            
                  cy.get('[name="toMonth"]').select('September');
                  cy.get('[name="toDay"]').select('23');
            
                  cy.get(':nth-child(2) > [size="2"] > [checked=""]').click();
            
                  cy.get(':nth-child(10) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > select')
                    .select('Unified Airlines').should('have.value', 'Unified Airlines');
            
                  cy.get('td > input').click();
            
                  cy.get(':nth-child(2) > td > a > img').click();
                
                });
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })