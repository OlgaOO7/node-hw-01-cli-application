const argv = require('yargs').argv;

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const getContactById = await contacts.getContactById(id);
      console.log(getContactById);
      break;

    case "add":
      const addNewContact = await contacts.addContact(name, email, phone);
      console.log(addNewContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);