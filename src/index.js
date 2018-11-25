const sketch = require('sketch');
const { DataSupplier } = sketch;
const util = require('util');
const faker = require('faker');
const UI = require('sketch/ui');

let debugMode = false;

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

export function onChangeLayerName(context) {
  let selection = context.selection;
  for (let i = 0, l = selection.length; i < l; i++) {
    let layer = selection[i];
    console.log('layer', layer);
  }
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

function googleAnalytics(context, category, action, label, value) {
  let trackingID = 'UA-129789160-1',
    uuidKey = 'google.analytics.uuid',
    uuid = NSUserDefaults.standardUserDefaults().objectForKey(uuidKey);

  if (!uuid) {
    uuid = NSUUID.UUID().UUIDString();
    NSUserDefaults.standardUserDefaults().setObject_forKey(uuid, uuidKey);
  }

  let url = 'https://www.google-analytics.com/collect?v=1';
  // Tracking ID
  url += '&tid=' + trackingID;
  // Source
  url += '&ds=sketch' + MSApplicationMetadata.metadata().appVersion;
  // Client ID
  url += '&cid=' + uuid;
  // pageview, screenview, event, transaction, item, social, exception, timing
  url += '&t=event';
  // App Name
  url += '&an=' + encodeURI(context.plugin.name());
  // App ID
  url += '&aid=' + context.plugin.identifier();
  // App Version
  url += '&av=' + context.plugin.version();
  // Event category
  url += '&ec=' + encodeURI(category);
  // Event action
  url += '&ea=' + encodeURI(action);
  // Event label
  if (label) {
    url += '&el=' + encodeURI(label);
  }
  // Event value
  if (value) {
    url += '&ev=' + encodeURI(value);
  }

  let session = NSURLSession.sharedSession(),
    task = session.dataTaskWithURL(
      NSURL.URLWithString(NSString.stringWithString(url))
    );

  task.resume();
}
