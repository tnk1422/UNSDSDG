module.exports = {

    name: "__v1__sdg__goal__goalcode__geoareasget",

    title: "Returns a list of geographies that have values on that Goal",

    version: "v1",

    description: "sample description",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__goal__goalcode__geoareasget",
        type: "object",
        properties: {
            "goalCode": {
                "title": "goalCode",
                "displayTitle": "GoalCode",
                "type": "string",
                "description": "Code for that Goal",
                "required": true,
                "minLength": 1
            }
        }
    },

    output: {
        title: "output",
        type: "object",
        properties: {
            "geoAreaCode": {
                "title": "geoAreaCode",
                "displayTitle": "GeoAreaCode",
                "type": "string",
                "description": "geoAreaCode is equivalent to M49"
            },
            "geoAreaName": {
                "title": "geoAreaName",
                "displayTitle": "GeoAreaName",
                "type": "string",
                "description": "geoArea Name is the offician UN name for that country or region."
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


        option.url = config.url + "/v1/sdg/Goal/"+input.goalCode+"/GeoAreas";

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