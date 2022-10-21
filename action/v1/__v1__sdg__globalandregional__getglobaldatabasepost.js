module.exports = {

    name: "__v1__sdg__globalandregional__getglobaldatabasepost",

    title: "Returns a list of paginated observations pivoted by year",

    version: "v1",

    description: "sample description",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__globalandregional__getglobaldatabasepost",
        type: "object",
        properties: {
            "seriesCode": {
                "title": "seriesCode",
                "displayTitle": "SeriesCode",
                "type": "array",
                "description": "SDMX code for that series",
                "items": {
                    "type": "string",
                    "title": "seriesCode",
                    "description": ""
                }
            },
            "releaseCode": {
                "title": "releaseCode",
                "displayTitle": "ReleaseCode",
                "type": "string",
                "description": "Code of the releases that we are querying"
            },
            "areaCode": {
                "title": "areaCode",
                "displayTitle": "AreaCode",
                "type": "array",
                "description": "List of M49 values",
                "items": {
                    "type": "string",
                    "title": "areaCode",
                    "description": ""
                }
            },
            "dimensions": {
                "title": "dimensions",
                "displayTitle": "Dimensions",
                "type": "string",
                "description": "Array of name - values eg: [AGE] = 'ALLAGE' | [AREA]= 'ALLAREA's"
            },
            "page": {
                "title": "page",
                "displayTitle": "Page",
                "type": "string",
                "description": "Page number"
            },
            "pageSize": {
                "title": "pageSize",
                "displayTitle": "PageSize",
                "type": "string",
                "description": "Number of records per page"
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
        option.qs = {};
        if (input["seriesCode"]) option.qs["seriesCode"] = input["seriesCode"];
        if (input["releaseCode"]) option.qs["releaseCode"] = input["releaseCode"];
        if (input["areaCode"]) option.qs["areaCode"] = input["areaCode"];
        if (input["dimensions"]) option.qs["dimensions"] = input["dimensions"];
        if (input["page"]) option.qs["page"] = input["page"];
        if (input["pageSize"]) option.qs["pageSize"] = input["pageSize"];


        option.url = config.url + `/v1/sdg/GlobalAndRegional/GetGlobalDataBase`;

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