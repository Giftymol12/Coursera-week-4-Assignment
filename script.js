

const names = ['Gifty', 'Jaison', 'Megha', 'Jomon', 'Benet', 'jomol', 'Britty', 'Geevar', 'joel', 'Manoj'];
const outputDiv = document.getElementById('output');
for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (name.charAt(0).toLowerCase() === 'j') {
        console.log(`Goodbye ${name}`);
        outputDiv.innerHTML += `<p>Goodbye ${name}</p>`;
    } else {
        console.log(`Hello ${name}`);
        outputDiv.innerHTML += `<p>Hello ${name}</p>`;
    }
}