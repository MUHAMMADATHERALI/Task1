document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const address1 = document.getElementById("address1").value.trim();
    const address2 = document.getElementById("address2").value.trim();
    const city = document.getElementById("city").value.trim();
    const region = document.getElementById("region").value.trim();
    const postalCode = document.getElementById("postalCode").value.trim();
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "N/A";
    const englishClass = document.getElementById("englishClass").value;
    const mathClass = document.getElementById("mathClass").value;
    const scienceClass = document.getElementById("scienceClass").value;
    const comments = document.getElementById("comments").value.trim();

    // Create a new table row
    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    // Insert data into the new row
    newRow.innerHTML = `
        <td>${firstName} ${lastName}</td>
        <td>${address1}, ${address2}, ${city}, ${region}, ${postalCode}, ${country}</td>
        <td>${gender}</td>
        <td>${englishClass}</td>
        <td>${mathClass}</td>
        <td>${scienceClass}</td>
        <td>${comments}</td>
    `;

    // Clear the form
    document.getElementById("enrollmentForm").reset();
});
