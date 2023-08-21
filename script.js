const inputElement = document.getElementById('inputbox');
var h = inputElement.scrollHeight;
const headdiv = document.getElementById('rules-wrapper');
const state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let red = [];
let green = [];
const desc = [
    "Your password must include a number",
    "Your password must have at least 5 letters",
    "The sum of digits in the password must add up to 15",
    "Your password must include a special character",
    "The number of characters in your password must be less than 25",
    "Your password must include at least 2 uppercase letters",
    "Your password must include one of the sentences :- 'I am smart', 'I am amazing', 'I am strong'"
];
var prevend = 0;
let s1 = 'I am smart', s2 = 'I am amazing', s3 = 'I am strong';
var uppercase_letters = 0;
let alert_given = false;
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
inputElement.addEventListener('input', function () {
    var content = inputElement.value;
    if (green.length === desc.length) {
        if (!alert_given) {
            alert(`Congratulation! You finished the game with ${content.length} characters.`);
            alert_given = true;
        }
        return;
    }
    while (headdiv.firstChild) {
        headdiv.removeChild(headdiv.firstChild);
    }
    red = [];
    green = [];
    for (var i = 0; i < 10; i++)state[i] = 0;
    uppercase_letters = 0;
    var sum = 0;
    if (inputElement.scrollHeight > h) this.style.height = (this.scrollHeight) + 'px';
    for (let i = 0; i < content.length; i++) {
        let sub_s1 = '', sub_s2 = '', sub_s3 = '';
        if (content.length - i >= 10) sub_s1 = content.substring(i, i + 10);
        if (content.length - i >= 12) sub_s2 = content.substring(i, i + 12);
        if (content.length - i >= 11) sub_s3 = content.substring(i, i + 11);
        if (state[6] === 0) state[6] = (sub_s1 === s1 || sub_s2 === s2 || sub_s3 === s3) ? 1 : 0;
        var c = content[i] - '0';
        var cap = content[i] - 'A';
        if (content[i] === '\n') continue;
        if (content[i] >= '0' && content[i] <= '9') {
            state[0] = 1;
            sum += content[i] - '0';
        }
        if ((content[i] >= '!' && content[i] <= '/') || (content[i] >= ':' && content[i] <= '@') || (content[i] >= '[' && content[i] <= '`') || (content[i] >= '{' && content[i] <= '~')) state[3] = 1;
        if (content[i] >= 'A' && content[i] <= 'Z') uppercase_letters++;
    }
    state[1] = (content.length >= 5) ? 1 : 0;
    state[2] = (sum === 15) ? 1 : 0;
    state[4] = (content.length < 25) ? 1 : 0;
    state[5] = (uppercase_letters >= 2) ? 1 : 0;
    let ind;
    for (ind = 0; ind <= prevend; ind++) {
        if (state[ind] === 0) red.push(ind);
        else green.push(ind);
    }
    if (green.length !== desc.length) {
        while (red.length === 0 && green.length !== desc.length) {
            if (state[ind] === 0) red.push(ind);
            else green.push(ind);
            ind++;
        }
    }
    prevend = ind - 1;
    let Red = red.reverse();
    let Green = green.reverse();
    for (let i = 0; i < red.length; i++)add_rule1(Red[i]);
    for (let i = 0; i < green.length; i++)add_rule2(Green[i]);
    function add_rule1(i) {
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
        const span4 = document.createElement('span');
        span1.textContent = 'Close';
        span2.textContent = 'Rule\u00A0';
        span3.textContent = i + 1;
        span4.textContent = desc[i];
        span1.className = 'material-symbols-outlined pr-1 text-red-600';
        const div_first = document.createElement('div');
        div_first.appendChild(span1);
        div_first.appendChild(span2);
        div_first.appendChild(span3);
        div_first.className = 'bg-red-300 p-2 flex align-middle rounded-t-md transition ease-in-out duration-700';
        const div_second = document.createElement('div');
        div_second.appendChild(span4);
        div_second.className = 'bg-red-100 p-2 pl-3 rounded-b-md transition ease-in-out duration-700';
        const div_2 = document.createElement('div');
        div_2.appendChild(div_first);
        div_2.appendChild(div_second);
        div_2.className = ' my-5 flex flex-col border-2 border-red-600 rounded-md text-md transition ease-in-out duration-700';

        headdiv.appendChild(div_2);
    }
    function add_rule2(i) {
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
        const span4 = document.createElement('span');
        span1.textContent = 'Done';
        span2.textContent = 'Rule\u00A0';
        span3.textContent = i + 1;
        span4.textContent = desc[i];
        span1.className = 'material-symbols-outlined pr-1 text-green-600';
        const div_first = document.createElement('div');
        div_first.appendChild(span1);
        div_first.appendChild(span2);
        div_first.appendChild(span3);
        div_first.className = 'bg-green-300 p-2 flex align-middle rounded-t-md transition ease-in-out duration-700';
        const div_second = document.createElement('div');
        div_second.appendChild(span4);
        div_second.className = 'bg-green-100 p-2 pl-3 rounded-b-md transition ease-in-out duration-700';
        const div_2 = document.createElement('div');
        div_2.appendChild(div_first);
        div_2.appendChild(div_second);
        div_2.className = 'my-5 flex flex-col border-2 border-green-600 rounded-md text-md transition ease-in-out duration-700';

        headdiv.appendChild(div_2);
    }
    if (green.length === desc.length) {
        if (!alert_given) {
            setTimeout(function () {
                alert(`Congratulations! You finished the game with ${content.length} characters.`);
            }, 100);
            alert_given = true;
        }
        return;
    }
    // console.log(red + '\n' + green + '\n');
    console.log('\n' + state);
});
    // if (flag === true) {
    //     div1_head.style.backgroundColor = '#86efac  ';
    //     icon1.style.color = '#059669';
    //     icon1.innerHTML = 'done';
    //     div1_foot.style.backgroundColor = '#d1fae5';
    //     div1.style.borderColor = '#059669';

    //     if (append2 === false) {
    //         const span1 = document.createElement('span');
    //         const span2 = document.createElement('span');
    //         const span3 = document.createElement('span');
    //         const span4 = document.createElement('span');
    //         span1.id = 'icon2';
    //         span1.textContent = 'Close';
    //         span2.textContent = 'Rule';
    //         span3.textContent = '2';
    //         span4.textContent = 'Your password must have 5 letters.';
    //         span1.className = 'material-symbols-outlined pr-1 text-red-600';
    //         const div_first = document.createElement('div');
    //         div_first.id = 'div2_child';
    //         div_first.appendChild(span1);
    //         div_first.appendChild(span2);
    //         div_first.appendChild(span3);
    //         div_first.className = 'bg-red-300 p-2 flex align-middle rounded-t-md transition ease-in-out duration-700';
    //         const div_second = document.createElement('div');
    //         div_second.id = 'div2_grandChild';
    //         div_second.appendChild(span4);
    //         div_second.className = 'bg-red-100 p-2 pl-3 rounded-b-md transition ease-in-out duration-700';
    //         const div_2 = document.createElement('div');
    //         div_2.id = 'div_2';
    //         div_2.appendChild(div_first);
    //         div_2.appendChild(div_second);
    //         div_2.className = 'my-5 mx-10 flex flex-col border-2 border-red-600 rounded-md text-md transition ease-in-out duration-700';

    //         headdiv.appendChild(div_2);
    //         append2 = true;
    //     }
    // }

