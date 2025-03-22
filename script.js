// Function to show the next step and update the progress bar
function nextStep(step) {
    // Hide current step
    document.querySelector('.step.active').classList.remove('active');
    
    // Show next step
    document.getElementById('step' + step).classList.add('active');
    
    // Update progress bar
    let progress = (step - 1) * 33.3;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressPercentage').innerText = Math.round(progress) + '%';
  }

  // Function to show the previous step and update the progress bar
  function prevStep(step) {
    // Hide current step
    document.querySelector('.step.active').classList.remove('active');
    
    // Show previous step
    document.getElementById('step' + step).classList.add('active');
    
    // Update progress bar
    let progress = (step - 1) * 33.3;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressPercentage').innerText = Math.round(progress) + '%';
  }



   // JavaScript for search functionality for step 8 and 9 form
   const searchBox = document.getElementById('searchBox');
   const brandItems = document.querySelectorAll('.brand-item');
   const brandNameBox = document.getElementById('brandNameBox');
   const brandNameItem = document.querySelectorAll('.brandName-item');
   const YearNameBox = document.getElementById('YearNameBox');
   const YearNameItem = document.querySelectorAll('.YearName-item');

   searchBox.addEventListener('input', function () {
       const searchValue = searchBox.value.toLowerCase();
       brandItems.forEach(item => {
           const brandName = item.getAttribute('data-name').toLowerCase();
           if (brandName.includes(searchValue)) {
               item.style.display = 'flex';
           } else {
               item.style.display = 'none';
           }
       });
   });

   brandNameBox.addEventListener('input', function () {
       const searchValue = brandNameBox.value.toLowerCase();
       brandNameItem.forEach(item => {
           const brandNameTitle = item.getAttribute('data-name').toLowerCase();
           if (brandNameTitle.includes(searchValue)) {
               item.style.display = 'flex';
           } else {
               item.style.display = 'none';
           }
       });
   });

   YearNameBox.addEventListener('input', function () {
    const searchValue = YearNameBox.value.toLowerCase();
    YearNameItem.forEach(item => {
        const YearNameTitle = item.getAttribute('data-name').toLowerCase();
        if (YearNameTitle.includes(searchValue)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});



// fucntion for range input value
function updateValue(value) {
    document.getElementById('rangeValue').textContent = value;
  }

  function updateValue1(value) {
    document.getElementById('rangeValue1').textContent = value;
  }

  function updateValue2(value) {
    document.getElementById('rangeValue2').textContent = value;
  }




//Loading Template
function showLoading() {
    var loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));

    var step3 = document.getElementById('step3'); // Get the section element
    var step4 = document.getElementById('step4'); // Get the next step section

    loadingModal.show();

    // Simulate loading process
    setTimeout(() => {
        loadingModal.hide(); // Hide loading modal
        
        // Hide previous section and show the next step
        step3.style.display = "none"; 
        step4.style.display = "block"; 
    }, 3000); // Hide after 3 seconds
}