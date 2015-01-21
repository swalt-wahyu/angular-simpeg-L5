require.config({
    baseUrl: "angular",
    // alias libraries paths.  Must set 'angular'
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min',
        'angular': '../lib/angular.min',
        'angular-route': 'services/angular-route.min',
        'angularAMD': 'services/angularAMD.min',
        'ui-bootstrap': 'services/ui-bootstrap-tpls-0.12.0.min',
        'golongan': 'golongan/golonganModul',
        'statuspegawai': 'statuspegawai/statusPegawaiModul',
        'eselon': 'eselon/eselonModul',
        'unitkerja': 'unitkerja/unitkerjaModul',
        'satuankerja': 'satuankerja/satuankerjaModul'
    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'ui-bootstrap': ['angular'],
        'bootstrap': {"deps": ['jquery']}
    },
    // kick start application
    deps: ['app']
});
require(['jquery', 'bootstrap', 'golongan', 'statuspegawai', 'eselon', 'unitkerja', 'satuankerja'], function($) {
    return {};
});