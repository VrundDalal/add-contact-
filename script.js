document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const errorMessage = document.getElementById('error-message');
    const contactList = document.getElementById('contact-list');

    // Load contacts from localStorage and display them
    const loadContacts = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contactList.innerHTML = contacts.map(contact => 
            `<li>${contact.name} - ${contact.phone}</li>`
        ).join('');
    };

    // Add a new contact
    const addContact = (name, phone) => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push({ name, phone });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        loadContacts();
    };

    // Form submission handler
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (name === '' || phone === '') {
            errorMessage.textContent = 'Both name and phone number are required.';
            return;
        }

        errorMessage.textContent = '';
        addContact(name, phone);
        nameInput.value = '';
        phoneInput.value = '';
    });

    // Initial load
    loadContacts();
});
