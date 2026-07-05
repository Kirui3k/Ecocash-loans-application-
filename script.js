document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loanForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      nid: document.getElementById("nid").value,
      dob: `${document.getElementById("year").value}-${document.getElementById("month").value}-${document.getElementById("day").value}`,
      employment: document.getElementById("employment").value,
      loanAmount: document.getElementById("loanAmount").value,
      repayment: document.getElementById("repayment").value
    };

    try {
      const response = await fetch("https://YOUR-BACKEND-URL.onrender.com/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        form.reset();
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      alert("Network error. Try again.");
    }
  });
});
