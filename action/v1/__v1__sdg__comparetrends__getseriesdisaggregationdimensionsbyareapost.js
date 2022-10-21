module.exports = {

    name: "__v1__sdg__comparetrends__getseriesdisaggregationdimensionsbyareapost",

    title: "Returns a list of series and disaggregation types for geographic area which have values against those series .",

    version: "v1",

    description: "Returnsalistofseriesanddisaggregationtypesforgeographicareawhichhavevaluesagainstthoseseries",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__comparetrends__getseriesdisaggregationdimensionsbyareapost",
        type: "object",
        properties: {
            "methodologyType": {
                "title": "methodologyType",
                "displayTitle": "MethodologyType",
                "type": "string",
                "description": "Methodology For timeSeries(1-Original Data,2-Normalized Data 2015,3-Normalized Data 2010,4-Growth Rate)",
                "required": true,
                "minLength": 1
            },
            "areaCode": {
                "title": "areaCode",
                "displayTitle": "AreaCode",
                "type": "string",
                "description": "Country code e.g 64",
                "required": true,
                "minLength": 1
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
            'methodologyType': input['methodologyType'],
            'areaCode': input['areaCode'],
        };
        option.json = false;

        option.url = config.url + `/v1/sdg/CompareTrends/GetSeriesDisaggregationDimensionsByArea`;

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