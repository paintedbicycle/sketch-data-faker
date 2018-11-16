const sketch = require('sketch');
const { DataSupplier } = sketch;
const util = require('util');
const faker = require('faker');
const UI = require('sketch/ui');

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
  let document = require('sketch/dom').getSelectedDocument();
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  let errors = [];

  items.forEach((item, index) => {
    let newLayerData = null;
    let custom = false;
    let layerError = false;

    // In order to work in both layers and symbols we grab the original
    // layer by getting the id from either the override or the layer
    let layer = document.getLayerWithID(
      item.override ? item.override.path : item.id
    );
    let originalLayerName = layer.name;
    let searchTerm = '{{' + layer.name + '}}';

    switch (type) {
      case 'fullName':
        newLayerData = faker.name.findName();
        break;
      case 'firstName':
        newLayerData = faker.name.firstName();
        break;
      case 'lastName':
        newLayerData = faker.name.lastName();
        break;
      case 'email':
        newLayerData = faker.internet.email();
        break;
      case 'phoneNumber':
        newLayerData = faker.phone.phoneNumber();
        break;
      case 'loremParagraph':
        newLayerData = faker.lorem.paragraph();
        break;
      case 'loremParagraphs':
        newLayerData = faker.lorem.paragraphs();
        break;
      default:
        // Set custom to true so we can override layer name
        custom = true;
        try {
          newLayerData = faker.fake(searchTerm);
        } catch (e) {
          layerError = true;
          errors.push({
            type: 'noData',
            layer: {
              name: layer.name
            }
          });
        }
        break;
    }

    // If this specific layer has an error, do not continue
    if (layerError) return;

    // Replace the layer text
    DataSupplier.supplyDataAtIndex(dataKey, newLayerData, index);

    // The DataSupplier method above overrites the layer name
    // So we now put the original layer name back again
    if (custom === true) {
      layer.name = originalLayerName;
    }
  });

  if (errors.length === 1) {
    UI.alert(
      'Sketch Data Faker Error',
      'A layer named "' +
        errors[0].layer.name +
        '" returned no data. \n\nPlease double-check the layer name matches one of the data types.'
    );
  } else if (errors.length > 1) {
    function stringError() {
      return errors
        .map(error => {
          return error.layer.name;
        })
        .join('\n');
    }
    UI.alert(
      'Sketch Data Faker Error',
      `There were some layers that returned no data. \n\nPlease double-check that the following layer names match one of the data types:\n\n${stringError()}`
    );
  }
}
