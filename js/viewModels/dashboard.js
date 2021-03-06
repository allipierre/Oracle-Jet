/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojtree','ojs/ojdatetimepicker'],
    function(oj, ko, $) {

        function DashboardViewModel() {
            var self = this;
            self.value = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2013, 0, 1)));
            // Below are a subset of the ViewModel methods invoked by the ojModule binding
            // Please reference the ojModule jsDoc for additionaly available methods.

            /**
             * Optional ViewModel method invoked when this ViewModel is about to be
             * used for the View transition.  The application can put data fetch logic
             * here that can return a Promise which will delay the handleAttached function
             * call below until the Promise is resolved.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
             * the promise is resolved
             */
            self.handleActivated = function(info) {
                // Implement if needed



            };

            /**
             * Optional ViewModel method invoked after the View is inserted into the
             * document DOM.  The application can put logic that requires the DOM being
             * attached here.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
             */
            self.handleAttached = function(info) {
                // Implement if needed


                $("#trees").on("ojoptionchange", function(e, ui) {
                    if (ui.option == "selection") {
                        // show selected nodes
                        var selected = _arrayToStr(ui.value);
                        $("#resultss").text("id = " + selected);
                    }
                });
            };


            /**
             * Optional ViewModel method invoked after the bindings are applied on this View. 
             * If the current View is retrieved from cache, the bindings will not be re-applied
             * and this callback will not be invoked.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             */
            self.handleBindingsApplied = function(info) {
                // Implement if needed



            };

            /*
             * Optional ViewModel method invoked after the View is removed from the
             * document DOM.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
             */
            self.handleDetached = function(info) {
                // Implement if needed
            };

            self.getJson = function(node, fn) {
                // get local json
                var data = [{
                        "title": "News",
                        "attr": {
                            "id": "news"
                        }
                    },
                    {
                        "title": "Blogs",
                        "attr": {
                            "id": "blogs"
                        },
                        "children": [{
                                "title": "Today",
                                "attr": {
                                    "id": "today"
                                }
                            },
                            {
                                "title": "Yesterday",
                                "attr": {
                                    "id": "yesterday"
                                }
                            },
                            {
                                "title": "Archive",
                                "attr": {
                                    "id": "archive"
                                }
                            }
                        ]
                    },
                    {
                        "title": "Links",
                        "attr": {
                            "id": "links"
                        },
                        "children": [{
                                "title": "Oracle",
                                "attr": {
                                    "id": "oracle"
                                }
                            },
                            {
                                "title": "IBM",
                                "attr": {
                                    "id": "ibm"
                                }
                            },
                            {
                                "title": "Microsoft",
                                "attr": {
                                    "id": "ms"
                                },
                                "children": [{
                                        "title": "USA",
                                        "attr": {
                                            "id": "msusa"
                                        },
                                        "children": [{
                                                "title": "North",
                                                "attr": {
                                                    "id": "msusanorth"
                                                }
                                            },
                                            {
                                                "title": "South",
                                                "attr": {
                                                    "id": "msusasouth"
                                                }
                                            },
                                            {
                                                "title": "East",
                                                "attr": {
                                                    "id": "msusaeast"
                                                }
                                            },
                                            {
                                                "title": "West",
                                                "attr": {
                                                    "id": "msusawest"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "title": "Europe",
                                        "attr": {
                                            "id": "msuerope"
                                        }
                                    },
                                    {
                                        "title": "Asia",
                                        "attr": {
                                            "id": "msasia"
                                        },
                                        "children": [{
                                                "title": "Japan",
                                                "attr": {
                                                    "id": "asiajap"
                                                }
                                            },
                                            {
                                                "title": "China",
                                                "attr": {
                                                    "id": "asiachina"
                                                }
                                            },
                                            {
                                                "title": "India",
                                                "attr": {
                                                    "id": "asiaindia"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ];

                fn(data); // pass to ojTree using supplied function

            };


        }


        $(document).ready(
            function() {




            }
        );
        return new DashboardViewModel();



        // Convert a jQuery list of html element nodes to string containing node id's.
        function _arrayToStr(arr) {
            var s = "";
            $.each(arr, function(i, val) {
                if (i) {
                    s += ", ";
                }
                s += $(arr[i]).attr("id");
            });

            return s;
        };


    }
);