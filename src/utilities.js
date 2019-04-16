const sketch = require('sketch');
const UI = require('sketch/ui');

export function changeLayerName(newLayerName) {
  const document = sketch.getSelectedDocument();
  const selectedLayers = document.selectedLayers;
  let errors = [];

  try {
    if (selectedLayers.length === 0) {
      UI.message('No layers are selected.');
      //errors.push('No layers are selected.');
    } else {
      selectedLayers.forEach(selectedLayer => {
        let layer = document.getLayerWithID(
          selectedLayer.symbolInstance
            ? selectedLayer.symbolInstance.id
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
