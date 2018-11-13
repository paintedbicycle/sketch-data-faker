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
    'Email Address',
    'SupplyEmailAddress'
  );
}

export function onShutdown() {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers();
}

export function onSupplyFullName(context) {
  supplyData(context, 'name');
}

export function onSupplyEmailAddress(context) {
  supplyData(context, 'email');
}

function supplyData(context, type) {
  let dataKey = context.data.key;
  const items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach((item, index) => {
    let data;
    switch (type) {
      case 'name':
        data = faker.name.findName();
        break;
      case 'email':
        data = faker.internet.email();
        break;
      default:
        break;
    }

    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
