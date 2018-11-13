# Sketch Data Faker

---

** Please note this plugin is currently in beta testing mode. Things will change and things may break **

Again, this is an **early release** of this plugin and has not been tested fully. Do not use in production mockups. Save and backup your Sketch file regularly. Your Sketch file may crash. You've been warned.

---

Sketch Data Faker will help you insert text data into your mockups.

- You can choose what type of data (Full Name, Email Address, Telephone, Paragraph, etc)
- It will insert a random version of that text into the text layer that you select
- You can refresh it and get another copy of that data randomly re-inserted
- It works inside Symbols, so one symbol can create several symbols with the random data inserted each time

There are 2 ways to use it: Manual and Automatic

- In _manual mode_, you select one of the specific types of data that Sketch Data Faker has available. No setup needed.
- In automatic mode\_, you can insert one of over 100 types of data, but requires you to rename your text layers.

## Installation

To use Sketch Data Faker, first install the plugin by double clicking on it.
It will become available to you in the native Sketch Data menus just like other types of data.
You can view more about how to use Sketch's Data feature here: https://sketchapp.com/docs/data/

## Manual Mode

- In **manual mode**, you right-click on the text layer and in the menu go to "Data Feeds >" then "Sketch Data Faker >" and then choose the type of data you want (for example Full Name).
  The

## Automatic Mode

- In **automatic mode**, you right click on the layer and go to the same menu, but you choose "Auto (Layer Name)" from the menu.
  -- You can then re-name your layer with the name of the type of data you want (see the chart below for all the data you can use).

### Automatic Mode Content

- If you select **Automatic Mode** and have set your layer to use "Auto (Layer Name)" from the _Sketch Data Faker_ menu, you can then rename your layer to insert automatically over 100 types of text data that you can choose from.
- The chart below has "categories" (i.e "address") and "data types" (i.e. zipCode) and you combine them to make your data
- To use, you first put the category name and then a "." and then the data type...like: "address.zipCode"
- Make sure to use the exact spelling and all capitalization!

More examples:

- To insert a US Zip Code, rename your text layer `"address.zipCode"`
- To insert a Street Name, rename your text layer `"address.streetName"`
- To insert a Street Name, rename your text layer `"address.streetName"`
- To insert a Company Name, rename your text layer `"company.companyName"`
- To insert a Domain Name, rename your text layer `"internet.domainName"`

The plugin currently uses the data from faker.js and you can use most if the data from that source. More data sources may be added in the future.

#### Full list here:

You can name your layer any of these below. Remember to first put the category and then the type (as above).

- address
  - zipCode
  - city
  - cityPrefix
  - citySuffix
  - streetName
  - streetAddress
  - streetSuffix
  - streetPrefix
  - secondaryAddress
  - county
  - country
  - countryCode
  - state
  - stateAbbr
  - latitude
  - longitude
- commerce
  - color
  - department
  - productName
  - price
  - productAdjective
  - productMaterial
  - product
- company
  - suffixes
  - companyName
  - companySuffix
  - catchPhrase
  - bs
  - catchPhraseAdjective
  - catchPhraseDescriptor
  - catchPhraseNoun
  - bsAdjective
  - bsBuzz
  - bsNoun
- database
  - column
  - type
  - collation
  - engine
- date
  - past
  - future
  - recent
  - soon
  - month
  - weekday
- finance
  - account
  - accountName
  - mask
  - amount
  - transactionType
  - currencyCode
  - currencyName
  - currencySymbol
  - bitcoinAddress
  - ethereumAddress
  - iban
  - bic
- hacker
  - abbreviation
  - adjective
  - noun
  - verb
  - ingverb
  - phrase
- internet
  - avatar
  - email
  - exampleEmail
  - userName
  - protocol
  - url
  - domainName
  - domainSuffix
  - domainWord
  - ip
  - ipv6
  - userAgent
  - color
  - mac
  - password
- lorem
  - word
  - words
  - sentence
  - slug
  - sentences
  - paragraph
  - paragraphs
  - text
  - lines
- name
  - firstName
  - lastName
  - findName
  - jobTitle
  - prefix
  - suffix
  - title
  - jobDescriptor
  - jobArea
  - jobType
- phone
  - phoneNumber
  - phoneNumberFormat
  - phoneFormats
- random
  - number
  - float
  - arrayElement
  - objectElement
  - uuid
  - boolean
  - word
  - words
  - locale
  - alphaNumeric
  - hexaDecimal
- system
  - fileName
  - commonFileName
  - mimeType
  - commonFileType
  - commonFileExt
  - fileType
  - fileExt
  - directoryPath
  - filePath
  - semver

## Data Source and Credits

All data is from the great faker.js project: https://github.com/marak/Faker.js/
