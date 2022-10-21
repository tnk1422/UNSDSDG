module.exports = {

    name: "__v1__sdg__comparetrends__getdataoneseriesmultiareapost",

    title: "Returns list of compare trends values for given one series and geoareas.",

    version: "v1",

    description: "Returnslistofcomparetrendsvaluesforgivenoneseriesandgeoareas",
    //Added after creating the Action from swagger
    mock_input: {

    },

    input: {
        title: "__v1__sdg__comparetrends__getdataoneseriesmultiareapost",
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
            "series": {
                "title": "series",
                "displayTitle": "Series",
                "type": "string",
                "description": "Series Code e.g SI_POV_EMP1"
            },
            "disaggregatedCategory": {
                "title": "disaggregatedCategory",
                "displayTitle": "DisaggregatedCategory",
                "type": "string",
                "description": "Disaggregated dimension value e.g 15+ | FEMALE"
            },
            "areaCode": {
                "title": "areaCode",
                "displayTitle": "AreaCode",
                "type": "array",
                "description": "Array of country codes e.g 432",
                "items": {
                    "type": "string",
                    "title": "areaCode",
                    "description": ""
                }
            },
            "fromPeriod": {
                "title": "fromPeriod",
                "displayTitle": "FromPeriod",
                "type": "string",
                "description": "From Year value e.g 2005",
                "required": true,
                "minLength": 1
            },
            "toPeriod": {
                "title": "toPeriod",
                "displayTitle": "ToPeriod",
                "type": "string",
                "description": "Upto Year value e.g 2015",
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
            'series': input['series'],
            'disaggregatedCategory': input['disaggregatedCategory'],
            'areaCode': input['areaCode'],
            'fromPeriod': input['fromPeriod'],
            'toPeriod': input['toPeriod'],
        };
        option.json = false;

        option.url = config.url + `/v1/sdg/CompareTrends/GetDataOneSeriesMultiArea`;

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