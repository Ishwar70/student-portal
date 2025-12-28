let data = [...students]; // copy array

render(data);

// ============= RENDER TABLE =============
function render(arr) {
  const box = document.getElementById("table-container");
  box.innerHTML = "";

  const table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <th>ID</th><th>Name</th><th>Gender</th><th>Class</th>
      <th>Marks</th><th>Passing</th><th>Email</th>
    </tr>
  `;

  arr.forEach(s => {
    table.innerHTML += `
      <tr>
        <td>${s.id}</td>
        <td class="name-cell"><img src="${s.img_src}">${s.first_name} ${s.last_name}</td>
        <td>${s.gender}</td>
        <td>${s.class}</td>
        <td>${s.marks}</td>
        <td>${s.passing ? "Passing" : "Failed"}</td>
        <td>${s.email}</td>
      </tr>`;
  });

  box.appendChild(table);
}

// ============= SEARCH =============
const searchInput = document.getElementById("searchInput");
document.getElementById("searchBtn").addEventListener("click", filterSearch);
searchInput.addEventListener("input", filterSearch);

function filterSearch() {
  const text = searchInput.value.toLowerCase();
  const result = students.filter(s =>
    s.first_name.toLowerCase().includes(text) ||
    s.last_name.toLowerCase().includes(text) ||
    s.email.toLowerCase().includes(text)
  );
  render(result);
}

// ============= SORT A-Z =============
document.getElementById("sortAZ").onclick = () => {
  data.sort((a,b)=> (a.first_name + a.last_name).localeCompare(b.first_name + b.last_name));
  render(data);
};

// ============= SORT Z-A =============
document.getElementById("sortZA").onclick = () => {
  data.sort((a,b)=> (b.first_name + b.last_name).localeCompare(a.first_name + a.last_name));
  render(data);
};

// ============= SORT MARKS =============
document.getElementById("sortMarks").onclick = () => {
  data.sort((a,b)=> a.marks - b.marks);
  render(data);
};

// ============= SHOW PASSING ONLY =============
document.getElementById("sortPassing").onclick = () => {
  render(students.filter(s => s.passing));
};

// ============= SORT CLASS =============
document.getElementById("sortClass").onclick = () => {
  data.sort((a,b)=> a.class - b.class);
  render(data);
};

// ============= GENDER SPLIT =============
document.getElementById("sortGender").onclick = () => {
  const container = document.getElementById("table-container");
  container.innerHTML = "";

  const males = students.filter(s => s.gender.toLowerCase().includes("male"));
  const females = students.filter(s => s.gender.toLowerCase().includes("female"));

  render(males);
  render(females);
};
