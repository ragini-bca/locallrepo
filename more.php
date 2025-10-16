<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>phph tritorial</title>
</head>
<style>
    {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
.container{
    max-width:80%;
    background-color:yellowgreen;
    margin:auto;
    padding:23px;

}
</style>
<body>
    <div class="container">
        <h1>lets learn about php</h1>
        <p>your party status is here</p>
        <?php 
        $age=40;
        if($age>=18)
            echo "you can go to party";
        else if($age==7)
        {
            echo "you are 7 yr old";
        }
        else if($age<80)
{
 echo "hi";
}
$a=0;
$lan=array("py","c++","php","c");
while ($a<count($lan))
    {
        echo "<br>The value of a is";
        echo $lan[$a];
        $a++;
    } 
    // do while loop
    $a=40;
    do 
    {
        echo "<br>The value of a is";
        echo $a;
        $a++;
    } 
    while($a<=20);
 // for loop 
    for ($a=60; $a <60; $a++) 
        # code...
    {
        echo "<br>The value of a is forloop";
        echo $a;

    } 
    foreach($lan as $value)
    {
        echo "<br>The valu is foreah:";
        echo $value;
    }
    function print5()
    {
        echo "five";
    }
    print5();
    print5();
    print5();
    print5();
    print5(); 
    function print_number($num)
    {
        echo"<br>Your number is";
        echo $num;
    }
    print_number(9);
    print_number(10);
    print_number(45);
       ?>
    </div>
</body>
</html>