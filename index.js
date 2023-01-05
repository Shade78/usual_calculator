const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const selectOperationNode = document.querySelector('.js-section-operation')
const buttonResultNode = document.querySelector('.js-btn-result');
const pOutputNode = document.querySelector('.js-output');


buttonResultNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectOperationNode.value;

    const result = calculate({
        a,
        b,
        operation
    });

    pOutputNode.innerHTML = result;

    
});
