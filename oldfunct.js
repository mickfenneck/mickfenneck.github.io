window.setInterval("changeQuote()",4573);

    function changeQuote() {
        
        $('#quotetot').fadeOut(300,function() { 
            document.getElementById('quotecit').innerHTML = quotations[i][0]; 
            document.getElementById('quotepers').innerHTML = quotations[i][1];
        });
        $('#quotetot').fadeIn(300);
        if(i<2)
            i++;
        else
            i=0;
    }