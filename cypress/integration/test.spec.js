describe('The Main Page', () =>{
    it('Successfully loads', () => {
        cy.visit('http://127.0.0.1:5502/index.html')
    })
})

describe('plus operations', () =>{
    it('7+2 equals 9', () => {
        //Arrange 
        cy.visit('http://127.0.0.1:5502/index.html')
        //Act
        cy.get('[data-cy = seven]').click();
        cy.get('[data-cy = plus]').click();
        cy.get('[data-cy = two]').click();
        cy.get('[data-cy = equals]').click();
        
        //Assert
        cy.get('[data-cy = output]').should('contain', '9')
    })
})

describe('minus operations', () =>{
    it('8-9 equals -1', () => {
        //Arrange 
        cy.visit('http://127.0.0.1:5502/index.html')
        //Act
        cy.get('[data-cy = eight]').click();
        cy.get('[data-cy = minus]').click();
        cy.get('[data-cy = nine]').click();
        cy.get('[data-cy = equals]').click();
        
        //Assert
        cy.get('[data-cy = output]').should('contain', '-1')
    })
})

describe('times operations', () =>{
    it('9*9 equals 81', () => {
        //Arrange 
        cy.visit('http://127.0.0.1:5502/index.html')
        //Act
        cy.get('[data-cy = nine]').click();
        cy.get('[data-cy = times]').click();
        cy.get('[data-cy = nine]').click();
        cy.get('[data-cy = equals]').click();
        
        //Assert
        cy.get('[data-cy = output]').should('contain', '81')
    })
})

describe('divide operations', () =>{
    it('98/2 equals 49', () => {
        //Arrange 
        cy.visit('http://127.0.0.1:5502/index.html')
        //Act
        cy.get('[data-cy = nine]').click();
        cy.get('[data-cy = eight]').click();
        cy.get('[data-cy = divide]').click();
        cy.get('[data-cy = two]').click();
        cy.get('[data-cy = equals]').click();
        
        //Assert
        cy.get('[data-cy = output]').should('contain', '49')
    })
})

describe('complex chain', () =>{
    it('98/2+1 equals 50', () => {
        //Arrange 
        cy.visit('http://127.0.0.1:5502/index.html')
        //Act
        cy.get('[data-cy = nine]').click();
        cy.get('[data-cy = eight]').click();
        cy.get('[data-cy = divide]').click();
        cy.get('[data-cy = two]').click();
        cy.get('[data-cy = plus]').click();
        cy.get('[data-cy = one]').click();
        cy.get('[data-cy = equals]').click();
        
        //Assert
        cy.get('[data-cy = output]').should('contain', '50')
    })
})