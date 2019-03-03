const sketch = require('sketch');
const UI = require('sketch/ui');

import config from './config';

let debugMode = config.debug;

export function changeLayerName(newLayerName) {
  const document = sketch.getSelectedDocument();
  const selectedLayers = document.selectedLayers;
  let errors = [];

  try {
    if (selectedLayers.length === 0) {
      UI.message('No layers are selected.');
      //errors.push('No layers are selected.');
    } else {
      //    console.log('Layers', selectedLayers);

      selectedLayers.forEach(selectedLayer => {
        let layer = document.getLayerWithID(
          selectedLayer.override
            ? selectedLayer.override.path
            : selectedLayer.id
        );
        layer.name = newLayerName;
      });
    }
  } catch (error) {
    errors.push(error);
  }

  if (errors) showUserErrors(errors);
}

export function showUserErrors(errors) {
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

export function googleAnalytics(context, category, action, label, value) {
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

  if (debugMode) console.log('url', url);

  let session = NSURLSession.sharedSession(),
    task = session.dataTaskWithURL(
      NSURL.URLWithString(NSString.stringWithString(url))
    );

  task.resume();
}
