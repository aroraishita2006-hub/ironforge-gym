// script.js
document.addEventListener("DOMContentLoaded", () => {

  /* NAVIGATION */

  function show(id) {

    document
      .querySelectorAll(".page")
      .forEach(p => p.classList.remove("on"));

    document
      .getElementById("pg-" + id)
      .classList.add("on");

    document
      .querySelectorAll(".nl")
      .forEach(a => {
        a.classList.toggle("on", a.dataset.s === id);
      });
  }

  document.addEventListener("click", (e) => {

    const el = e.target.closest("[data-s]");

    if (el) {
      show(el.dataset.s);
    }
  });

  /* BMI */

  window.calcBMI = function () {

    let weight =
      document.getElementById("wt").value;

    let height =
      document.getElementById("ht").value;

    let foodType =
      document.getElementById("foodType").value;

    let gender =
      document.getElementById("gender").value;

    if (weight === "" || height === "") {

      alert("Please enter weight and height");

      return;
    }

    height = height / 100;

    let bmi =
      (weight / (height * height)).toFixed(2);

    document.getElementById("bmiResult")
      .innerHTML =
      `Your BMI: ${bmi}`;

    let category = "";

    let exercise = "";

    let diet = "";

    let packageHTML = "";

    /* UNDERWEIGHT */

    if (bmi < 18.5) {

      category = "Underweight";

      if (gender === "male") {

        exercise =
          "Strength training, push-ups, muscle building workouts.";
      }

      else {

        exercise =
          "Yoga, lower body workouts, toning exercises and light strength training.";
      }

      if (foodType === "veg") {

        diet = `
          <div class="diet-chart">

            <h2>🥗 Vegetarian Weight Gain Diet</h2>

            <div class="meal">
              <span>Breakfast:</span>
              Banana Shake + Peanut Butter
            </div>

            <div class="meal">
              <span>Lunch:</span>
              Rice + Dal + Paneer
            </div>

            <div class="meal">
              <span>Evening:</span>
              Milk + Dry Fruits
            </div>

            <div class="meal">
              <span>Dinner:</span>
              Chapati + Paneer + Vegetables
            </div>

          </div>
        `;
      }

      else {

        diet = `
          <div class="diet-chart">

            <h2>🍗 Non-Veg Weight Gain Diet</h2>

            <div class="meal">
              <span>Breakfast:</span>
              Eggs + Banana Shake
            </div>

            <div class="meal">
              <span>Lunch:</span>
              Chicken + Rice + Dal
            </div>

            <div class="meal">
              <span>Evening:</span>
              Milk + Peanut Butter
            </div>

            <div class="meal">
              <span>Dinner:</span>
              Chicken + Chapati
            </div>

          </div>
        `;
      }

      packageHTML = `
        <div class="pkg">

          <h2>
            ${
              gender === "male"
              ? "💪 Beginner Muscle Gain Package"
              : "🌸 Women's Fitness Package"
            }
          </h2>

          <p>
            Trainer:
            ${
              gender === "male"
              ? "Rahul Sharma"
              : "Priya Kapoor"
            }
          </p>

          <h3>₹2999/month</h3>

        </div>
      `;
    }

    /* NORMAL */

    else if (bmi < 24.9) {

      category = "Normal Weight";

      if (gender === "male") {

        exercise =
          "Balanced cardio and strength training.";
      }

      else {

        exercise =
          "Pilates, cardio, yoga and body toning workouts.";
      }

      if (foodType === "veg") {

        diet = `
          <div class="diet-chart">

            <h2>🥗 Vegetarian Balanced Diet</h2>

            <div class="meal">
              <span>Breakfast:</span>
              Oats + Fruits
            </div>

            <div class="meal">
              <span>Lunch:</span>
              Rice + Dal + Vegetables
            </div>

            <div class="meal">
              <span>Evening:</span>
              Green Tea + Nuts
            </div>

            <div class="meal">
              <span>Dinner:</span>
              Paneer + Chapati
            </div>

          </div>
        `;
      }

      else {

        diet = `
          <div class="diet-chart">

            <h2>🍗 Non-Veg Balanced Diet</h2>

            <div class="meal">
              <span>Breakfast:</span>
              Eggs + Oats
            </div>

            <div class="meal">
              <span>Lunch:</span>
              Chicken + Rice
            </div>

            <div class="meal">
              <span>Evening:</span>
              Fruits
            </div>

            <div class="meal">
              <span>Dinner:</span>
              Fish + Vegetables
            </div>

          </div>
        `;
      }

      packageHTML = `
        <div class="pkg">

          <h2>
            ${
              gender === "male"
              ? "🔥 Pro Fitness Package"
              : "🌸 Women's Toning Package"
            }
          </h2>

          <p>
            Trainer:
            ${
              gender === "male"
              ? "Aman Verma"
              : "Sneha Kapoor"
            }
          </p>

          <h3>₹3999/month</h3>

        </div>
      `;
    }

    /* OVERWEIGHT */

    else if (bmi < 29.9) {

      category = "Overweight";

      if (gender === "male") {

        exercise =
          "Running, cycling, HIIT, cardio.";
      }

      else {

        exercise =
          "Dance cardio, skipping, yoga and fat loss workouts.";
      }

      if (foodType === "veg") {

        diet = `
          <div class="diet-chart">

            <h2>🥦 Vegetarian Fat Loss Diet</h2>

            <div class="meal">
              <span>Breakfast:</span>
              Oats + Green Tea
            </div>

            <div class="meal">
              <span>Lunch:</span>
              Brown Rice + Salad
            </div>

            <div class="meal">
              <span>Evening:</span>
              Fruits
            </div>

            <div class="meal">
              <span>Dinner:</span>
              Soup + Vegetables
            </div>

          </div>
        `;
      }

      else {

        diet = `
          <div class="diet-chart">

            <h2>🍗 Non-Veg Fat Loss Diet</h2>

            <div class="meal">
              <span>Breakfast:</span>
              Eggs + Coffee
            </div>

            <div class="meal">
              <span>Lunch:</span>
              Grilled Chicken + Salad
            </div>

            <div class="meal">
              <span>Evening:</span>
              Fruits
            </div>

            <div class="meal">
              <span>Dinner:</span>
              Fish + Vegetables
            </div>

          </div>
        `;
      }

      packageHTML = `
        <div class="pkg">

          <h2>
            ${
              gender === "male"
              ? "🏃 Fat Burn Package"
              : "💃 Women's Slim Fit Package"
            }
          </h2>

          <p>
            Trainer:
            ${
              gender === "male"
              ? "Vikram Singh"
              : "Neha Sharma"
            }
          </p>

          <h3>₹4999/month</h3>

        </div>
      `;
    }

    /* OBESE */

    else {

      category = "Obese";

      if (gender === "male") {

        exercise =
          "Walking, low-impact cardio.";
      }

      else {

        exercise =
          "Yoga, stretching, walking and light cardio workouts.";
      }

      if (foodType === "veg") {

        diet = `
          <div class="diet-chart">

            <h2>🥗 Vegetarian Transformation Diet</h2>

            <div class="meal">
              <span>Breakfast:</span>
              Apple + Green Tea
            </div>

            <div class="meal">
              <span>Lunch:</span>
              Soup + Salad
            </div>

            <div class="meal">
              <span>Evening:</span>
              Coconut Water
            </div>

            <div class="meal">
              <span>Dinner:</span>
              Boiled Vegetables
            </div>

          </div>
        `;
      }

      else {

        diet = `
          <div class="diet-chart">

            <h2>🍗 Non-Veg Transformation Diet</h2>

            <div class="meal">
              <span>Breakfast:</span>
              Eggs + Green Tea
            </div>

            <div class="meal">
              <span>Lunch:</span>
              Chicken Soup + Salad
            </div>

            <div class="meal">
              <span>Evening:</span>
              Fruits
            </div>

            <div class="meal">
              <span>Dinner:</span>
              Fish + Vegetables
            </div>

          </div>
        `;
      }

      packageHTML = `
        <div class="pkg">

          <h2>
            ${
              gender === "male"
              ? "❤️ Pro Max Transformation Package"
              : "🌸 Women's Transformation Package"
            }
          </h2>

          <p>
            Trainer:
            ${
              gender === "male"
              ? "Arjun Mehta"
              : "Priya Malhotra"
            }
          </p>

          <h3>₹6999/month</h3>

        </div>
      `;
    }

    document.getElementById("bmiCategory")
      .innerHTML =
      `Category: ${category}`;

    document.getElementById("exercise")
      .innerHTML =
      `🏋 ${exercise}`;

    document.getElementById("diet")
      .innerHTML =
      diet;

    document.getElementById("packageCard")
      .innerHTML =
      packageHTML;
  };

});