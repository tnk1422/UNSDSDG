module.exports = {

    name: "__v1__sdg__goal__pivotdataget",

    title: "Returns a list of paginated observations pivoted by year",

    version: "v1",

    description: "sample description",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__goal__pivotdataget",
        type: "object",
        properties: {
            "goal": {
                "title": "goal",
                "displayTitle": "Goal",
                "type": "array",
                "description": "List of codes for the goals we are querying",
                "items": {
                    "type": "string",
                    "title": "goal",
                    "description": ""
                }
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
                "description": "Array of name - values eg: [{name:\"Age\",values:[\"15+\",\"15-24\"]}]"
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
        properties: {
            "size": {
                "title": "size",
                "displayTitle": "Size",
                "type": "string",
                "description": "Gets or Sets Size\r\nThe number of elements in the page"
            },
            "totalElements": {
                "title": "totalElements",
                "displayTitle": "TotalElements",
                "type": "string",
                "description": "Gets or Sets TotalElements\r\nThe total number of elements"
            },
            "totalPages": {
                "title": "totalPages",
                "displayTitle": "TotalPages",
                "type": "string",
                "description": "Gets or Sets totalPages\r\nThe total number of pages"
            },
            "pageNumber": {
                "title": "pageNumber",
                "displayTitle": "PageNumber",
                "type": "string",
                "description": "Gets or Sets pageNumber\r\nThe current page number"
            },
            "attributes": {
                "title": "attributes",
                "displayTitle": "Attributes",
                "type": "array",
                "description": "Gets or Sets attributes",
                "items": {
                    "title": "Item",
                    "type": "object",
                    "properties": {
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
                }
            },
            "dimensions": {
                "title": "dimensions",
                "displayTitle": "Dimensions",
                "type": "array",
                "description": "Gets or Sets dimensions",
                "items": {
                    "title": "Item",
                    "type": "object",
                    "properties": {
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
                }
            },
            "data": {
                "title": "data",
                "displayTitle": "Data",
                "type": "array",
                "description": "Gets or Sets data",
                "items": {
                    "title": "Item",
                    "type": "object",
                    "properties": {
                        "goal": {
                            "title": "goal",
                            "displayTitle": "Goal",
                            "type": "string",
                            "description": "Gets or Sets Goal"
                        },
                        "target": {
                            "title": "target",
                            "displayTitle": "Target",
                            "type": "string",
                            "description": "Gets or Sets Target"
                        },
                        "indicator": {
                            "title": "indicator",
                            "displayTitle": "Indicator",
                            "type": "string",
                            "description": "Gets or Sets Indicator"
                        },
                        "series": {
                            "title": "series",
                            "displayTitle": "Series",
                            "type": "string",
                            "description": "Gets or Sets Series"
                        },
                        "seriesDescription": {
                            "title": "seriesDescription",
                            "displayTitle": "SeriesDescription",
                            "type": "string",
                            "description": "Gets or Sets Series"
                        },
                        "seriesCount": {
                            "title": "seriesCount",
                            "displayTitle": "SeriesCount",
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
                        "timeCoverage": {
                            "title": "timeCoverage",
                            "displayTitle": "TimeCoverage",
                            "type": "string",
                            "description": "Gets or Sets TimeCoverage"
                        },
                        "upperBound": {
                            "title": "upperBound",
                            "displayTitle": "UpperBound",
                            "type": "string",
                            "description": "Gets or Sets UpperBound"
                        },
                        "lowerBound": {
                            "title": "lowerBound",
                            "displayTitle": "LowerBound",
                            "type": "string",
                            "description": "Gets or Sets LowerBound"
                        },
                        "basePeriod": {
                            "title": "basePeriod",
                            "displayTitle": "BasePeriod",
                            "type": "string",
                            "description": "Gets or Sets BasePeriod"
                        },
                        "source": {
                            "title": "source",
                            "displayTitle": "Source",
                            "type": "string",
                            "description": "Gets or Sets Source"
                        },
                        "geoInfoUrl": {
                            "title": "geoInfoUrl",
                            "displayTitle": "GeoInfoUrl",
                            "type": "string",
                            "description": "Gets or Sets GeoInfoUrl"
                        },
                        "age": {
                            "title": "age",
                            "displayTitle": "Age",
                            "type": "string",
                            "description": "Gets or Sets age"
                        },
                        "freq": {
                            "title": "freq",
                            "displayTitle": "Freq",
                            "type": "string",
                            "description": "Gets or Sets freq"
                        },
                        "sex": {
                            "title": "sex",
                            "displayTitle": "Sex",
                            "type": "string",
                            "description": "Gets or Sets sex"
                        },
                        "location": {
                            "title": "location",
                            "displayTitle": "Location",
                            "type": "string",
                            "description": "Gets or Sets location"
                        },
                        "units": {
                            "title": "units",
                            "displayTitle": "Units",
                            "type": "string",
                            "description": "Gets or Sets Units"
                        },
                        "level_status": {
                            "title": "level_status",
                            "displayTitle": "Level_status",
                            "type": "string",
                            "description": "Gets or Sets level/status"
                        },
                        "name_of_international_agreement": {
                            "title": "name_of_international_agreement",
                            "displayTitle": "Name_of_international_agreement",
                            "type": "string",
                            "description": "Gets or Sets name of international agreement"
                        },
                        "education_level": {
                            "title": "education_level",
                            "displayTitle": "Education_level",
                            "type": "string",
                            "description": "Gets or Sets education level"
                        },
                        "type_of_product": {
                            "title": "type_of_product",
                            "displayTitle": "Type_of_product",
                            "type": "string",
                            "description": "Gets or Sets type of product"
                        },
                        "type_of_facilities": {
                            "title": "type_of_facilities",
                            "displayTitle": "Type_of_facilities",
                            "type": "string",
                            "description": "Gets or Sets type of facilities"
                        },
                        "name_of_international_institution": {
                            "title": "name_of_international_institution",
                            "displayTitle": "Name_of_international_institution",
                            "type": "string",
                            "description": "Gets or Sets name of international institution"
                        },
                        "type_of_occupation": {
                            "title": "type_of_occupation",
                            "displayTitle": "Type_of_occupation",
                            "type": "string",
                            "description": "Gets or Sets type of occupation"
                        },
                        "tariff_regime_status": {
                            "title": "tariff_regime_status",
                            "displayTitle": "Tariff_regime_status",
                            "type": "string",
                            "description": "Gets or Sets tariff regime status"
                        },
                        "mode_of_transportation": {
                            "title": "mode_of_transportation",
                            "displayTitle": "Mode_of_transportation",
                            "type": "string",
                            "description": "Gets or Sets mode of transportation"
                        },
                        "type_of_mobile_technology": {
                            "title": "type_of_mobile_technology",
                            "displayTitle": "Type_of_mobile_technology",
                            "type": "string",
                            "description": "Gets or Sets type of mobile technology"
                        },
                        "name_of_non_communicable_disease": {
                            "title": "name_of_non_communicable_disease",
                            "displayTitle": "Name_of_non_communicable_disease",
                            "type": "string",
                            "description": "Gets or Sets name of non-communicable disease"
                        },
                        "type_of_skill": {
                            "title": "type_of_skill",
                            "displayTitle": "Type_of_skill",
                            "type": "string",
                            "description": "Gets or Sets type of skill"
                        },
                        "type_of_speed": {
                            "title": "type_of_speed",
                            "displayTitle": "Type_of_speed",
                            "type": "string",
                            "description": "Gets or Sets type of speed"
                        },
                        "migratory_status": {
                            "title": "migratory_status",
                            "displayTitle": "Migratory_status",
                            "type": "string",
                            "description": "Gets or Sets migratory status"
                        },
                        "disability_status": {
                            "title": "disability_status",
                            "displayTitle": "Disability_status",
                            "type": "string",
                            "description": "Gets or Sets disability status"
                        },
                        "hazard_type": {
                            "title": "hazard_type",
                            "displayTitle": "Hazard_type",
                            "type": "string",
                            "description": "Gets or Sets hazard type"
                        },
                        "ihr_capacity": {
                            "title": "ihr_capacity",
                            "displayTitle": "Ihr_capacity",
                            "type": "string",
                            "description": "Gets or Sets ihr capacity"
                        },
                        "reporting_type": {
                            "title": "reporting_type",
                            "displayTitle": "Reporting_type",
                            "type": "string",
                            "description": "Gets or Sets Units"
                        },
                        "cities": {
                            "title": "cities",
                            "displayTitle": "Cities",
                            "type": "string",
                            "description": "Gets or Sets cities"
                        },
                        "activity": {
                            "title": "activity",
                            "displayTitle": "Activity",
                            "type": "string",
                            "description": "Gets or Sets Activity"
                        },
                        "policy_domains": {
                            "title": "policy_domains",
                            "displayTitle": "Policy_domains",
                            "type": "string",
                            "description": "Gets or Sets Policy Domains"
                        },
                        "years": {
                            "title": "years",
                            "displayTitle": "Years",
                            "type": "string",
                            "description": "Gets or Sets years"
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
        option.qs = {};
        if (input["goal"]) option.qs["goal"] = input["goal"];
        if (input["areaCode"]) option.qs["areaCode"] = input["areaCode"];
        if (input["dimensions"]) option.qs["dimensions"] = input["dimensions"];
        if (input["page"]) option.qs["page"] = input["page"];
        if (input["pageSize"]) option.qs["pageSize"] = input["pageSize"];


        option.url = config.url + `/v1/sdg/Goal/PivotData`;

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