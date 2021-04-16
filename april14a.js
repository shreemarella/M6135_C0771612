// APRIL14A.JS
counter version: working version of code

    // APRIL14A.JS

    var globalCounter = 0;

    function lemon(){
        console.log("trace msg A: ", globalCounter)
    
        while (true){
            if (globalCounter >5) {
                    return;
                }
            orange();
        } 
    }

    function orange(){
        var counter = 0;
        for ( ; counter < 2 ; counter++){
            console.log(counter);
            globalCounter++;
        }
    }

    var L = lemon();
    // console.log(L);
    console.log("fini");



Logical Flag Version : working version
    // APRIL14A.JS

    var LogicalFlag = true;
    var occuranceCounter = 0;

    function lemon(){
        while (LogicalFlag){
            orange();
        } 
        console.log("trace msg B: Done and Finished!")
    }

    function orange(){
        var counter = 0;
        for ( ; counter < 2 ; counter++){
            occuranceCounter++;
            if (occuranceCounter >8) LogicalFlag = false;
            console.log("trace msg A: ", occuranceCounter)
            console.log(counter);
        }
    }

    var L = lemon();
    // console.log(L);
    console.log("fini");
