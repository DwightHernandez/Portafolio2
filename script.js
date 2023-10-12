document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const skillsSection = document.getElementById('skillsSection');
  const selectedSkills = []; // Array para almacenar habilidades seleccionadas temporalmente

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

    // Mostrar la sección de la tabla con los datos
    document.getElementById('tableSection').style.display = 'block';
    fillTable(data);

    // Enviar los datos al servidor (json-server)
    addToJSON(data);
  });

  const skillsList = [
    'JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'C++', 'Ruby', 'PHP', 'Swift', 'React', 'Angular', 'Node.js',
    'Vue.js', 'Express.js', 'Spring', 'Django', 'Ruby on Rails', 'ASP.NET', 'MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'
  ];

  skillsList.forEach(skill => {
    const button = document.createElement('button');
    button.innerText = skill;
    button.addEventListener('click', () => {
      // Agrega la habilidad seleccionada al array temporal
      selectedSkills.push(skill);
      updateSkillsDisplay(); // Actualiza la visualización de las habilidades
    });
    skillsSection.appendChild(button);
  });
});

function updateSkillsDisplay() {
  const skillsSection = document.getElementById('skillsSection');
  skillsSection.innerHTML = ''; // Limpiar la sección de habilidades

  selectedSkills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skillItem');
    skillDiv.innerHTML = `<img src="icon.png" alt="${skill}">${skill}
      <button onclick="removeSkill('${skill}')">Eliminar</button>`;
    skillsSection.appendChild(skillDiv);
  });
}

function removeSkill(skill) {
  // Elimina la habilidad del array temporal
  const index = selectedSkills.indexOf(skill);
  if (index !== -1) {
    selectedSkills.splice(index, 1);
    updateSkillsDisplay(); // Actualiza la visualización de las habilidades
  }
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
