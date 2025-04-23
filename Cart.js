//document.querySelectorAll('.checkout').forEach(button => {
  //  button.addEventListener('click', function() {
        
    //});
//});

document.getElementById('cart').addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-from-cart')) {
        e.target.parentElement.remove();
    }
});
