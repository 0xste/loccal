window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7CCVKFHQLS');

document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('templates/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading header:', error);
      });
  
    // Load footer
    fetch('templates/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  });