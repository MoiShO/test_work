const protocol = 'http://';
const basePoint = 'localhost';
const port = 3000;
const baseUrl = `${protocol}${basePoint}:${port}`;

const api = {
  getNotes: {method: "GET" ,endPoint: `${baseUrl}/notes`},
  getNoteById:{method: "GET" ,endPoint: `${baseUrl}/notes/`},
  addNote: {method: "POST" ,endPoint: `${baseUrl}/notes`},
  delNoteById: {method: "DELETE" ,endPoint: `${baseUrl}/notes/`},
  updateNoteById: {method: "PUT" ,endPoint: `${baseUrl}/notes/`}
};

export default api;