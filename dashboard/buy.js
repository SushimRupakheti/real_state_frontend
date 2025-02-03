function showDetails(property) {
    // Get the sliding panel and set content based on the clicked property
    const slidePanel = document.getElementById('slidePanel');
    const title = document.getElementById('propertyTitle');
    const details = document.getElementById('propertyDetails');
  
    // Change the content of the panel based on the property clicked
    if (property === 'triVilla') {
      title.textContent = 'TriVilla Pokhara-8';
      details.textContent = 'Detailed information about TriVilla Pokhara-8: 1B Aana, 2 Storey, 4 rooms. Price: $3.4 Cr.';
    } else if (property === 'bungalowPokhara') {
      title.textContent = 'Bungalow, Pokhara';
      details.textContent = 'Detailed information about the Bungalow in Pokhara: 24 Aana, 2.5 Storey, 6 rooms. Price: $3.4 Cr.';
    }
  
    // Slide in the panel from the right
    slidePanel.style.right = '0';
  }
  
  function closePanel() {
    // Close the panel by sliding it out to the right
    const slidePanel = document.getElementById('slidePanel');
    slidePanel.style.right = '-400px'; /* Hide the panel */
  }
  