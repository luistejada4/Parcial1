var app = angular.module("App", []);

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

        alert("Alerta!")
        $http.post("api/Clientes/", $scope.newCliente).then(function (response) {

            $scope.clientes.push(response.data);
            $scope.newCliente = {};

        }, function (response) {

            alert("Error")

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

        
        telefono.Tipo = 1;
        $scope.clienteDetail.telefonos.push(telefono);
        $http.put("api/Clientes/" + $scope.clienteDetail.id, $scope.clienteDetail).then(
            function (response) {

                alert("Bien");
            },
            function (response) {

                alert("Mal");
            });
        $scope.newPhone = {};
    };


    getClientes();


});
