<?php
    $str="hello this is       ragu"; 
    echo $str. "<br>";
    $len = strlen($str);
    echo "The len this str is". $len . " thanku<br>"; 
    $words=str_word_count($str);
    echo "The number of words ".str_word_count($str) ." thanku  <br>"; 
    $rev=strrev($str);
     echo "The number of words ".strrev($str)." thn<br>";
      echo "The number of words ".str_replace("is","at",$str)."thanku<br>"; 
    //echo $len;
  echo "the num of lower".strpos($str,"ragu")."tha";
  echo "The num of lowercase ".strtoupper("hi my self ragu".$str);
    echo trim(   $str );