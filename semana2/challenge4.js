function landMass(name,area) {
    percent = ((area*100)/148940000);
    percent = percent.toFixed(2);
    return {
        "percent": Number.parseFloat(percent),
        "message": `${name} representa el ${percent}% de la masa de la tierra`
    }
}
module.exports = landMass;