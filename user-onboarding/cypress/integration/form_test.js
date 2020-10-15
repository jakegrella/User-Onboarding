describe('Form App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

	//helpers
	// get name input
	const nameInput = () => cy.get('input[name=name]');
	// get email input
	const emailInput = () => cy.get('input[name=email]');
	// get password input
	const passwordInput = () => cy.get('input[name=password]');
	// get tos checkbox
	const tosCheckbox = () => cy.get('input[name=terms]');
	// get submit button
	const submitBtn = () => cy.get('button');
	// get name validation error
	const nameValidationError = () => cy.get('div[name=name-error]');

	//tests
	it('sanity checks', () => {
		expect(5).to.equal(5);
	});

	it('name tests', () => {
		// check if name input exists
		nameInput().should('exist');
		// type name into name input
		nameInput().type('Jake Grella');
		// check if text input contains name provided
		nameInput().should('have.value', 'Jake Grella');
	});

	it('email tests', () => {
		// check if email input exists
		emailInput().should('exist');
		// type email into email input
		emailInput().type('jake@test.com');
	});

	it('password tests', () => {
		// check if password input exists
		passwordInput().should('exist');
		// type password into password input
		passwordInput().type('password123');
	});

	it('tos checkbox tests', () => {
		// check if terms of service box exists
		tosCheckbox().should('exist');
		// check if terms of service box is checkable
		tosCheckbox().click();
	});

	it('submit button tests', () => {
		// check if submit button exists
		submitBtn().should('exist');
		// check if user can submit form (submit button should be disabled)
		submitBtn().should('be.disabled');
	});

	it('form validation if name is empty', () => {
		// type name and clear is to trigger validation
		nameInput().type('Jimmy Test').clear();
		// check if name validation error exists
		nameValidationError().should('exist');
	});
});
