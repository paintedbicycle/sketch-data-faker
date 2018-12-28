const sketch = require('sketch');
const { DataSupplier } = sketch;
const util = require('util');
const faker = require('faker');

import config from './config';
import { showUserErrors, googleAnalytics } from './utilities';

let debugMode = config.debug;

export function supplyFakerData(context, type) {
  let dataKey = context.data.key;
  const document = sketch.getSelectedDocument();
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  let errors = [];

  console.log('context', context);

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
      case 'loremSentence':
        newLayerData = faker.lorem.sentence();
        if (!debugMode)
          googleAnalytics(context, 'Get Data', 'Faker', 'Lorem Sentence');
        break;
      case 'loremParagraph':
        newLayerData = faker.lorem.paragraph();
        if (!debugMode)
          googleAnalytics(context, 'Get Data', 'Faker', 'Lorem Paragraph');
        break;
      case 'loremParagraphs':
        newLayerData = faker.lorem.paragraphs();
        if (!debugMode)
          googleAnalytics(context, 'Get Data', 'Faker', 'Lorem Paragraphs');
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

    // If this specific layer has an error, go to next layer
    if (layerError) return;

    // Replace the layer text
    DataSupplier.supplyDataAtIndex(dataKey, newLayerData, index);

    // The DataSupplier method above overwrites the layer name
    // so we now put the original layer name back again so the next
    // time the user runs our plugin, the name is correct
    if (custom === true) {
      layer.name = originalLayerName;
    }
  });

  if (errors) showUserErrors(errors);
}
