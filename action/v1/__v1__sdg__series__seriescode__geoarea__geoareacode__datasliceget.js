module.exports = {

    name: "__v1__sdg__series__seriescode__geoarea__geoareacode__datasliceget",

    title: "Returns a timeseires for a specific geography (country / region)",

    version: "v1",

    description: "sample description",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__series__seriescode__geoarea__geoareacode__datasliceget",
        type: "object",
        properties: {
            "seriesCode": {
                "title": "seriesCode",
                "displayTitle": "SeriesCode",
                "type": "string",
                "description": "SDMX code for that series",
                "required": true,
                "minLength": 1
            },
            "geoAreaCode": {
                "title": "geoAreaCode",
                "displayTitle": "GeoAreaCode",
                "type": "string",
                "description": "M49 code for the geography",
                "required": true,
                "minLength": 1
            },
            "dimensions": {
                "title": "dimensions",
                "displayTitle": "Dimensions",
                "type": "string",
                "description": "Array of name - values eg: [{name:\"Age\",values:[\"15+\",\"15-24\"]}]"
            },
            "timePeriods": {
                "title": "timePeriods",
                "displayTitle": "TimePeriods",
                "type": "string",
                "description": "List of years from which we want data eg: [\"2000\",\"2010\"]"
            }
        }
    },

    output: {
        title: "output",
        type: "object",
        properties: {
            "series": {
                "title": "series",
                "displayTitle": "Series",
                "type": "string",
                "description": "Gets or Sets Series"
            },
            "geoAreaCode": {
                "title": "geoAreaCode",
                "displayTitle": "GeoAreaCode",
                "type": "string",
                "description": "Gets or Sets geoAreaCode"
            },
            "geoAreaName": {
                "title": "geoAreaName",
                "displayTitle": "GeoAreaName",
                "type": "string",
                "description": "Gets or Sets geoAreaName"
            },
            "dimensions": {
                "title": "dimensions",
                "displayTitle": "Dimensions",
                "type": "array",
                "description": "Gets or Sets Dimensions for slice data",
                "items": {
                    "title": "Item",
                    "type": "object",
                    "properties": {}
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
        option.qs = {};
        if (input["dimensions"]) option.qs["dimensions"] = input["dimensions"];
        if (input["timePeriods"]) option.qs["timePeriods"] = input["timePeriods"];


        option.url = config.url + "/v1/sdg/Series/"+input.seriesCode+"/GeoArea/"+input.geoAreaCode+"/DataSlice";

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