module.exports = {

    name: "__v1__sdg__user__emailexistget",

    title: "V1SdgUserEmailExistGet",

    version: "v1",

    description: "",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__user__emailexistget",
        type: "object",
        properties: {
            "email": {
                "title": "email",
                "displayTitle": "Email",
                "type": "string",
                "description": ""
            }
        }
    },

    output: {
        title: "output",
        type: "object",
        properties: {}
    },

    execute: async function(input, output) {
        // to access auth info use input.auth , eg: input.auth.username
        // and to return output use output callback like this output(null, { "notice" : "successful"})
        // your code here

        var config = require("./config");
        var authHelper = require('../../authhelper.js');
        var helper = require('../../helper.js');
        var request = require("request");

        input = helper.processBody(input);


        var option = {
            method: "get",
            headers: {}
        };
        option.headers['content-type'] = "application/json";
        option.json = true;
        option.qs = {};
        if (input["email"]) option.qs["email"] = input["email"];


        option.url = config.url + `/v1/sdg/User/EmailExist`;

        try {
            var result = await authHelper(input);
        } catch (err) {
            return output(err);
        }

        if (result.query) {
            option.qs = { ...option.qs,
                ...result.query
            }
        }

        if (result.headers) {
            option.headers = { ...option.headers,
                ...result.headers
            }
        }

        request(option, function(error, response, body) {
            if (error) {
                return output(error);
            }
            if (response.statusCode >= 400) {
                return output(body);
            }
            return output(null, body);
        });

    }
}