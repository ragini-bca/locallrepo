<?php
$server="localhost";
$username="root";
$password= "";
$database= "trip";
$con=mysqli_connect($server,$username,$password,'trip');
if(!$con){
    die("connection to this db fail". mysqli_connect_error());
}
//echo"sussecc connecting";
$name=$_POST('name');
$gender=$_POST("gender");
$age=$_POST("age");
$email=$_POST("email");
$phone=$_POST("phone");
$other=$_POST("other");
$sql= "INSERT INTO trip ( `name`, `age`, `gender`, `email`, `phone`, `other`, `dd`) VALUES ('$name', '$gender', '$age', '$email', '$phone', '$other'); ";
if(mysqli_query($con,$sql)){
    echo "data inserted ";
}
else {
    echo "error";
mysqli_error($con);
}
mysqli_close($con);
?>