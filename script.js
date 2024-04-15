const input = document.getElementById("user-input");
const results = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

input.focus();

const telephoneCheck = () => {
    const validPatterns = [
        // 555-555-5555
        /^\d{3}-\d{3}-\d{4}$/,
        // 1 555-555-5555
        /^1 \d{3}-\d{3}-\d{4}$/,
        // 1 (555) 555-5555
        /^1 \(\d{3}\) \d{3}-\d{4}$/,
        // 5555555555
        /^\d{10}$/,
        // (555)555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/,
        // 1 555 555 5555
        /^1 \d{3} \d{3} \d{4}$/,
        // 1(555)555-5555
        /1\(\d{3}\)\d{3}-\d{4}/
    ];
    const check = validPatterns.some((pattern) => pattern.test(input.value));
    console.log(check);
    if(!input.value){
        return alert("Please provide a phone number")
    }else{
        if(check){
            results.classList.remove('hidden');
            return results.innerHTML = `
            <p>Valid US number: ${input.value}</p>
            `;
        }else{
            results.classList.remove('hidden');
            return results.innerHTML = `
            <p>Invalid US number: ${input.value}</p>
            `;
        }
    }
}

const telephoneClear = () => {
    results.classList.add('hidden');
    results.innerHTML = "";
    input.value = "";
    input.focus();
}

checkBtn.addEventListener('click', telephoneCheck);
clearBtn.addEventListener('click', telephoneClear);

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        telephoneCheck();
    }
});