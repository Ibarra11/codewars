using System;

public static class Kata
{
  public static string HighAndLow(string numbers)
  {
     string[] arrNumbers = numbers.Split(' ');
            var highest = int.Parse(arrNumbers[0]);
            var lowest = int.Parse(arrNumbers[0]);
            for(var i =1; i < arrNumbers.Length; i++){
                int num = int.Parse(arrNumbers[i]);
                if(num < lowest){
                    lowest = num;
                }
                else if(num > highest){
                    highest = num;
                }
            }
    return highest + " " + lowest  ;
  }