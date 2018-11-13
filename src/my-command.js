const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier('public.text', 'sketch-data-faker', 'SupplyData')
  // DataSupplier.registerDataSupplier('public.image', 'sketch-data-faker', 'SupplyData')
}

export function onShutdown () {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyData (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = Math.random().toString()
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}
