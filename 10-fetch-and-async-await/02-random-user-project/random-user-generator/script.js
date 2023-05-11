// 

const generateUserButton = document.getElementById("generate");
const userContainer = document.getElementById("user");

// Add CSS class to hide the initial user
userContainer.classList.add("hidden");

function generateUser() {
  // Show spinner while loading data
  const spinner = document.querySelector(".spinner");
  spinner.classList.remove("hidden");

  // Make API request
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      // Hide spinner
      spinner.classList.add("hidden");

      // Remove CSS class to show the new user
      userContainer.classList.remove("hidden");

      // Extract user data
      const userData = data.results[0];
      const name = `${userData.name.first} ${userData.name.last}`;
      const email = userData.email;
      const phone = userData.phone;
      const city = userData.location.city;
      const state = userData.location.state;
      const country = userData.location.country;
      const age = userData.dob.age;
      const picture = userData.picture.large;

      // Update DOM with user data
      const userHtml = `
        <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${picture}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span> ${name}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${city}, ${state}, ${country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${age}</p>
            </div>
          </div>
        </div>
      `;
      userContainer.innerHTML = userHtml;
    })
    .catch((error) => {
      console.error(error);
      alert("An error occurred while fetching user data.");
    });
}

generateUserButton.addEventListener("click", generateUser);
