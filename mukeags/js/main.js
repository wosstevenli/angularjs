/**
 * Created by Steven on 2016/8/28.
 */
/*
angular.module('myapp',[])
    .controller('MainController',function($scope)
{
        $scope.submitform=function()
        {
            console.log('表单已提交成功！');
        }
    })*/

angular.module('myapp',[])
    .controller('SingUpController', function($scope)
    {
        $scope.userdata = {};

        $scope.submitForm=function()
        {
            console.log($scope.userdata);
            /*if($scope.singupForm.$invalid)
                alert("输入有误！");
            else
                alert("提交成功！")*/
        }
    })