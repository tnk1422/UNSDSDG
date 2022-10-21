module.exports = {

    name: "__v1__sdg__series__timeperiodspost",

    title: "Returns a Cound of data points available for a list of series and regions",

    version: "v1",

    description: "sample description",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__series__timeperiodspost",
        type: "object",
        properties: {
            "seriesCodes": {
                "title": "seriesCodes",
                "displayTitle": "SeriesCodes",
                "type": "array",
                "description": "SDMX code for that series",
                "items": {
                    "type": "string",
                    "title": "seriesCodes",
                    "description": ""
                }
            },
            "areaCodes": {
                "title": "areaCodes",
                "displayTitle": "AreaCodes",
                "type": "array",
                "description": "Code for a group of regions",
                "items": {
                    "type": "string",
                    "title": "areaCodes",
                    "description": ""
                }
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
            method: "post",
            headers: {}
        };
        option.headers['content-type'] = "application/json";
        option.json = true;
        option.form = {
            'seriesCodes': input['seriesCodes'],
            'areaCodes': input['areaCodes'],
        };
        option.json = false;

        option.url = config.url + `/v1/sdg/Series/TimePeriods`;

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