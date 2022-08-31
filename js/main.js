// $(document).ready(function() {

// });


let searchForm = document.querySelector('#input')
let reg = /!@#$%^&*()/

searchForm.oninput = function() {
  this.value = this.value.replace(reg, '')
}