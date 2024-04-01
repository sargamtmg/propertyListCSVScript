# Property Listing Script

This script fetches data from an API based on the provided address and page size, and generates a CSV file containing property listing information.

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`

## Usage

To run the script, use the following command: node generateList.js <address> <pageSize>

Replace `<address>` with the address of the location you want to fetch listings for, and `<pageSize>` with the desired page size (number of listings per page).

Example:
node generateList.js "73 W Monroe St, Chicago, IL 60603, USA" 30

This will fetch property listings for the address "123 Main St, City, Country" with a page size of 50 listings per page.

## Arguments

- `<address>`: The address of the location (string).
- `<pageSize>`: The page size for fetching listings (number).

## Output

The script generates a CSV file named `listing_<timestamp>.csv` in the current directory, containing the following columns:

- Listing ID
- Listing Title
- Nightly Price
- Listing URL

## Dependencies
-axios: ^1.6.8,
-objects-to-csv: ^1.3.6

