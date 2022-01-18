const form = document.getElementById('formulario');
const taskList = document.getElementById('tarefas');


// Função para criação dos objetos contendo as informações digitadas
function addTask(campos) {
	   
    const tarefaArm = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const rotuloTarefa = document.createElement('label');
	const descricaoTarefa = document.createTextNode(campos);
    
	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', campos);
	novaTarefa.setAttribute('id', campos);

	rotuloTarefa.setAttribute('for', campos);
	rotuloTarefa.appendChild(descricaoTarefa);

	tarefaArm.classList.add('item');
	tarefaArm.appendChild(novaTarefa);
	tarefaArm.appendChild(rotuloTarefa);

	taskList.appendChild(tarefaArm);
}

// Chama a função para entrada de dados.
form.onsubmit = function (e) {
	e.preventDefault();
    const inputField = document.getElementById('campoEntrada');
    if (inputField.value.trim() ===""){
        alert("Favor digitar algo para a sua lista a fazer");
    }else{
	    addTask(inputField.value);
    }
	form.reset();
};