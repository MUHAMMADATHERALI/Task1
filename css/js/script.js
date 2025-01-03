let dataArray = JSON.parse(localStorage.getItem("enrollmentData")) || [];
const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

// Function to display data in the table
function displayData() {
    tableBody.innerHTML = ""; // Clear existing rows
    dataArray.forEach((data, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${data.firstName} ${data.lastName}</td>
            <td>${data.address1}, ${data.address2}, ${data.city}, ${data.region}, ${data.postalCode}, ${data.country}</td>
            <td>${data.gender}</td>
            <td>${data.englishClass}</td>
            <td>${data.mathClass}</td>
            <td>${data.scienceClass}</td>
            <td>${data.comments}</td>
            <td class="actions">
                <button onclick="deleteRow(${index})">Delete</button>
                <button onclick="editRow(${index})">Update</button>
            </td>
        `;
    });
}

// Add new row to data array and table
document.getElementById("enrollmentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        address1: document.getElementById("address1").value.trim(),
        address2: document.getElementById("address2").value.trim(),
        city: document.getElementById("city").value.trim(),
        region: document.getElementById("region").value.trim(),
        postalCode: document.getElementById("postalCode").value.trim(),
        country: document.getElementById("country").value,
        gender: document.querySelector('input[name="gender"]:checked')?.value || "N/A",
        englishClass: document.getElementById("englishClass").value,
        mathClass: document.getElementById("mathClass").value,
        scienceClass: document.getElementById("scienceClass").value,
        comments: document.getElementById("comments").value.trim(),
    };

    dataArray.push(formData);
    localStorage.setItem("enrollmentData", JSON.stringify(dataArray));
    displayData();
    document.getElementById("enrollmentForm").reset();
});

// Delete row
function deleteRow(index) {
    dataArray.splice(index, 1);
    localStorage.setItem("enrollmentData", JSON.stringify(dataArray));
    displayData();
}

// Edit row
function editRow(index) {
    const data = dataArray[index];
    document.getElementById("firstName").value = data.firstName;
    document.getElementById("lastName").value = data.lastName;
    document.getElementById("address1").value = data.address1;
    document.getElementById("address2").value = data.address2;
    document.getElementById("city").value = data.city;
    document.getElementById("region").value = data.region;
    document.getElementById("postalCode").value = data.postalCode;
    document.getElementById("country").value = data.country;
    document.querySelector(`input[name="gender"][value="${data.gender}"]`).checked = true;
    document.getElementById("englishClass").value = data.englishClass;
    document.getElementById("mathClass").value = data.mathClass;
    document.getElementById("scienceClass").value = data.scienceClass;
    document.getElementById("comments").value = data.comments;

    deleteRow(index); // Remove the row so it can be re-added upon submission
}

// Load data on page load
window.onload = displayData;
