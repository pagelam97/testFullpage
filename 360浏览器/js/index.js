window.onload = function () {
    new fullpage('#fullpage', {
        //options here
        // loopTop:true,
        // loopBottom:true,
        autoScrolling: true,
        scrollHorizontally: true,
        sectionsColor: ["#2097d5", "#2a9f61", "#e38a24", "#20a49e", "#2097d5"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ['1', "2", "3", "4", "5"],
        continuousVertical: true,
        verticalCentered: false,
        afterLoad: function (origin, destination, direction) {
            console.log('origin---->', origin);
            console.log('destination----->', destination);
            console.log('direction----->', direction);

            destination.item.className = destination.item.className + " current"

            if(!origin.isActive){
                origin.item.className = origin.item.className.replace('current','')
            }
        }

    });
}