window.onload = function(){
    var signInModal = document.getElementById('signInModal');

    var closeSignInModal = document.getElementsByClassName('closeSignInModal')[0];

    signInModal.style.display = 'block';

    closeSignInModal.onclick = function() {
        signInModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == closeSignInModal) {
            signInModal.style.display = "none";
        }
        }

    var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn = document.getElementById("newPostButton");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            btn.onclick = function() {
            modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
            modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            }
}