const sketch = require('sketch');
const { DataSupplier } = sketch;
const util = require('util');
const faker = require('faker');

export function onStartup() {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier(
    'public.text',
    'Full Name',
    'SupplyFullName'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'First Name',
    'SupplyFirstName'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Last Name',
    'SupplyLastName'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Email Address',
    'SupplyEmail'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Phone Number',
    'SupplyPhoneNumber'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Lorem Paragraph',
    'SupplyLoremParagraph'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Lorem Paragraphs',
    'SupplyLoremParagraphs'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Auto (Layer Name)',
    'SupplyAutomatically'
  );
}

export function onShutdown() {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers();
}
export function onSupplyAutomatically(context) {
  supplyFakerData(context);
}
export function onSupplyFullName(context) {
  supplyFakerData(context, 'fullName');
}
export function onSupplyFirstName(context) {
  supplyFakerData(context, 'firstName');
}
export function onSupplyLastName(context) {
  supplyFakerData(context, 'lastName');
}
export function onSupplyEmail(context) {
  supplyFakerData(context, 'email');
}
export function onSupplyPhoneNumber(context) {
  supplyFakerData(context, 'phoneNumber');
}
export function onSupplyLoremParagraph(context) {
  supplyFakerData(context, 'loremParagraph');
}
export function onSupplyLoremParagraphs(context) {
  supplyFakerData(context, 'loremParagraphs');
}

function supplyFakerData(context, type) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data;
    switch (type) {
      case 'fullName':
        data = faker.name.findName();
        break;
      case 'firstName':
        data = faker.name.firstName();
        break;
      case 'lastName':
        data = faker.name.lastName();
        break;
      case 'email':
        data = faker.internet.email();
        break;
      case 'phoneNumber':
        data = faker.phone.phoneNumber();
        break;
      case 'loremParagraph':
        data = faker.lorem.paragraph();
        break;
      case 'loremParagraphs':
        data = faker.lorem.paragraphs();
        break;
      default:
        data = faker.fake('{{' + item.name + '}}');
        break;
    }
    if (!data) return;
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
