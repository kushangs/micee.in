window.addEventListener("load", function() {
    const form = document.getElementById('formtosheet');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Thank You, expect a call from our team Soon!");
      })
    });
  });
  