//     else {
//         div1_head.style.backgroundColor = '#fca5a5';
//         icon1.style.color = '#dc2626';
//         icon1.innerHTML = 'close';
//         div1_foot.style.backgroundColor = '#fee2e2';
//         div1.style.borderColor = '#dc2626';
//     }

//     if (content.length >= 5) {
//         console.log("true");
//         const div2 = document.getElementById('div_2');
//         const div2_head = document.getElementById('div2_child');
//         const icon2 = document.getElementById('icon2');
//         const div2_foot = document.getElementById('div2_grandChild');
//         div2_head.style.backgroundColor = '#86efac';
//         icon2.style.color = '#059669';
//         icon2.innerHTML = 'done';
//         div2_foot.style.backgroundColor = '#d1fae5';
//         div2.style.borderColor = '#059669';
//     }
//     else {
//         const div2 = document.getElementById('div_2');
//         const div2_head = document.getElementById('div2_child');
//         const icon2 = document.getElementById('icon2');
//         const div2_foot = document.getElementById('div2_grandChild');
//         div2_head.style.backgroundColor = '#fca5a5';
//         icon2.style.color = '#dc2626';
//         icon2.innerHTML = 'close';
//         div2_foot.style.backgroundColor = '#fee2e2';
//         div2.style.borderColor = '#dc2626';
//     }
// });
// const container = document.getElementById('rules-wrapper');
// const divElements = Array.from(container.querySelectorAll('div[id^="div_"]'));
// divElements.sort((a, b) => {
//     const idA = parseInt(a.id.split('_')[1]);
//     const idB = parseInt(b.id.split('_')[1]);
//     return idA - idB;
// });
// container.innerHTML = '';
// divElements.forEach(div => container.appendChild(div));