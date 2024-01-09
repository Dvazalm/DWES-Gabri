// Importa los módulos necesarios
import fs from 'fs';
import { prompt } from 'inquirer';
import readline from 'readline';

const noteDirectory = './notes/';

// Crea el directorio de notas si no existe
if (!fs.existsSync(noteDirectory)) {
  fs.mkdirSync(noteDirectory);
}

// Función para listar las notas disponibles
function listNotes() {
  const files = fs.readdirSync(noteDirectory);

  console.log('Notas Disponibles:');
  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
}

// Función para crear una nueva nota
function createNote() {
  prompt([
    {
      type: 'input',
      name: 'noteName',
      message: 'Nombre de la nueva nota (sin extensión):',
    },
    {
      type: 'editor',
      name: 'noteContent',
      message: 'Escribe la nota:',
    },
  ])
    .then((answers) => {
      fs.writeFileSync(`${noteDirectory}${answers.noteName}.note`, answers.noteContent);
      console.log('Nota creada con éxito.');
    });
}

// Función para editar una nota existente
function editNote() {
  listNotes();

  prompt([
    {
      type: 'input',
      name: 'noteIndex',
      message: 'Ingrese el número de la nota que desea editar:',
    },
  ])
    .then((answer) => {
      const selectedNote = fs.readdirSync(noteDirectory)[answer.noteIndex - 1];
      const filePath = `${noteDirectory}${selectedNote}`;

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const content = [];

      console.log('Editando la nota. Presione Enter dos veces seguidas para guardar.');

      rl.on('line', (line) => {
        content.push(line);
      });

      rl.on('close', () => {
        fs.writeFileSync(filePath, content.join('\n'));
        console.log('Nota editada con éxito.');
      });

      fs.createReadStream(filePath).pipe(rl);
    });
}

// Función para eliminar una nota
function deleteNote() {
  listNotes();

  prompt([
    {
      type: 'input',
      name: 'noteIndex',
      message: 'Ingrese el número de la nota que desea eliminar:',
    },
  ])
    .then((answer) => {
      const selectedNote = fs.readdirSync(noteDirectory)[answer.noteIndex - 1];
      const filePath = `${noteDirectory}${selectedNote}`;

      fs.unlinkSync(filePath);
      console.log('Nota eliminada con éxito.');
    });
}

// Menú principal
// Menú principal
function mainMenu() {
  prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Seleccione una acción:',
      choices: ['Crear nueva nota', 'Editar nota existente', 'Eliminar nota', 'Salir'],
    },
  ])
    .then((answer) => {
      switch (answer.action) {
        case 'Crear nueva nota':
          createNote();
          break;
        case 'Editar nota existente':
          editNote();
          break;
        case 'Eliminar nota':
          deleteNote();
          break;
        case 'Salir':
          process.exit();
          break;
        default:
          console.log('Acción no válida. Por favor, elija una opción válida.');
          mainMenu(); // Volver al menú principal
          break;
      }
    });
}

// Ejecuta el programa
mainMenu();
