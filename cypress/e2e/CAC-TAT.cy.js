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
  
  it('verifica o título de aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
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

    cy.contains('.button', 'Enviar')
      .should('be.visible')
      .click()

    cy.get('.success')
      .should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
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

    cy.contains('.button', 'Enviar')
      .should('be.visible')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  it('valida que o campo telefone segue vazio ao inputar valor não numérico', () => {
    cy.get('#phone')
      .as('phone')
      .type('abcdefg', { delay: 0 })

    cy.get('@phone')
      .should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
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
      .check()

    cy.contains('.button', 'Enviar')
      .should('be.visible')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
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

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () =>{
    cy.contains('.button', 'Enviar')
      .as('btn')
      .should('be.visible')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
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

  // Exercícios selecionando opção em campo de seleção suspensa

  // Selecionando pelo texto
  it('seleciona um produto (Youtube) por seu texto', () => {
    cy.get('#product')
      .as('pdc')
      .should('be.visible')
      .select('YouTube')

    cy.get('@pdc')
      .should('be.visible')
      .should('have.value', 'youtube')
  })

  // Selecionando pelo value
  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
     cy.get('#product')
      .as('pdc')
      .should('be.visible')
      .select('mentoria')

    cy.get('@pdc')
      .should('be.visible')
      .should('have.value', 'mentoria')
  })

  // Selecionando pelo indice
  it('seleciona um produto (Blog) por seu indice', () => {
     cy.get('#product')
      .as('pdc')
      .should('be.visible')
      .select(1)

    cy.get('@pdc')
      .should('be.visible')
      .should('have.value', 'blog')
  })

  // Exercíciios marcando inputs do tipo radio
  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
      .and('have.value', 'feedback')
  })

  //o .each itera sobre a lista, que neste caso são as opções de atendimento, e recebe essa lista como argumento
  // que no caso foi o typeOfService(o nome indifere, escolha o melhor para cada contexto)
  //após isso, em cada iteração vamos fazer o .wrap que "empacota" a opção e aplica a ação que queremos
  // que no caso é a de dar o check e valdiar se foi marcado
  // veja que passamos o typeOfService para o .wrap, pois como ele está dentro do each, esse valor vai
  // ser a opção de cada iteração, em cada vez que ele entrar em uma opção com o .each
  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      })
  })

  // Marcando (e desmarcando) inputs do tipo checkbox
  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })

  // Fazendo updload de arquivos com Cypress
  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    // ao usar o .fixture não precisamos passar o caminho completo pois ele entende que o arquivo
    // está na pasta /fixtures
    cy.fixture('example.json')
    .as('myFile')

    cy.get('#file-upload')
    .selectFile('@myFile')
    .then(input => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    //esse teste irá validar que existe a pripriedade target com o valor _blank
    cy.get('a')
      .should('have.attr', 'target', '_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    //esse teste irá validar que somos direcionados à nova página após clicar no link, porém de outra forma
    //nessa abordagem iremos remover o atributo target, o que fará abrir na mesma aba em que estamos
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()
      
    cy.get('#title')
      .should('be.visible')

    cy.contains('h1', 'CAC TAT - Política de Privacidade')
      .should('be.visible')
  })

})