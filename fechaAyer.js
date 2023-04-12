
function fechaAyer() {
    var today = new Date();
    var yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
}

console.log(fechaAyer());

module.exports = fechaAyer;