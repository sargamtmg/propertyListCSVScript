# Property Listing Script

This script fetches data from an API based on the provided address and page size, and generates a CSV file containing property listing information.

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`

## Usage

To run the script, use the following command: node generateList.js <address> <pageSize>

Replace `<address>` with the address of the location you want to fetch listings for, and `<pageSize>` with the desired page size (number of listings per page).

Example:
**node generateList.js "73 W Monroe St, Chicago, IL 60603, USA" 30**

This will fetch property listings for the address "73 W Monroe St, Chicago, IL 60603, USA" with a page size of 30 listings per page.

## Arguments

- `<address>`: The address of the location (string).
- `<pageSize>`: The page size for fetching listings (number).

## Methodology

I have created mainly two js file. 1st is to fetch the data and 2nd for generating csv file from the list inside the data. While trying to fetch data from API directly, I am facing 403 forbidden issue, so, I have added the consition that if executing API request doesn't provide me necessary data, I will use mock data that I have stored in file called response.json. Finally data either from API fetch or mock data, csv file will be generated in listings folder.

## Output

The script generates a CSV file named `listing_<timestamp>.csv` in the folder named listings, containing the following columns:

- Listing ID
- Listing Title
- Nightly Price
- Listing URL

## Dependencies
- axios: ^1.6.8
- objects-to-csv: ^1.3.6

