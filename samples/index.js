app = angular.module('app', ['ngMaterial']);

app.controller('appController',
    function ($scope, $mdMedia) {
        //...
        $scope.$mdMedia = $mdMedia;
        $scope.tiles = [
            {
                name: 'Modules',
                submodules: [
                    {
                        name: 'Behaviors',
                        color: 1,
                        link: "http://webui.pipdevs.com/pip-webui-behaviors/index.html"
                    },
                    {
                        name: 'Buttons',
                        color: 2,
                        link: "http://webui.pipdevs.com/pip-webui-buttons/index.html"
                    },
                    {
                        name: 'Charts',
                        color: 3,
                        link: "http://webui.pipdevs.com/pip-webui-charts/index.html"
                    },
                    {
                        name: 'CSS framework',
                        color: 4,
                        link: "http://webui.pipdevs.com/pip-webui-css/index.html"
                    },{
                        name: 'Basic controls',
                        color: 5,
                        link: "http://webui.pipdevs.com/pip-webui-controls/index.html"
                    },
                    {
                        name: 'Dates',
                        color: 6,
                        link: "http://webui.pipdevs.com/pip-webui-dates/index.html"
                    },{
                        name: 'Dialogs',
                        color: 7,
                        link: "http://webui.pipdevs.com/pip-webui-dialogs/index.html"
                    },
                    {
                        name: 'Errors',
                        color: 8,
                        link: "http://webui.pipdevs.com/pip-webui-errors/index.html"
                    },{
                        name: 'Files',
                        color: 9,
                        link: "http://webui.pipdevs.com/pip-webui-files/index.html"
                    },
                    {
                        name: 'Headers',
                        color: 10,
                        link: "http://webui.pipdevs.com/pip-webui-headers/index.html"
                    },{
                        name: 'Help',
                        color: 11,
                        link: "http://webui.pipdevs.com/pip-webui-help/index.html"
                    },
                    {
                        name: 'Landing',
                        color: 12,
                        link: "http://webui.pipdevs.com/pip-webui-landing/index.html"
                    },
                    {
                        name: 'Layouts',
                        color: 13,
                        link: "http://webui.pipdevs.com/pip-webui-layouts/index.html"
                    },{
                        name: 'Lists',
                        color: 14,
                        link: "http://webui.pipdevs.com/pip-webui-lists/index.html"
                    },
                    {
                        name: 'Locations',
                        color: 15,
                        link: "http://webui.pipdevs.com/pip-webui-locations/index.html"
                    },{
                        name: 'Nav',
                        color: 7,
                        link: "http://webui.pipdevs.com/pip-webui-nav/index.html"
                    },
                    {
                        name: 'Services',
                        color: 9,
                        link: "http://webui.pipdevs.com/pip-webui-services/index.html"
                    },
                    {
                        name: 'Settings',
                        color: 5,
                        link: "http://webui.pipdevs.com/pip-webui-settings/index.html"
                    },
                    {
                        name: 'Themes',
                        color: 6,
                        link: "http://webui.pipdevs.com/pip-webui-themes/index.html"
                    }
                ]
            },
            {
                name: 'References',
                submodules: [
                    {
                        name: 'Angular Material Intro',
                        color: 15,
                        link: "https://material.angularjs.org/latest/#/"
                    },
                    {
                        name: 'Angular Material GitHub',
                        color: 14,
                        link: "https://github.com/angular/material"
                    },
                    {
                        name: 'Material Design Guidelines',
                        color: 13,
                        link: "https://www.google.com/design/spec/material-design/introduction.html"
                    },
                    {
                        name: 'Google Design References',
                        color: 12,
                        link: "http://design.google.com"
                    }
                ]
            }
        ]
    }
);