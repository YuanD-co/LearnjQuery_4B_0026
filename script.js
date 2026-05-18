const inputNama = document.getElementById('inputNama');
const inputEmail = document.getElementById('inputEmail');
const inpuNim = document.getElementById('inputNim');
const btn = document.getElementById('btnSumbit');

const result = document.getElementById('result');

btn.addEventListener('click', function(){

    let newName = inputNama.value;
    let newEmail = inputEmail.value;
    let newNim = inputNim.value;

    let pNama = document.createElement('p');
    pNama.innerHTML = newName;
    pNama.className = 'nama';

   let pEmail = document.createElement('p');
   pEmail.innerHTML = newEmail;
    pEmail.className = 'email';

   let pNim = document.createElement('p');
   pNim.innerHTML = newNim;
   pNim.className = 'nim';

   result.appendChild(pNama);
   result.appendChild(pEmail);
   result.appendChild(pNim);
})