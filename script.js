
//  Scrolling Smooth
var scrollList = document.querySelectorAll('.nav-menu a');
for(var i=0 ; i<scrollList.length ; i++){
    scrollList[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        // console.log(targetSectionCoordinates);
        var scrollVar = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(scrollVar);
                return;
            }
            window.scrollBy(0, 30);
        }, 10);
    });
}

//  Skills animation

    var skillPerc = document.querySelectorAll('.skill-progress > div'); 
    var skillSection = document.getElementById('skills-container');
    window.addEventListener('scroll', checkScroll);
    var animationDone = false;
    
    function initialiseBars(){
        for(let bar of skillPerc){
            var dataBar = bar.getAttribute('data-bar');
            bar.style.width = 0 +'%';
        }
    }
    
    function fillBars(){
        for(let bar of skillPerc){
            var dataBar = bar.getAttribute('data-bar');
            var keyframes = [{width: '0%'}, {width: dataBar}];
            var options = {duration: 1500, easing: 'ease-out'};
            var animation = bar.animate(keyframes, options);
            animation.play();
            bar.style.width = dataBar;
        }
    }
    
    function checkScroll(){
        var Coordinates = skillSection.getBoundingClientRect();
        var scrollingTop = Coordinates.top < window.innerHeight && Coordinates.top > 0;
        var scrollingBottom = Coordinates.top > (-window.innerHeight) && Coordinates.top < 0;
        if(!animationDone && (scrollingTop || scrollingBottom)){
            // console.log(Coordinates.top);
            fillBars();
            animationDone = true;
        }
        else if(Coordinates.top >= window.innerHeight || Coordinates.top <= (-window.innerHeight)){
            initialiseBars();
            animationDone = false;
        }
    }




