# Sketch Data Faker

Sketch Data Faker will help you insert text data into your mockups.

- You can choose what type of data (Full Name, Email Address, Telephone, Paragraph, etc)
- It will insert a random version of that text into the text layer that you select
- You can refresh it and get another copy of that data randomly re-inserted
- It works inside Symbols, so one symbol can create several symbols with the random data inserted each time

## Installation

- To use Sketch Data Faker, install the plugin by double-clicking on the `sketch-data-faker.sketchplugin` file.

## How to Use

- Once installed, data will become available to you in the native Sketch Data menus just like other types of data.
- You can view more about how to use Sketch's Data features here: <https://sketchapp.com/docs/data/>

There are 2 ways to use it: Manual (Basic) and Automatic (Recommended)

- In **manual mode**, you select one of the specific pre-built types of data that Sketch Data Faker has made available in the dropdown menu. No setup/changes to your Sketch file needed.
- In **automatic mode** (recommended), you can insert much more data - over 100 types of data, by _renaming your text layer_ using the chart below.

## Manual Mode

- To use **manual mode**, right-click on the text layer and look inside the `Sketch Data Faker` menu inside the `Data Feeds` menu. Choose the type of data you want to insert. For example if you choose `Full Name`, your layer will now be replaced with a random full name (i.e. Jane Doe).
- The layer text will be replaced with whatever type of data you chose. It's now linked up and good to go. You can even refresh the data to get different data from the same type and it works inside symbols, offering unique data for each symbol.

## Automatic Mode (Recommended)

- In **automatic mode** you **re-name your layer** with the type of data you want (see the chart below for all the data types you can use).
- When you right click on the layer and go to the same menu as above, but you choose the `Auto (Layer Name)` option from the menu this time.
- Your layer text will be replaced with random data of whatever type you changed your layer name to
- The rest will work the same way as manual mode above.

### Automatic Mode Content Types

- Again, if you select **Automatic Mode** and there have set your layer to use `Auto (Layer Name)` from the _Sketch Data Faker_ menu, you must rename your layer properly to insert over 100 types of text data that you can choose from.
- The chart below has the data types (i.e. `address.zipCode`) that you can choose from
- To use the data types, you first put the category name followed by the data type with a dot (".") in between. For example: `address.zipCode` will give you have a US zip code.
- Make sure to use the exact spelling and capitalization.

More examples:

- To insert a US Zip Code, rename your text layer `address.zipCode`
- To insert a Street Name, rename your text layer `address.streetName`
- To insert a random sentence, rename your text layer `lorem.sentence`
- To insert a Company Name, rename your text layer `company.companyName`
- To insert a Domain Name, rename your text layer `internet.domainName`
- There are words, colours, cities, states, prices, product names, verbs, adjectives, catch phrases, buzzwords, and more.

#### Full list here:

You can name your layer any of these below. Remember to first put the category and then the type (i.e. `address.city`, not just `city`).

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
