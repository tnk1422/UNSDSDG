module.exports = {

    name: "__v1__sdg__globalandregional__getmultiseriespost",

    title: "Returns the list of Observation Data for multiple series",

    version: "v1",

    description: "ReturnsthelistofObservationDataformultipleseries",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__globalandregional__getmultiseriespost",
        type: "object",
        properties: {
            "indicators": {
                "title": "indicators",
                "displayTitle": "Indicators",
                "type": "array",
                "description": "",
                "items": {
                    "type": "string",
                    "title": "indicators",
                    "description": ""
                }
            },
            "seriesCode": {
                "title": "seriesCode",
                "displayTitle": "SeriesCode",
                "type": "array",
                "description": "List of series codes along with dimension e.g SP_ACS_BSRVH2O-RURAL,SP_ACS_BSRVH2O-ALLAREA",
                "items": {
                    "type": "string",
                    "title": "seriesCode",
                    "description": ""
                }
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

        option.url = config.url + `/v1/sdg/GlobalAndRegional/GetMultiSeries`;

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