const ObjectsToCsv = require("objects-to-csv");
const { callAPI, fetchData } = require("./fetchListData");

async function generateCSV(address, pageSize) {
  try {
    let jsonData = await callAPI(address, pageSize);
    if (!jsonData) {
      jsonData = await fetchData();
      console.log("Using mock api response instead");
    }
    const listings =
      jsonData?.data?.propertySearch?.propertySearchListings || [];
    const csvData = listings
      .filter((listing) => listing.id)
      .map((listing) => ({
        "Listing ID": listing.id,
        "Listing Title": listing.headingSection?.heading || "N/A",
        "Nightly Price":
          listing.priceSection?.priceSummary?.displayMessages?.[0]
            ?.lineItems?.[0]?.price?.formatted || "N/A",
        "Listing URL": listing.cardLink?.resource.value || "N/A",
      }));

    //using timestamp to identify time of creation of csv file
    const timestamp = new Date().toISOString().replace(/:/g, "-");

    const csvfile = new ObjectsToCsv(csvData);
    await csvfile.toDisk(`./listings/listing_${timestamp}.csv`);
    console.log("CSV file generated successfully.");
  } catch (error) {
    console.error("Error generating CSV:", error);
  }
}

const address = process.argv[2];
const pageSize = parseInt(process.argv[3]);

// Check if both arguments are present
if (process.argv.length !== 4) {
  console.error(
    "Argument mismatch. Usage: node generateList.js <address> <page_size>"
  );
  process.exit(1);
}

// Check if pageSize is a valid number
if (isNaN(pageSize) || pageSize < 0) {
  console.error("Page size must be a positive number.");
  process.exit(1); // Exit with error code 1
}

generateCSV(address, pageSize);
