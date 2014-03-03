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

<script type="text/javascript">   
    var i = 1;
    var quotations = [
        ['Sometimes the winner is simply a dreamer who never gave up.','Jim Morrison'],
        ['Sometimes the winner is simply a dreamer who never gave up.','Jim Morrison'],
        ['Sometimes the winner is simply a dreamer who never gave up.','Jim Morrison']];
    var i = Math.floor((Math.random()*3));
    document.getElementById('quotecit').innerHTML = quotations[i][0]; 
    document.getElementById('quotepers').innerHTML = quotations[i][1];
</script>