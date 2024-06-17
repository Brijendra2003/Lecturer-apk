
    // Initialize empty arrays to store names of students and their presence status
    let namesofstudent = [];
    let presentystatus = [];

    // Iterate through each student
    document.querySelectorAll(".list").forEach((listDiv, index) => {
      // Get the name and status for each student
      let name = document.getElementById(`name${index}`).textContent;
      let status = document.getElementById(`status${index}`).textContent;

      // Push the name and presence status into their respective arrays
      namesofstudent.push(`(${name})`);
      presentystatus.push(`('${status}')`);
    });

    // Generate the MySQL query
    let query = `INSERT INTO ${subject} ${namesofstudent.join(
      ", "
    )} VALUES ${presentystatus.join(", ")}`;

    // Send the query to the backend Node.js server
    fetch(`http://${address}:3013/saveData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Query executed successfully:", data);
      })
      .catch((error) => {
        console.error("Error executing query:", error);
      });
