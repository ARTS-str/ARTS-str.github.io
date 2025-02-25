function v2Add(v1, v2) {
    let output = [v1[0] + v2[0], v1[1] + v2[1]];
    return output;
}

function v2Multv1(v1, v2) {
    let output = [v1[0] * v2, v1[1] * v2];
    return output;
}
function v2Sub(v1, v2) {
    let output = [v1[0] - v2[0], v1[1] - v2[1]];
    return output;
}

function v2Subv1(v1, v2) {
    let output = [v1[0] - v2, v1[1] - v2];
    return output;
}

function v2Dot(v1, v2) {
    let output = (v1[0] * v2[0]) + (v1[1] * v2[1]);
    return output;
}
function v2Mag(v1) {
    let output = Math.sqrt(Math.pow(v1[0], 2) + Math.pow(v1[1], 2));
    return output;
}
function v2SetMag(v1, newMag) {
    let mag = v2Mag(v1);
    let magRatio = newMag / mag;
    let output = [v1[0] * magRatio, v1[1] * magRatio];
    return output;
}