const fs = require('fs');

const CONTACTS_FILE = 'contacts.json';

function readContacts() {
    if (!fs.existsSync(CONTACTS_FILE)) return [];
    return JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf8'));
}

function writeContacts(contacts) {
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
}

function addContact(phone, name) {
    const contacts = readContacts();
    if (contacts.some(c => c.phone === phone)) {
        console.log(`Error: Phone number ${phone} already exists.`);
        return;
    }
    contacts.push({ phone, name });
    writeContacts(contacts);
    console.log(`Added: ${name} (${phone})`);
}

function deleteContact(phone) {
    let contacts = readContacts();
    const newContacts = contacts.filter(c => c.phone !== phone);
    if (newContacts.length === contacts.length) {
        console.log(`Error: Phone number ${phone} not found.`);
        return;
    }
    writeContacts(newContacts);
    console.log(`Deleted: ${phone}`);
}

function showContacts() {
    const contacts = readContacts();
    if (contacts.length === 0) {
        console.log('No contacts found.');
        return;
    }
    console.log('\n=== All Contacts ===');
    contacts.forEach(c => console.log(`  ${c.name} - ${c.phone}`));
    console.log('====================\n');
}

const [, , cmd, arg1, arg2] = process.argv;

if (cmd === 'add' && arg1 && arg2) addContact(arg1, arg2);
else if (cmd === 'delete' && arg1) deleteContact(arg1);
else if (cmd === 'show') showContacts();
else console.log('Usage: node phone.js add|delete|show [phone] [name]');