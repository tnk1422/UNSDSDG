module.exports = {

    name: "__v1__sdg__globalandregional__getsingleseriespost",

    title: "Returns the list of Observation Data for single series",

    version: "v1",

    description: "ReturnsthelistofObservationDataforsingleseries",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__globalandregional__getsingleseriespost",
        type: "object",
        properties: {
            "indicators": {
                "title": "indicators",
                "displayTitle": "Indicators",
                "type": "string",
                "description": ""
            },
            "seriesCode": {
                "title": "seriesCode",
                "displayTitle": "SeriesCode",
                "type": "string",
                "description": "Series Code e.g SI_POV_EMP1"
            },
            "areaCode": {
                "title": "areaCode",
                "displayTitle": "AreaCode",
                "type": "array",
                "description": "List of country codes e.g 202",
                "items": {
                    "type": "string",
                    "title": "areaCode",
                    "description": ""
                }
            },
            "years": {
                "title": "years",
                "displayTitle": "Years",
                "type": "array",
                "description": "List of year e.g 2002",
                "items": {
                    "type": "string",
                    "title": "years",
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
            'indicators': input['indicators'],
            'seriesCode': input['seriesCode'],
            'areaCode': input['areaCode'],
            'years': input['years'],
        };
        option.json = false;

        option.url = config.url + `/v1/sdg/GlobalAndRegional/GetSingleSeries`;

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