window.onload = function () {


    let moveUpElement = document.getElementById('moveUp')
    let moveDownElement = document.getElementById('moveDown')
    let scrollWheelElement = document.querySelector(".scroll-wheel")

    console.log("moveUpElement--->", moveUpElement);
    console.log("moveDownElement--->", moveDownElement);

    moveUpElement.addEventListener("click", function () {
        fullpage_api.moveSectionUp()
    })
    moveDownElement.addEventListener("click", function () {
        fullpage_api.moveSectionDown()
    })

    section4Animation()

    function section4Animation() {
        let elementList = document.getElementById("bg-img-list").children
        let imgList = document.querySelectorAll("#bg-img-list>li>img")
        let h3List = document.querySelectorAll("#bg-img-list>li>h3")
        console.log(elementList);
        console.log(imgList);
        console.log(h3List);


        for (let i = 0; i < elementList.length; i++) {
            let item = elementList[i]
            let itemImg = imgList[i]
            let itemH3 = h3List[i]
            let index = i

            item.onmouseenter = function () {
                elementList[0].style.width = "20%"
                elementList[1].style.width = "20%"
                elementList[2].style.width = "20%"
                item.style.width = "60%"

                if (index === 1) {
                    itemImg.style.opacity = "1";
                    itemH3.style.opacity = "0"
                } else {
                    itemImg.style.left = "0"
                    itemImg.style.opacity = "1";
                    itemH3.style.opacity = "0"
                }

            }

            item.onmouseleave = function () {
                elementList[0].style.width = "33%"
                elementList[1].style.width = "34%"
                elementList[2].style.width = "33%"
                itemImg.style.left = "-300px"
                itemImg.style.opacity = "0.6"
                itemH3.style.opacity = "1"

            }
        }




    }

    new fullpage('#fullpage', {
        //options here
        // loopTop:true,
        // loopBottom:true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'lastPage'],
        menu: '#myMenu',
        autoScrolling: true,
        scrollHorizontally: true,
        sectionsColor: ["#FF69B4", "#8A2BE2", "#FA8072", "#FFD700", "#90EE90", '#1E90FF', '#778899'],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ['1', "2", "3", "4", "5"],
        verticalCentered: false,
        scrollOverflow: false,


        onLeave: function (origin, destination, direction, tigger) {

            // console.log('origin---->', origin);
            // console.log('destination----->', destination);
            // console.log('direction----->', direction);

            if (destination.isFirst) {
                document.getElementById('toolbar').className = "toolbar"
                document.getElementById('navbar').className = 'navbar'
                document.getElementById('myMenu').className = 'menu'

            } else {
                document.getElementById('toolbar').className = "toolbar toolbarhidden"
                document.getElementById('navbar').className = 'navbar navbar-to-top'
                document.getElementById('myMenu').className = 'menu menu-show'
            }


            if (destination.isLast) {
                scrollWheelElement.style.display = "none"
            } else {
                scrollWheelElement.style.display = "block"
            }
        },


        // afterLoad: function (origin, destination, direction) {
        //     //console.log('origin---->', origin);
        //     // console.log('destination----->', destination);
        //     // console.log('direction----->', direction);
        //     destination.item.className = destination.item.className + " current"
        //     if (!origin.isActive) {
        //         origin.item.className = origin.item.className.replace('current', '')
        //     }
        // }

    });
}