# @yourd/did-parser: A Decentralized Identifier (DID) Parser

[YourD](https://www.yourd.xyz/) provides a user-friendly Web3.0 infrastructure enabling you to easily build Web3.0 products. 
The `@yourd/did-parser` is a sophisticated library meticulously crafted for parsing and managing Decentralized Identifiers (DIDs). Its core foundation is built upon the esteemed DID specification standards set by the **W3C**.

📌 **Key Features**:
- **Precision in Parsing**: Harnesses advanced algorithms to ensure accurate DID parsing.
- **W3C Conformance**: Adheres strictly to the [DID Core Specification](https://www.w3.org/TR/did-core/) by W3C, guaranteeing reliability and industry-standard compliance.
- **Flexible and Robust**: Designed to accommodate various DID structures while maintaining robustness.

📘 For those keen on understanding the intricacies of the DID specification, we recommend diving into the [official W3C documentation](https://www.w3.org/TR/did-core/).
## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Supported DID Syntax](#supported-did-syntax)
- [Conformance to W3C Specification](#-conformance-to-w3c-specification)
- [Usage](#usage)
- [Disclaimer](#-disclaimer)
- [Contribution](#-contribution)
- [License](#-license)

## Introduction

Decentralized Identifiers (DIDs) are a new type of identifier for verifiable, self-sovereign digital identities. DIDs are fully under the control of the DID subject, independent from any centralized registry, authority, or intermediary.

The `@yourd/did-parser` aims to provide a robust solution for applications and systems to correctly interpret and handle these identifiers.

## Installation

```bash
npm install @yourd/did-parser
```

or 

```bash
yarn add @yourd/did-parser
```

## Supported DID Syntax
According to the DID specification, the general syntax of a DID is:

```plaintext
did:[method-name]:[method-specific-id]
```

did is a fixed string.
- `[method-name]` is a string that specifies the DID method. It is case-insensitive and must be a string from the set of lowercase alphanumeric characters.
- `[method-specific-id]` is a method-specific identifier.
The yourdi-parser ensures that DIDs are correctly parsed and validated based on the above syntax.


**Specifications:**

- `did`: A constant string that indicates the identifier is a DID.
- `[method-name]`: Specifies the DID method and adheres to the following characteristics:
  - **Type**: String
  - **Case Sensitivity**: Insensitive
  - **Valid Characters**: Lowercase alphanumeric characters
  - **Description**: A string that describes the DID method and is integral in determining how the DID interacts with a verifiable data registry.
- `[method-specific-id]`: A method-specific identifier which is unique to the DID.

## Parsing DID URLs

In addition to basic DIDs, the `@yourd/did-parser` is also capable of parsing DID URLs, which extend the basic DID format to include additional components such as paths, query parameters, and fragments.

The general structure of a DID URL is:

```plaintext
did:[method-name]:[method-specific-id][path][?query][#fragment]
```

- did: A constant prefix indicating the identifier type.
- [method-name]: Represents the specific DID method being utilized.
- [method-specific-id]: A unique identifier specific to the chosen method.
- [path]: (Optional) A hierarchical path.
- [?query]: (Optional) A query component which provides additional information.
- [#fragment]: (Optional) A fragment identifier to indicate a secondary resource.

## 📜 Conformance to W3C Specification

**@yourd/did-parser** strictly adheres to the **W3C's DID Core Specification**, ensuring:

- ✅ **Accuracy and Reliability**: DIDs and DID URLs are parsed and handled with the utmost precision.
- 🔄 **Syntactical Correctness**: Guarantees that DIDs are syntactically correct as per the standard.
- 🌐 **Compatibility and Interoperability**: Ensures seamless integration across different platforms and systems that leverage DIDs.

📘 For a deeper dive into the DID Core Specification, readers are highly encouraged to explore the [official W3C documentation](https://www.w3.org/TR/did-core/).

## Usage

### Importing the Parser
```js
import { Parser } from '@yourd/did-parser';
```
### Parsing a DID
To parse a DID string:

```js
const parser = new Parser();
const parsedDID = parser.parseDID('did:example:123');
```

If the DID string is valid, parsedDID will contain the method and methodSpecificId. If not, it will return null.

### Parsing a DID URL
To parse a DID URL:

```js
const parsedDIDURL = parser.parseDIDURL('did:example:123/path?query=value#fragment');
```

A valid DID URL will return an object containing the method, methodSpecificId, and optionally, pathAbempty, query, and fragment.

### Assurance with @yourd/did-parser

The `@yourd/did-parser` ensures rigorous parsing and validation, affirming that DIDs are syntactically correct and conform to the established DID syntax, providing a layer of assurance and reliability in DID operations.

## ⚠️ Disclaimer

While we've put in great effort to ensure the accuracy and reliability of `@yourd/did-parser`, please be aware that all tools come with their own set of limitations. Any consequences or results stemming from the use of this library fall under the responsibility of the user. Always double-check your results, and use the library wisely and cautiously.

## 🤝 Contribution

Contributions to `@yourd/did-parser` are always welcome. If you're looking to contribute, please follow these steps:

1. **Open an Issue**: Before making any changes, it's recommended to open an issue to discuss potential improvements or fixes.
2. **Refer to the Issue**: Once you've opened an issue and are ready to make your changes, please reference your issue in your commits. This helps in tracking contributions and ensuring that your additions are in line with the project's goals.
3. **Follow the Code Style**: Ensure that your code adheres to the project's coding standards.
4. **Submit a Pull Request**: Once your changes are ready, submit a pull request for review.

Your contributions are greatly appreciated, and they help in making the library better for everyone.

## 📜 License

`@yourd/did-parser` is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html). For more details, check the `LICENSE` file in the repository.

