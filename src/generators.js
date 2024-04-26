function generateRandomPassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?{}[]";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

const password = generateRandomPassword(12);
console.log(password);

function generateRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return color;
}

const color = generateRandomColor();
console.log(`Generated color: ${color}`);

/**
 * Generates a random first name based on the specified sex.
 *
 * @param {string} [sex="female"] - The sex for which to generate the first name. Possible values are "female" and "male".
 * @returns {string} The randomly generated first name.
 * @throws {Error} If an invalid sex parameter is provided.
 *
 * @example
 * // Generate a random female first name
 * const firstName = generateFirstName();
 * console.log(firstName); // Output: "Emma"
 *
 * @example
 * // Generate a random male first name
 * const firstName = generateFirstName("male");
 * console.log(firstName); // Output: "Liam"
 */
function generateFirstName(sex = "female") {
  const femaleNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia"];
  const maleNames = ["Liam", "Noah", "William", "James", "Oliver"];

  let names;
  if (sex === "female") {
    names = femaleNames;
  } else if (sex === "male") {
    names = maleNames;
  } else {
    throw new Error("Invalid sex parameter");
  }

  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

const firstName = generateFirstName("male");
console.log(`Generated first name: ${firstName}`);

// Create function which will an excel table with manual tests based on the provided array of objects with test data: testCaseId, name, steps, expected, actual, status

function createExcelTable(testData) {
  const excel = require("exceljs");
  const workbook = new excel.Workbook();
  const worksheet = workbook.addWorksheet("Test Cases");

  worksheet.columns = [
    { header: "Test Case ID", key: "testCaseId", width: 10 },
    { header: "Name", key: "name", width: 20 },
    { header: "Steps", key: "steps", width: 50 },
    { header: "Expected", key: "expected", width: 20 },
    { header: "Actual", key: "actual", width: 20 },
    { header: "Status", key: "status", width: 10 },
  ];

  testData.forEach((data) => {
    worksheet.addRow(data);
  });

  workbook.xlsx.writeFile("test-cases.xlsx").then(() => {
    console.log("Excel file created successfully");
  });
}
