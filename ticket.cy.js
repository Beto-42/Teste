describe('Acessar site de passagem', () => {
  it('Acessar site', () => {
    cy.visit('https://demo.guru99.com/test/newtours/');

    cy.cadastrar_usuario();
   

    cy.selecionar_passagem();

    cy.acessar_site();

    cy.selecionar_passagem02();

    cy.acessar_site();

    cy.selecionar_passagem03();

    cy.acessar_site();

    cy.selecionar_passagem04();

        
      
      })

     
      
  })
  
