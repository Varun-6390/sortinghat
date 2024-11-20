
function check(){
    const x = document.getElementById("naam");
    const y = x.value;
    const z = y.length;
    const w = typeof z;

    if(z>2 && z<5)
    
        {console.log("Ravenclaw");
            document.getElementById('wait').style.display='block';
            setTimeout(main,4000)
            function main()
            {
                window.location.href='r.html'
            }
            
        }
    
    else if (z==5)
    
        {console.log("Gryffindor");
             document.getElementById('wait').style.display='block';
            setTimeout(main,4000)
            function main()
            {
                window.location.href='g.html'
            }
            
        }
    
    else if (z==6 || z==7)
    
        {console.log("Slytherin");
             document.getElementById('wait').style.display='block';
            setTimeout(main,4000)
            function main()
            {
                window.location.href='s.html'
            }
            
        }
    else if (z==0)
    {
        alert("abe pehle naam to likh")
    }
    
    else
    
        {console.log("Hufflepuff");
             document.getElementById('wait').style.display='block';
            setTimeout(main,4000)
            function main()
            {
                window.location.href='h.html'
            }
            
        }
    
    }