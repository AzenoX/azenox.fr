<?php

$num = "0858548224";

if(preg_match("#^0[1-68]([ -.]?[0-9]{2}){4}$#", $num)){
    echo "Good";
}
else{
    echo "Nope";
}

