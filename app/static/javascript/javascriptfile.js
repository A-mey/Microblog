document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('select').onchange = function() {
    document.body.style.backgroundColor = this.value;
  }
})