const sketch = require("sketch");
const { DataSupplier } = sketch;
const util = require("util");
const faker = require("faker");

import { showUserErrors } from "./utilities";

export function supplyFakerData(context, type) {
  let dataKey = context.data.key;

  const document = sketch.getSelectedDocument();
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  let errors = [];

  items.forEach((item, index) => {
    let newLayerData = null;
    let custom = false;
    let layerError = false;

    // In order to work in both layers and symbols we grab the original
    // layer by getting the id from either the override or the layer

    let layer;
    let originalLayerName;
    if (item.type === "Text") {
      // item.id is for regular layers
      layer = document.getLayerWithID(item.id);
      originalLayerName = layer.name;
    } else if (item.type === "DataOverride") {
      // For overrides we can just grab the name directly
      // Sketch already knows the layer it's going to apply to so we don't
      // actually need the full layer
      originalLayerName = item.override.affectedLayer.name;
    }

    let search = originalLayerName.split("|")[0];
    let locale = originalLayerName.split("|")[1];

    // Set up search string
    let searchTerm = "{{" + search + "}}";

    // Set up locale
    if (locale) {
      faker.locale = locale;
    } else {
      faker.locale = "en";
    }

    switch (type) {
      case "fullName":
        newLayerData = faker.name.findName();
        break;
      case "firstName":
        newLayerData = faker.name.firstName();
        break;
      case "lastName":
        newLayerData = faker.name.lastName();
        break;
      case "email":
        newLayerData = faker.internet.email();
        break;
      case "phoneNumber":
        newLayerData = faker.phone.phoneNumber();
        break;
      case "loremSentence":
        newLayerData = faker.lorem.sentence();
        break;
      case "loremParagraph":
        newLayerData = faker.lorem.paragraph();
        break;
      case "loremParagraphs":
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
            type: "noData",
            layer: {
              name: layer && layer.name ? layer.name : originalLayerName
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
    if (layer && custom === true) {
      layer.name = originalLayerName;
    }
  });

  if (errors) showUserErrors(errors);
}
