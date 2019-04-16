# Sketch Data Faker

Sketch Data Faker enables you to insert random content into your Sketch files and you can specify what type of content for each layer.

- You can choose from 130+ types of data (Full Name, Email Address, Telephone, Paragraph, etc)
- It will insert a random version of that data into the specific layer that you select
- You can refresh your layer to get a different value of that same type of data
- It works inside Symbols, so one duplicated symbol can have different random content of the same type (i.e. a list of names)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [How to Use](#how-to-use)
  - [Manual Mode](#manual-mode)
  - [Automatic Mode (Recommended)](#automatic-mode-recommended)
    - [Automatic Mode Content Types](#automatic-mode-content-types)
  - [Layer Renaming Helper](#layer-renaming-helper)
- [Full List of Available Content](#full-list-of-available-content)
  - [Addresses](#addresses)
  - [Product Names and Descriptions](#product-names-and-descriptions)
  - [Company Names and Descriptions](#company-names-and-descriptions)
  - [Database](#database)
  - [Dates](#dates)
  - [Finance](#finance)
  - [Computers](#computers)
  - [Internet](#internet)
  - [Lorem](#lorem)
  - [Names and Job Titles](#names-and-job-titles)
  - [Phone Numbers](#phone-numbers)
  - [Random](#random)
  - [Files](#files)
- [Localization / Translations](#localization--translations)
  - [List of Locales](#list-of-locales)
- [Changelog](#changelog)
- [Data Source and Credits](#data-source-and-credits)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

- To use Sketch Data Faker, install the plugin by double-clicking on the `sketch-data-faker.sketchplugin` file.

## How to Use

- Once installed, data will become available to you in the native Sketch Data Menu just like other types of data.
- You can view more about how to use Sketch's Data features here: <https://sketchapp.com/docs/data/>

There are 2 ways to use it: Manual (Basic) and Automatic (Recommended)

- In **manual mode**, you select one of the specific pre-built types of data that Sketch Data Faker has made available in the dropdown menu. No setup/changes to your Sketch file needed.
- In **automatic mode** (recommended), you can insert much more data - over 130 types of data, by _renaming your text layer_ using the chart below.

### Manual Mode

- To use **manual mode**, right-click on the text layer and look inside the `Sketch Data Faker` menu inside the `Data Feeds` menu. Choose the type of data you want to insert. For example if you choose `Full Name`, your layer will now be replaced with a random full name (i.e. Jane Doe).
- The layer text will be replaced with whatever type of data you chose. It's now linked up and good to go. You can even refresh the data to get different data from the same type and it works inside symbols, offering unique data for each symbol.

### Automatic Mode (Recommended)

- In **automatic mode** you **re-name your layer** with the type of data you want (see the chart below for all the data types you can use).
- When you right click on the layer and go to the same menu as above, but this time, choose the `Auto (Layer Name)` option from the menu.
- Your layer text will be replaced with random data of whatever type you changed your layer name to
- The rest will work the same way as manual mode above.

#### Automatic Mode Content Types

- Once you select **Automatic Mode** by setting your layer to use `Auto (Layer Name)` from the _Sketch Data Faker_ menu, you then rename your layer to insert the over 130 types of text data.
- The chart below has the data types (i.e. `address.zipCode`) that you can choose from.
- To use the data types, you first put the category name followed by the data type with a dot (".") in between. For example: `address.zipCode` will give you a US zip code.
- Make sure to use the exact spelling including capitalization.

Quick examples:

- To insert a US Zip Code, rename your text layer `address.zipCode`
- To insert a Street Name, rename your text layer `address.streetName`
- To insert a random sentence, rename your text layer `lorem.sentence`
- To insert a Company Name, rename your text layer `company.companyName`
- To insert a Domain Name, rename your text layer `internet.domainName`
- There are words, colours, cities, states, prices, product names, verbs, adjectives, catch phrases, buzzwords, and more.

### Layer Renaming Helper

If you want help renaming your layers, Sketch Data Faker provides a menu inside the Sketch Plugin menu that will allow you to change your layer names without typing:

1. In Sketch, select the layer(s) you want to rename
2. Go to `Plugins -> Sketch Data Faker -> Set Layer Name` and choose the type of content you want to insert into that layer

2b. You can repeat this process for all layers you want to insert new content into

3. With the layers still selected in Sketch, set the data source\* `Data -> Sketch Data Faker -> Auto (Layer name)`
4. Watch as all your selected layers get replaced with new content!

\*You can find the Data menu either by: `Right-click on a selected layer`, `Control-click on a selected layer`, from the `Layer` menu item in Sketch

## Full List of Available Content

You can name your layer to of these Layer Names below. Remember to follow the category.type format (i.e. `address.city`, not just `city`).

### Addresses

| Name              | Layer Name                 | Example Data             | Data Type | Data Source |
| ----------------- | -------------------------- | ------------------------ | --------- | ----------- |
| US ZipCpde        | `address.zipCode`          | "90210"                  | Text      | Faker.js    |
| City              | `address.city`             | "East Zelmatown"         | Text      | Faker.js    |
| City Prefix       | `address.cityPrefix`       | "New", "North"           | Text      | Faker.js    |
| City Suffix       | `address.citySuffix`       | "land", "ton", "shire"   | Text      | Faker.js    |
| Street Name       | `address.streetName`       | "Jeromy Drive"           | Text      | Faker.js    |
| Street Address    | `address.streetAddress`    | "29530 Abbott Point"     | Text      | Faker.js    |
| Street Suffix     | `address.streetSuffix`     | "Isle" , "Way", "Square" | Text      | Faker.js    |
| Street Preffix    | `address.streetPrefix`     | "a", "b", "c"            | Text      | Faker.js    |
| Secondary Address | `address.secondaryAddress` | "Apt. 165"               | Text      | Faker.js    |
| County            | `address.county`           | "Cambridgeshire"         | Text      | Faker.js    |
| Country           | `address.country`          | "Bangladesh", "Cuba"     | Text      | Faker.js    |
| Country Code      | `address.countryCode`      | "CA", "US" , "SL"        | Text      | Faker.js    |
| State             | `address.state`            | "Wisconsin", "Ohio"      | Text      | Faker.js    |
| State Abbr        | `address.stateAbbr`        | "WI", "IN"               | Text      | Faker.js    |
| Latitude          | `address.latitude`         | "0.2228"                 | Text      | Faker.js    |
| Longitude         | `address.longitude`        | "112.5458"               | Text      | Faker.js    |

### Product Names and Descriptions

| Name              | Layer Name                  | Example Data               | Data Type | Data Source |
| ----------------- | --------------------------- | -------------------------- | --------- | ----------- |
| Colo(u)r          | `commerce.color`            | "mint green", "gold"       | Text      | Faker.js    |
| Department        | `commerce.department`       | "Shoes", "Tools", "Beauty" | Text      | Faker.js    |
| Product Name      | `commerce.productName`      | "Licensed Soft Keyboard"   | Text      | Faker.js    |
| Price             | `commerce.price`            | "192.00", "681.00"         | Text      | Faker.js    |
| Product Adjective | `commerce.productAdjective` | "Fantastic", "Handmade"    | Text      | Faker.js    |
| Product Material  | `commerce.productMaterial`  | "Plastic", "Granite"       | Text      | Faker.js    |
| Product           | `commerce.product`          | "Tuna", "Gloves", "Soap"   | Text      | Faker.js    |

### Company Names and Descriptions

| Name             | Layer Name                      | Example Data                           | Data Type | Data Source |
| ---------------- | ------------------------------- | -------------------------------------- | --------- | ----------- |
| Company Suffixes | `company.suffixes`              | "Inc,and Sons,LLC,Group"               | Text      | Faker.js    |
| Company Name     | `company.companyName`           | "Harvey Group"                         | Text      | Faker.js    |
| Company Suffix   | `company.companySuffix`         | "Inc", "LLC"                           | Text      | Faker.js    |
| Catch Phrase     | `company.catchPhrase`           | "Down-sized analyzing toolset"         | Text      | Faker.js    |
| BS Phrase        | `company.bs`                    | "seamless synergize e-commerce"        | Text      | Faker.js    |
| Adjective        | `company.catchPhraseAdjective`  | "Ergonomic", "Integrated"              | Text      | Faker.js    |
| Descriptor       | `company.catchPhraseDescriptor` | "tertiary" , "holistic", "intangible"  | Text      | Faker.js    |
| Noun             | `company.catchPhraseNoun`       | "collaboration", "throughput"          | Text      | Faker.js    |
| BS Adjective     | `company.bsAdjective`           | "efficient", "global"                  | Text      | Faker.js    |
| Buzz             | `company.bsBuzz`                | "grow", "expedite", "drive"            | Text      | Faker.js    |
| Noun             | `company.bsNoun`                | "convergence", "content", "e-commerce" | Text      | Faker.js    |

### Database

| Name               | Layer Name           | Example Data                  | Data Type | Data Source |
| ------------------ | -------------------- | ----------------------------- | --------- | ----------- |
| Database Column    | `database.column`    | "createdAt", "category"       | Text      | Faker.js    |
| Database Type      | `database.type`      | "boolean", "tinyint", "time"  | Text      | Faker.js    |
| Database Collation | `database.collation` | "utf8_unicode_ci", "utf8_bin" | Text      | Faker.js    |
| Database Engine    | `database.engine`    | "InnoDB", "CVS"               | Text      | Faker.js    |

### Dates

| Name             | Layer Name     | Example Data                              | Data Type | Data Source |
| ---------------- | -------------- | ----------------------------------------- | --------- | ----------- |
| Past Full Date   | `date.past`    | "Sun Feb 18 2018 11:12:04 GMT+0100 (CET)" | Text      | Faker.js    |
| Future Full Date | `date.future`  | "Thu Jan 17 2020 04:00:24 GMT+0100 (CET)" | Text      | Faker.js    |
| Recent Full Date | `date.recent`  | "Sat Nov 24 2018 19:59:37 GMT+0100 (CET)" | Text      | Faker.js    |
| Month            | `date.month`   | "October"                                 | Text      | Faker.js    |
| Weekday          | `date.weekday` | "Thursday"                                | Text      | Faker.js    |

### Finance

| Name              | Layer Name                | Example Data                    | Data Type | Data Source |
| ----------------- | ------------------------- | ------------------------------- | --------- | ----------- |
| Account Number    | `finance.account`         | "54352123"                      | Text      | Faker.js    |
| Account Name/Type | `finance.accountName`     | "Savings Account"               | Text      | Faker.js    |
| Last 4            | `finance.mask`            | "7577", "2558"                  | Text      | Faker.js    |
| Amount            | `finance.amount`          | "690.53", "946.42"              | Text      | Faker.js    |
| Transaction Type  | `finance.transactionType` | "payment" , deposit"            | Text      | Faker.js    |
| Currency Code     | `finance.currencyCode`    | "SYP", "USD", "CAD"             | Text      | Faker.js    |
| Currency Name     | `finance.currencyName`    | "Turkish Lira", "Nuevo Sol"     | Text      | Faker.js    |
| Currency Symbol   | `finance.currencySymbol`  | "$", "ден", "﷼", "$U"           | Text      | Faker.js    |
| Bitcoin Address   | `finance.bitcoinAddress`  | "1MBD5F25RM4J0SO7IFLK9K6JXZGUZ" | Text      | Faker.js    |
| iban              | `finance.iban`            | "CH65279625495775545L7"         | Text      | Faker.js    |
| bic               | `finance.bic`             | "HBMOHMJ1"                      | Text      | Faker.js    |

### Computers

| Name          | Layer Name            | Example Data                                                    | Data Type | Data Source |
| ------------- | --------------------- | --------------------------------------------------------------- | --------- | ----------- |
| Abbreviation  | `hacker.abbreviation` | "FTP", "RAM", "SQL"                                             | Text      | Faker.js    |
| Adjective     | `hacker.adjective`    | "solid state", "back-end"                                       | Text      | Faker.js    |
| Noun          | `hacker.noun`         | "driver", "system"                                              | Text      | Faker.js    |
| Verb          | `hacker.verb`         | "quantify", "input"                                             | Text      | Faker.js    |
| ing-verb      | `hacker.ingverb`      | "calculating", "backing up"                                     | Text      | Faker.js    |
| Hacker Phrase | `hacker.phrase`       | "Use the online AGP system, then you can hack the haptic card!" | Text      | Faker.js    |

### Internet

| Name           | Layer Name              | Example Data                                                      | Data Type | Data Source |
| -------------- | ----------------------- | ----------------------------------------------------------------- | --------- | ----------- |
| Email          | `internet.email`        | "Keira48@yahoo.com"                                               | Text      | Faker.js    |
| @example Email | `internet.exampleEmail` | "Avis_Conn54@example.org"                                         | Text      | Faker.js    |
| Username       | `internet.userName`     | "Liana_Crooks20", "Alexandrine7"                                  | Text      | Faker.js    |
| Protocol       | `internet.protocol`     | "https", "http"                                                   | Text      | Faker.js    |
| URL            | `internet.url`          | "https://germaine.net", "http://velda.com"                        | Text      | Faker.js    |
| Domain Name    | `internet.domainName`   | "noel.info", "stephan.com"                                        | Text      | Faker.js    |
| Domain Suffix  | `internet.domainSuffix` | "org", "net", "com"                                               | Text      | Faker.js    |
| Domain Word    | `internet.domainWord`   | "davon", "sunny"                                                  | Text      | Faker.js    |
| IP Address     | `internet.ip`           | "64.210.26.120"                                                   | Text      | Faker.js    |
| IPv6 Address   | `internet.ipv6`         | "f270:ba3a:d670:93c0:eded:1e9b:70bd:feb8"                         | Text      | Faker.js    |
| User Agent     | `internet.userAgent`    | "Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/5.1)" | Text      | Faker.js    |
| Colo(u)r       | `internet.color`        | "#3d5e37"                                                         | Text      | Faker.js    |
| MAC Address    | `internet.mac`          | "fb:d0:06:f8:b0:c8"                                               | Text      | Faker.js    |
| Password       | `internet.password`     | "gO40I5BVEUfetWO", "kUrNsxJa3yXoYr\_"                             | Text      | Faker.js    |

### Lorem

| Name       | Layer Name         | Example Data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Data Type | Data Source |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| Word       | `lorem.word`       | "rerum"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Text      | Faker.js    |
| Words      | `lorem.words`      | "sed sapiente rerum"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Text      | Faker.js    |
| Sentence   | `lorem.sentence`   | "Itaque quia temporibus odio deserunt."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Text      | Faker.js    |
| Slug       | `lorem.slug`       | "voluptas-qui-eius"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Text      | Faker.js    |
| Sentences  | `lorem.sentences`  | "Vitae sint tenetur porro odit id earum. Consequatur blanditiis sit voluptate doloribus quis eligendi repudiandae voluptatibus nihil. Dolor omnis magni reiciendis voluptatum asperiores tempora. Velit animi distinctio illum quisquam."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Text      | Faker.js    |
| Paragraph  | `lorem.paragraph`  | "Amet praesentium magni quia voluptas nam molestias itaque consequatur. Iste minima voluptatum incidunt accusamus. Aut neque suscipit vel ratione nihil itaque."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Text      | Faker.js    |
| Paragraphs | `lorem.paragraphs` | "Amet laudantium eius distinctio molestiae est aliquid aut nesciunt est. Deleniti atque ab. Quasi officia dicta aut. Vel sunt sed occaecati ipsam placeat est a quia. Doloremque aliquam aperiam qui sit officia reprehenderit repellendus id quae. Enim sed id quos ut debitis explicabo sunt necessitatibus cupiditate. Vero aut sunt est. Impedit quis incidunt eum reprehenderit est qui enim sint. Blanditiis consequuntur dolorum vitae aut autem atque ratione. Ea qui dolorem. Ratione reprehenderit amet quia tempore temporibus deserunt. Ipsam ducimus adipisci occaecati. Inventore totam eveniet asperiores sit voluptatem aut rem impedit. Sunt sunt aspernatur ad incidunt exercitationem fuga. Hic excepturi quis omnis ipsum a reprehenderit modi odit vel. Aliquam eos rerum." | Text      | Faker.js    |
| Text       | `lorem.text`       | "Aut iste libero unde."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Text      | Faker.js    |
| Lines      | `lorem.lines`      | "Et placeat nisi rem ut vitae sed dolore."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Text      | Faker.js    |

### Names and Job Titles

| Name           | Layer Name           | Example Data                | Data Type | Data Source |
| -------------- | -------------------- | --------------------------- | --------- | ----------- |
| First Name     | `name.firstName`     | "Jakayla", "Sally"          | Text      | Faker.js    |
| Last Name      | `name.lastName`      | "Pollich", "Schuppe"        | Text      | Faker.js    |
| Full Name      | `name.findName`      | "7577", "2558"              | Text      | Faker.js    |
| Job Title      | `name.jobTitle`      | "Direct Web Developer"      | Text      | Faker.js    |
| Prefix         | `name.prefix`        | "Mr." , Miss"               | Text      | Faker.js    |
| Suffix         | `name.suffix`        | "II"                        | Text      | Faker.js    |
| Title          | `name.title`         | "Dynamic Identity Liaison"  | Text      | Faker.js    |
| Job Descriptor | `name.jobDescriptor` | "Dynamic", "National"       | Text      | Faker.js    |
| Job Area       | `name.jobArea`       | "Security", "Functionality" | Text      | Faker.js    |
| Job Type       | `name.jobType`       | "Agent", "Architect"        | Text      | Faker.js    |

### Phone Numbers

| Name                       | Layer Name                | Example Data                           | Data Type | Data Source |
| -------------------------- | ------------------------- | -------------------------------------- | --------- | ----------- |
| Phone Number               | `phone.phoneNumber`       | "226.634.3129 x7019"                   | Text      | Faker.js    |
| North America Phone Number | `phone.phoneNumberFormat` | "994-651-4933"                         | Text      | Faker.js    |
| Phone Formats              | `phone.phoneFormats`      | "###.###.####", "1-###-###-#### x####" | Text      | Faker.js    |

### Random

| Name                    | Layer Name            | Example Data                                 | Data Type | Data Source |
| ----------------------- | --------------------- | -------------------------------------------- | --------- | ----------- |
| Random Number           | `random.number`       | "49109"                                      | Text      | Faker.js    |
| uuid                    | `random.uuid`         | "f41c75fd-c540-4727-b5df-db7ead603a83"       | Text      | Faker.js    |
| boolean                 | `random.boolean`      | "true", "false"                              | Text      | Faker.js    |
| Random word             | `random.word`         | "Avon", "magnetic"                           | Text      | Faker.js    |
| Random words            | `random.words`        | "6th generation", "matrix Myanmar auxiliary" | Text      | Faker.js    |
| Locale                  | `random.locale`       | "en_US", "zh_CN"                             | Text      | Faker.js    |
| Random Letter or Number | `random.alphaNumeric` | "j", "4"                                     | Text      | Faker.js    |

### Files

| Name             | Layer Name              | Example Data                        | Data Type | Data Source |
| ---------------- | ----------------------- | ----------------------------------- | --------- | ----------- |
| File Name        | `system.fileName`       | "planner_ftp_bedfordshire.u32"      | Text      | Faker.js    |
| Common File Name | `system.commonFileName` | "back_end_3rd_generation_chief.mp4" | Text      | Faker.js    |
| MIME Type        | `system.mimeType`       | "application/x-java-jnlp-file"      | Text      | Faker.js    |
| Common File Type | `system.commonFileType` | "image", "video"                    | Text      | Faker.js    |
| File Extension   | `system.fileExt`        | "onepkg", "pls"                     | Text      | Faker.js    |
| Common File Ext  | `system.commonFileExt`  | "mp4", "jpeg"                       | Text      | Faker.js    |
| File Type        | `system.fileType`       | "image", "font"                     | Text      | Faker.js    |
| Version          | `system.semver`         | "2.6.9"                             | Text      | Faker.js    |

## Localization / Translations

Sketch Data Faker supports localization on all text strings, where Faker.js also supports it. In order to set a layer to a specific language or locale, append `|xx` to the end where `xx` is the local code.

For example, if you want a `First Name` to be German, you would use `name.firstName|de` as your layer name. If you want the product name to be in Canadian English, you would use `commerce.productName|en_CA`.

See the full list of locales below. Note that Sketch Data Faker will fall back to English if the locale code is wrong or if there is no available translation for that term.

### List of Locales

- az
- cz
- de
- de_AT
- de_CH
- en
- en_AU
- en_BORK
- en_CA
- en_GB
- en_IE
- en_IND
- en_US
- en_ZA
- en_au_ocker
- es
- es_MX
- fa
- fr
- fr_CA
- ge
- id_ID
- it
- ja
- ko
- nb_NO
- nep
- nl
- pl
- pt_BR
- pt_PT
- ru
- sk
- sv
- tr
- uk
- vi
- zh_CN
- zh_TW

## Changelog
- 0.6 - Use on text layers as part of library imports
- 0.4 - New Feautre: i18n
- 0.2.1 - New Feature: Layer renaming helper in plugin menu
- 0.1.9 - New Feature: Ability to use on symbols

## Data Source and Credits

All data is from the great faker.js project: <https://github.com/marak/Faker.js/>
