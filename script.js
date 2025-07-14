function calculateAge() {
  const dobValue = document.getElementById("dob").value;

  // Step 1: Check if input is empty
  if (!dobValue) {
    document.getElementById("result").innerText = "Please enter your Date of Birth.";
    return;
  }

  // Step 2: Convert DOB and today's date into Date objects
  const dob = new Date(dobValue);
  const today = new Date();

  // Step 3: Calculate difference in years, months, and days
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // Step 4: Adjust if days are negative
  if (days < 0) {
    months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate(); // Add total days of previous month
  }

  // Step 5: Adjust if months are negative
  if (months < 0) {
    years--;
    months += 12;
  }

  // Step 6: Display result
  document.getElementById("result").innerText = 
    `You are ${years} years, ${months} months and ${days} days old.`;
}
