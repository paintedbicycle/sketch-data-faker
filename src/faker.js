const sketch = require('sketch');
const { DataSupplier } = sketch;
const util = require('util');
const faker = require('faker');
const UI = require('sketch/ui');

import config from './config';
import { googleAnalytics } from './utilities';

let debugMode = config.debug;

export function supplyFakerData(context, type) {
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
        if (!debugMode)
          googleAnalytics(context, 'Get Data', 'Faker', 'Full Name');
        break;
      case 'firstName':
        newLayerData = faker.name.firstName();
        if (!debugMode)
          googleAnalytics(context, 'Get Data', 'Faker', 'First Name');
        break;
      case 'lastName':
        newLayerData = faker.name.lastName();
        if (!debugMode)
          googleAnalytics(context, 'Get Data', 'Faker', 'Last Name');
        break;
      case 'email':
        newLayerData = faker.internet.email();
        if (!debugMode) googleAnalytics(context, 'Get Data', 'Faker', 'Email');
        break;
      case 'phoneNumber':
        newLayerData = faker.phone.phoneNumber();
        if (!debugMode)
          googleAnalytics(context, 'Get Data', 'Faker', 'Phone Number');
        break;
      case 'loremParagraph':
        newLayerData = faker.lorem.paragraph();
        if (!debugMode)
          googleAnalytics(context, 'Get Data', 'Faker', 'Paragraph');
        break;
      case 'loremParagraphs':
        newLayerData = faker.lorem.paragraphs();
        if (!debugMode)
          googleAnalytics(context, 'Get Data', 'Faker', 'Paragraphs');
        break;
      default:
        // Set custom to true so we can override layer name
        custom = true;
        try {
          newLayerData = faker.fake(searchTerm);
          if (!debugMode)
            googleAnalytics(
              context,
              'Get Data',
              'Faker Auto',
              originalLayerName
            );
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

    // The DataSupplier method above overites the layer name
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
    if (!debugMode)
      googleAnalytics(context, 'Error', 'Faker', error[0].layer.name);
  } else if (errors.length > 1) {
    function stringError() {
      return errors
        .map(error => {
          if (!debugMode)
            googleAnalytics(context, 'Error', 'Faker', error.layer.name);
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
