module.exports = {

    name: "__v1__sdg__goal__goalcode__attributesget",

    title: "Returns a list of attributes for a series",

    version: "v1",

    description: "sample description",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__goal__goalcode__attributesget",
        type: "object",
        properties: {
            "goalCode": {
                "title": "goalCode",
                "displayTitle": "GoalCode",
                "type": "string",
                "description": "SDMX code for that goal",
                "required": true,
                "minLength": 1
            }
        }
    },

    output: {
        title: "output",
        type: "object",
        properties: {
            "id": {
                "title": "id",
                "displayTitle": "Id",
                "type": "string",
                "description": "Gets or Sets id"
            },
            "codes": {
                "title": "codes",
                "displayTitle": "Codes",
                "type": "array",
                "description": "Gets or Sets codeList",
                "items": {
                    "title": "Item",
                    "type": "object",
                    "properties": {
                        "code": {
                            "title": "code",
                            "displayTitle": "Code",
                            "type": "string",
                            "description": "Gets or Sets code"
                        },
                        "description": {
                            "title": "description",
                            "displayTitle": "Description",
                            "type": "string",
                            "description": "Gets or Sets code"
                        },
                        "sdmx": {
                            "title": "sdmx",
                            "displayTitle": "Sdmx",
                            "type": "string",
                            "description": "Gets or Sets code"
                        }
                    }
                }
            }
        }
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


        option.url = config.url + "/v1/sdg/Goal/"+input.goalCode+"/Attributes";

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