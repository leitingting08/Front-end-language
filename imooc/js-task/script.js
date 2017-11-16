var year=parseInt(prompt("请输入你的出生年份"));
      var month=parseInt(prompt("请输入你的出生月份"));
      var day=parseInt(prompt("请输入你的出生日期"));
      function oDate(){
        var sum=0;
        switch(month){
          case 1: sum=0;break;
          case 2: sum=31;break;
          case 3: sum=59;break;
          case 4: sum=90;break;
          case 5: sum=120;break;
          case 6: sum=151;break;
          case 7: sum=181;break;
          case 8: sum=212;break;
          case 9: sum=243;break;
          case 10: sum=273;break;
          case 11: sum=304;break;
          case 12: sum=334;break;
        }
        sum+=day;
        if(year%400==0||(year%4==0&&year%100!=0)){
          var leap=1;
        }
        else{
          leap=0;
        }
        if(leap==1&&month>2){
          sum++;
        }
        else{
          return sum;
        }
        return sum;
      }
      document.write('您的生日是在'+year+'年是第'+oDate()+'天');