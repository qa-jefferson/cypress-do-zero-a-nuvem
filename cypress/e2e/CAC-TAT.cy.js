//AULA 1
// describe('Central de Atendimento ao Cliente TAT', () => {
//   it('verifica o título de aplicação', () => {
//     cy.visit('./src/index.html')

//     cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
//   })
// })

// AULA 2
describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  
  it.skip('verifica o título de aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it.skip('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName')
      .as('fn')
      .should('be.visible')
      // o objeto passado como segundo parâmetro é onde passamos as options do .type()
      //nesse caso, vamos tirar a animação de digitação colocando um delay de 0, assim o texto aparece
      //instantaneamente
      .type('Jefferson', { delay: 0})
    cy.get('@fn')
      .should('be.visible')
      .should('have.value', 'Jefferson')
    
    cy.get('#lastName')
      .as('ln')
      .should('be.visible')
      .type('Borges', { delay: 0})

    cy.get('@ln')
      .should('be.visible')
      .should('have.value', 'Borges')
    
    cy.get('#email')
      .as('email')
      .should('be.visible')
      .type('jeff@example.com', { delay: 0})

    cy.get('@email')
      .should('be.visible')
      .should('have.value', 'jeff@example.com')
    
    cy.get('#open-text-area')
      .as('ota')
      .should('be.visible')
      .type('Mensagem de teste, preenchendo o campo text area.', { delay: 0})

    cy.get('@ota')
      .should('be.visible')
      .should('have.value', 'Mensagem de teste, preenchendo o campo text area.')

    cy.get('.button')
      .should('be.visible')
      .click()

    cy.get('.success')
      .should('be.visible')
  })

  it.skip('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName')
      .as('fn')
      .should('be.visible')
      .type('Jefferson', { delay: 0})

    cy.get('@fn')
      .should('be.visible')
      .should('have.value', 'Jefferson')
    
    cy.get('#lastName')
      .as('ln')
      .should('be.visible')
      .type('Borges', { delay: 0})

    cy.get('@ln')
      .should('be.visible')
      .should('have.value', 'Borges')
    
    cy.get('#email')
      .as('email')
      .should('be.visible')
      .type('jeffexample.com', { delay: 0})

    cy.get('@email')
      .should('be.visible')
      .should('have.value', 'jeffexample.com')
    
    cy.get('#open-text-area')
      .as('ota')
      .should('be.visible')
      .type('Mensagem de teste, preenchendo o campo text area.', { delay: 0})

    cy.get('@ota')
      .should('be.visible')
      .should('have.value', 'Mensagem de teste, preenchendo o campo text area.')

    cy.get('.button')
      .should('be.visible')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  it.skip('valida que o campo telefone segue vazio ao inputar valor não numérico', () => {
    cy.get('#phone')
      .as('phone')
      .type('abcdefg', { delay: 0 })

    cy.get('@phone')
      .should('have.value', '')
  })

  it.skip('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName')
      .as('fn')
      .should('be.visible')
      .type('Jefferson', { delay: 0})
    cy.get('@fn')
      .should('be.visible')
      .should('have.value', 'Jefferson')
    
    cy.get('#lastName')
      .as('ln')
      .should('be.visible')
      .type('Borges', { delay: 0})

    cy.get('@ln')
      .should('be.visible')
      .should('have.value', 'Borges')
    
    cy.get('#email')
      .as('email')
      .should('be.visible')
      .type('jeff@example.com', { delay: 0})

    cy.get('@email')
      .should('be.visible')
      .should('have.value', 'jeff@example.com')
    
    cy.get('#open-text-area')
      .as('ota')
      .should('be.visible')
      .type('Mensagem de teste, preenchendo o campo text area.', { delay: 0})

    cy.get('@ota')
      .should('be.visible')
      .should('have.value', 'Mensagem de teste, preenchendo o campo text area.')
    
    cy.get('#phone-checkbox')
      .as('pcb')
      .should('be.visible')
      .click()

    cy.get('.button')
      .should('be.visible')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  it.skip('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .as('fn')
      .should('be.visible')
      .type('Jefferson', { delay: 0})

    cy.get('@fn')
      .should('be.visible')
      .should('have.value', 'Jefferson')
    
    cy.get('#lastName')
      .as('ln')
      .should('be.visible')
      .type('Borges', { delay: 0})

    cy.get('@ln')
      .should('be.visible')
      .should('have.value', 'Borges')
    
    cy.get('#email')
      .as('email')
      .should('be.visible')
      .type('jeff@example.com', { delay: 0})

    cy.get('@email')
      .should('be.visible')
      .should('have.value', 'jeff@example.com')

    cy.get('#phone')
      .as('phone')
      .should('be.visible')
      .type('999999999', { delay: 0 })

    cy.get('@phone')
      .should('be.visible')
      .should('have.value', '999999999')

    cy.get('@fn')
      .should('be.visible')

    cy.get('@fn')
      .clear()
      .should('have.value', '')

    cy.get('@ln')
      .should('be.visible')

    cy.get('@ln')
      .clear()
      .should('have.value', '')

    cy.get('@email')
      .should('be.visible')

    cy.get('@email')
      .clear()
      .should('have.value', '')

    cy.get('@phone')
      .should('be.visible')

    cy.get('@phone')
      .clear()
      .should('have.value', '')
  })

  it.skip('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () =>{
    cy.get('.button')
      .as('btn')
      .should('be.visible')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  it.skip('envia o formuário com sucesso usando um comando customizado', () => {
    // cy.fillMandatoryFieldsAndSubmit() //Primeira implementação, sem parâmetros

    // Segunda implementação, passando um objeto como parâmetro com os valores
    // cy.fillMandatoryFieldsAndSubmit({ firstName: 'Jefferson', lastName: "Borges", email: "jeff@example.com", message: "Mensagem de teste" })

    // Terceira implementação, com parâmetros pré definidos no comando
    cy.fillMandatoryFieldsAndSubmit();

    cy.get('.success')
      .should('be.visible')
  })

  it('alterando o cy.get para cy.contains na busca do botão', () => {
    cy.get('#firstName')
      .as('fn')
      .should('be.visible')
      .type('Jefferson', { delay: 0})
    cy.get('@fn')
      .should('be.visible')
      .should('have.value', 'Jefferson')
    
    cy.get('#lastName')
      .as('ln')
      .should('be.visible')
      .type('Borges', { delay: 0})

    cy.get('@ln')
      .should('be.visible')
      .should('have.value', 'Borges')
    
    cy.get('#email')
      .as('email')
      .should('be.visible')
      .type('jeff@example.com', { delay: 0})

    cy.get('@email')
      .should('be.visible')
      .should('have.value', 'jeff@example.com')
    
    cy.get('#open-text-area')
      .as('ota')
      .should('be.visible')
      .type('Mensagem de teste, preenchendo o campo text area.', { delay: 0})

    cy.get('@ota')
      .should('be.visible')
      .should('have.value', 'Mensagem de teste, preenchendo o campo text area.')

    cy.contains('button', 'Enviar')
      .should('be.visible')
      .click()

    cy.get('.success')
      .should('be.visible')
  })
})