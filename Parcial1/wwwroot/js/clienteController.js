var app = angular.module("App", ['ngMask']);

app.controller("ClientesController", function ($scope, $http) {

    $scope.clientes = [];
    $scope.newCliente = {};
    $scope.newPhone = {};
    $scope.clienteDetail = {};
    $scope.master = true;
    $scope.detail = false;



    var getClientes = function () {

        $http.get("api/Clientes/").then(

           function (response) {

               $scope.clientes = response.data;

        }, function (response) {

            console.log(response.error);

           })
    };

    $scope.registrarNuevoCliente = function () {

    
        $http.post("api/Clientes/", $scope.newCliente).then(function (response) {

            $scope.clientes.push(response.data);
            $scope.clienteClicked(response.data);
            $scope.newCliente = {};

        }, function (response) {

         

        })
    };

    $scope.clienteClicked = function(cliente) {

        if ($scope.master) {

            $scope.master = false;
            $scope.detail = true;
            $scope.clienteDetail = cliente;
        } else {

            $scope.clienteDetail = {};
            $scope.master = true;
            $scope.detail = false;
        }
    };

    $scope.addNewPhone = function (telefono) {


        switch (telefono.Tipo) {

            case "Telefono fijo":

                telefono.Tipo = 1;
                break;
            case "Telefono movil":

                telefono.Tipo = 2;
                break;
        }
        $scope.clienteDetail.telefonos.push(telefono);
        $http.put("api/Clientes/" + $scope.clienteDetail.id, $scope.clienteDetail).then(
            function (response) {

              
            },
            function (response) {

               
            });
        $scope.newPhone = {};
    };


    getClientes();


});
