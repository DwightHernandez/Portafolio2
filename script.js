document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const skillsSection = document.getElementById('skillsSection');
  const selectedSkills = []; // Array para almacenar habilidades seleccionadas

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const identification = document.getElementById('identification').value;
    if (!/^\d+$/.test(identification)) {
      alert('La identificación debe contener solo números.');
      return;
    }

    const name = document.getElementById('name').value;
    if (!/^[A-Za-z\s]+$/.test(name)) {
      alert('El nombre debe contener solo letras.');
      return;
    }

    const imageURL = document.getElementById('imageURL').value;
    const repositoryURL = document.getElementById('repositoryURL').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const data = {
      "numero_identificacion": identification,
      "nombre": name,
      "proyectos_relevantes": {
        "url_imagen": imageURL,
        "url_repositorio": repositoryURL,
        "titulo": title,
        "descripcion": description
      },
      "habilidades": selectedSkills, // Usamos las habilidades seleccionadas
      "contactos": [] // Añade aquí la lógica para obtener los contactos
    };

    // Enviar los datos al servidor (json-server)
    addToJSON(data);

    // Mostrar la sección de la tabla con los datos
    document.getElementById('tableSection').style.display = 'block';
    fillTable(data);
  });

  const skillsList = [
    'JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'C++', 'Ruby', 'PHP', 'Swift', 'React', 'Angular', 'Node.js',
    'Vue.js', 'Express.js', 'Spring', 'Django', 'Ruby on Rails', 'ASP.NET', 'MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'
  ];

  skillsList.forEach(skill => {
    const button = document.createElement('button');
    button.innerText = skill;
    button.addEventListener('click', () => {
      if (!selectedSkills.includes(skill)) {
        selectedSkills.push(skill);
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skillItem');
        skillDiv.innerHTML = `<img src="icon.png" alt="${skill}">${skill}
          <button onclick="removeSkill(this)">Eliminar</button>`;
        skillsSection.appendChild(skillDiv);
      }
    });
    skillsSection.appendChild(button);
  });
});

function removeSkill(button) {
  // Elimina la habilidad del array y del DOM
  const skillToRemove = button.parentElement.innerText.trim();
  const index = selectedSkills.indexOf(skillToRemove);
  if (index !== -1) {
    selectedSkills.splice(index, 1);
  }
  // Modificamos la forma de encontrar el elemento a eliminar
  button.parentElement.parentElement.removeChild(button.parentElement);
}

function addToJSON(data) {
  const apiUrl = 'http://127.0.0.1:5010/registros'; // URL de la API (json-server)
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(jsonData => {
    console.log('Datos almacenados exitosamente:', jsonData);
    // Puedes mostrar un mensaje o redirigir a otra página aquí si lo deseas
  })
  .catch(error => console.error('Error al almacenar datos:', error));
}

// Nueva función para llenar la tabla con los datos del usuario
function fillTable(data) {
  document.getElementById('tableIdentification').innerText = data.numero_identificacion;
  document.getElementById('tableName').innerText = data.nombre;
  document.getElementById('tableImageURL').innerText = data.proyectos_relevantes.url_imagen;
  document.getElementById('tableRepositoryURL').innerText = data.proyectos_relevantes.url_repositorio;
  document.getElementById('tableTitle').innerText = data.proyectos_relevantes.titulo;
  document.getElementById('tableDescription').innerText = data.proyectos_relevantes.descripcion;

      const skillsListElement = document.getElementById('tableSkills');
      skillsListElement.innerHTML = ''; // Limpiamos el contenido existente

      const skillsList = data.habilidades;
      const skillsListItems = skillsList.map(skill => `<li>${skill}</li>`).join('');
      skillsListElement.innerHTML = `<ul>${skillsListItems}</ul>`;
    }