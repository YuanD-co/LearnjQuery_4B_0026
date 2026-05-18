$(document).ready(function() {
    $('#btnSumbit').on('click', function() {
        let newName = $('#inputNama').val();
        let newEmail = $('#inputEmail').val();
        let newNim = $('#inputNim').val();

        let pNama = $('<p></p>').text(newName).addClass('nama');
        let pEmail = $('<p></p>').text(newEmail).addClass('email');
        let pNim = $('<p></p>').text(newNim).addClass('nim');

        $('#result').append(pNama, pEmail, pNim);
    });
});