const inputElement = document.getElementById('inputbox');
var h = inputElement.scrollHeight;
const headdiv = document.getElementById('rules-wrapper');
const div1 = document.getElementById('div_1');
const div1_head = document.getElementById('div1_child');
const icon1 = document.getElementById('icon1');
const div1_foot = document.getElementById('div1_grandChild');
var append2 = false;
inputElement.addEventListener('input', function () {
    if (inputElement.scrollHeight > h) this.style.height = (this.scrollHeight) + 'px';
    var content = inputElement.value;
    // RULE-1 
    var flag = false, flag2 = false;
    for (let i = 0; i < content.length; i++) {
        if (content[i] == '\n') continue;
        if (content[i] >= '0' && content[i] <= '9') {
            flag = true;
            break;
        }
    }
    // PASS STATE
    if (flag === true) {
        div1_head.style.backgroundColor = '#86efac  ';
        icon1.style.color = '#059669';
        icon1.innerHTML = 'done';
        div1_foot.style.backgroundColor = '#d1fae5';
        div1.style.borderColor = '#059669';

        if (append2 === false) {
            const span1 = document.createElement('span');
            const span2 = document.createElement('span');
            const span3 = document.createElement('span');
            const span4 = document.createElement('span');
            span1.id = 'icon2';
            span1.textContent = 'Close';
            span2.textContent = 'Rule';
            span3.textContent = '2';
            span4.textContent = 'Your password must have 5 letters.';
            span1.className = 'material-symbols-outlined pr-1 text-red-600';
            const div_first = document.createElement('div');
            div_first.id = 'div2_child';
            div_first.appendChild(span1);
            div_first.appendChild(span2);
            div_first.appendChild(span3);
            div_first.className = 'bg-red-300 p-2 flex align-middle rounded-t-md transition ease-in-out duration-700';
            const div_second = document.createElement('div');
            div_second.id = 'div2_grandChild';
            div_second.appendChild(span4);
            div_second.className = 'bg-red-100 p-2 pl-3 rounded-b-md transition ease-in-out duration-700';
            const div_2 = document.createElement('div');
            div_2.id = 'div_2';
            div_2.appendChild(div_first);
            div_2.appendChild(div_second);
            div_2.className = 'my-5 mx-10 flex flex-col border-2 border-red-600 rounded-md text-md transition ease-in-out duration-700';

            headdiv.appendChild(div_2);
            append2 = true;
        }
    }

    // FAIL STATE
    else {
        div1_head.style.backgroundColor = '#fca5a5';
        icon1.style.color = '#dc2626';
        icon1.innerHTML = 'close';
        div1_foot.style.backgroundColor = '#fee2e2';
        div1.style.borderColor = '#dc2626';
    }

    if (content.length >= 5) {
        console.log("true");
        const div2 = document.getElementById('div_2');
        const div2_head = document.getElementById('div2_child');
        const icon2 = document.getElementById('icon2');
        const div2_foot = document.getElementById('div2_grandChild');
        div2_head.style.backgroundColor = '#86efac';
        icon2.style.color = '#059669';
        icon2.innerHTML = 'done';
        div2_foot.style.backgroundColor = '#d1fae5';
        div2.style.borderColor = '#059669';
    }
    else {
        const div2 = document.getElementById('div_2');
        const div2_head = document.getElementById('div2_child');
        const icon2 = document.getElementById('icon2');
        const div2_foot = document.getElementById('div2_grandChild');
        div2_head.style.backgroundColor = '#fca5a5';
        icon2.style.color = '#dc2626';
        icon2.innerHTML = 'close';
        div2_foot.style.backgroundColor = '#fee2e2';
        div2.style.borderColor = '#dc2626';
    }
});
const container = document.getElementById('rules-wrapper');
const divElements = Array.from(container.querySelectorAll('div[id^="div_"]'));
divElements.sort((a, b) => {
    const idA = parseInt(a.id.split('_')[1]);
    const idB = parseInt(b.id.split('_')[1]);
    return idA - idB;
});
container.innerHTML = '';
divElements.forEach(div => container.appendChild(div));