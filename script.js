      
      
      // Get the form elements of Renting Cars Part 1


      const form = document.querySelector('#rentingForm');
      const addressSelect = document.getElementById('address');
      const carTypeSelect = document.getElementById('cars');
      const quantityInput = document.getElementById('quantity');
      const pickupDateInput = document.getElementById('pickup-date');
      const resultContainer = document.getElementById('result');
      
      // Calculate the total cost
      form.addEventListener('submit', function (e) {
        e.preventDefault();
      
        // Get the selected car type, quantity of days, and pick-up date
        const address = addressSelect.value;
        const carType = carTypeSelect.value;
        const quantity = parseInt(quantityInput.value);
        const pickupDate = new Date(pickupDateInput.value);
      
        // Calculate the total cost
        let costPerDay = 0;
      
        switch (carType) {
          case 'Tesla':
            costPerDay = 100;
            break;
          case 'Lamborghini':
            costPerDay = 300;
            break;
          case 'Bentley':
            costPerDay = 500;
            break;
          case 'Ferrari':
            costPerDay = 200;
            break;
          case 'Noha':
            costPerDay = 50;
            break;
          default:
            costPerDay = 0;
        }
      
        const totalCost = costPerDay * quantity;
      
        // Display the result
        const formattedDate = pickupDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      
      
        resultContainer.textContent = `Total cost for ${quantity} days with ( ${carType} ) starting from ${formattedDate} is : $${totalCost}, Xaafaduna waa : ${address}`;
      
      });


      





    
      //   Car Rating Js code Starts Here !!!




// Get all custom boxes

const customBoxes = document.getElementsByClassName("custom-box");

for (const box of customBoxes) {
  let count = 0;
  
  const likeInput = box.querySelector(".like");
  const unlikeInput = box.querySelector(".unlike");
  const countLabel = box.querySelector(".countLabel");

  likeInput.onclick = function (e) {
    count++;
    countLabel.innerHTML = count;
  };

  unlikeInput.onclick = function (e) {
    count--;
    countLabel.innerHTML = count;
  };
}
