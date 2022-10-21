
function objectFilter(key, body) {
    if (body[key] && Array.isArray(body[key])) {
        if (body[key].length) {
            body[key].forEach((element, index) => {
                objectFilter(index, body[key]);
            })
        }
        body[key] = body[key].filter(element => {
            return element;
        })
        if (!body[key].length) {
            delete body[key];
        }
    } else if (body[key] && typeof body[key] === "object") {
        Object.keys(body[key]).forEach(item => {
            objectFilter(item, body[key]);
        })
        if (!Object.keys(body[key]).length) {
            delete body[key];
        }
    } else if (!body[key]) {
        delete body[key];
    }
}

function processBody(requestBody) {
    try {
        Object.keys(requestBody).forEach(key => {
            objectFilter(key, requestBody)
        })
    } catch (e) {
    }
    return requestBody
}
module.exports = {
    processBody: processBody
}