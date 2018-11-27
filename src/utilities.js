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

  console.log('url', url);
  let session = NSURLSession.sharedSession(),
    task = session.dataTaskWithURL(
      NSURL.URLWithString(NSString.stringWithString(url))
    );

  task.resume();
}
