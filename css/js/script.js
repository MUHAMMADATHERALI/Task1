document.addEventListener("DOMContentLoaded", function () {
    // Function to display data from local storage
    function displayData() {
        const storedData = JSON.parse(localStorage.getItem("enrollmentData")) || [];
        const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
        table.innerHTML = ""; // Clear existing rows

        storedData.forEach((data) => {
            const newRow = table.insertRow();
            newRow.innerHTML = `
                <td>${data.firstName} ${data.lastName}</td>
                <td>${data.address1}, ${data.address2}, ${data.city}, ${data.region}, ${data.postalCode}, ${data.country}</td>
                <td>${data.gender}</td>
                <td>${data.englishClass}</td>
                <td>${data.mathClass}</td>
                <td>${data.scienceClass}</td>
                <td>${data.comments}</td>
            `;
        });
    }

    // Display data on page load
    displayData();

    document.getElementById("enrollmentForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
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

        // Get existing data from local storage
        const enrollmentData = JSON.parse(localStorage.getItem("enrollmentData")) || [];
        
        // Push new form data to the array
        enrollmentData.push(formData);

        // Save updated array to local storage
        localStorage.setItem("enrollmentData", JSON.stringify(enrollmentData));

        // Display updated data in the table
        displayData();

        // Clear the form
        document.getElementById("enrollmentForm").reset();
    });
});
