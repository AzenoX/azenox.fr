const videos = [
    ["P3llriOnFlU",  "trap"],
    ["EFHLv6T858Q",  "progressive_house"],
    ["TjD_FsveYfs",  "synthwave"],
    ["lgMt0hx_A8E",  "melodic_dubstep"],
    ["15nwKBaYkYg",  "progressive_house"],
    ["oLt1OeMeTCk",  "trap"],
    ["1XG-GhxyuSc",  "melodic_dubstep"],
    ["yzhLtgSOpIY",  "progressive_house"],
    ["VdhG2ekoyfc",  "melodic_dubstep"],
    ["sisBUaaaDnk",  "progressive_house"],
    ["NiBByUIogT8",  "melodic_dubstep"],
    ["lII47K_p3B4",  "edm"],
    ["4NJlguSqTj8",  "edm"],
    ["N3jhqQwVYWE",  "melodic_dubstep"],
    ["XUy_YANlbGM",  "edm"],
    ["qzmeaKgV1Uk",  "edm"],
    ["SC2juM2BMOk",  "edm"],
    ["Kq-h6_a0xO8",  "edm"],
    ["RmbYdNyGdGY",  "edm"],
    ["u4LCUKGi-oo",  "trance"],
    ["KVXof7LT-YQ",  "edm"],
]

const wrapper = document.querySelector('.videos_list');

function insertByStyle(style){
    wrapper.innerHTML = '';
    videos.forEach((el) => {
        const transformed = style.toLowerCase().replaceAll(' ', '_');
        if(transformed !== "filter_by_genre"){
            if(el[1] === transformed){
                const div = document.createElement('div');
                div.innerHTML = '<div class="youtube" data-embed="'+el[0]+'" data-style="'+transformed+'"><div class="play-button"><span>▶</span></div></div>';
                wrapper.append(div);
            }
        }
        else{
            const div = document.createElement('div');
            div.innerHTML = '<div class="youtube" data-embed="'+el[0]+'" data-style="'+transformed+'"><div class="play-button"><span>▶</span></div></div>';
            wrapper.append(div);
        }
    });
    document.querySelectorAll('.youtube').forEach((el) => {
        const source = "https://img.youtube.com/vi/"+ el.getAttribute('data-embed') +"/hqdefault.jpg";

        const image = new Image();
        image.src = source;
        image.addEventListener( "load", () => {
            el.appendChild(image);
        });

        el.addEventListener("click", () => {
            const iframe = document.createElement( "iframe" );

            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "true");
            iframe.setAttribute("src", "https://www.youtube.com/embed/"+ el.getAttribute('data-embed') +"?rel=0&showinfo=0&autoplay=1" );
            el.appendChild(iframe);
        } );

    });
}

document.addEventListener('DOMContentLoaded', () => {
    insertByStyle("filter_by_genre");
});


document.addEventListener('DOMContentLoaded', function() {
    let nav = document.querySelector('.nav');
    let navItems = Array.from(nav.querySelectorAll('li > a'));

    navItems.forEach(function(item, index) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            nav.className = nav.className.replace(/[0-9]/, index);
            nav.querySelector('.selected').classList.remove('selected');
            item.classList.add('selected');
            nav.classList.remove('focused');

            console.log(item.textContent);
            insertByStyle(item.textContent);
        });

        item.addEventListener('focus', function() {
            nav.classList.add('focused');
        });

        item.addEventListener('blur', function() {
            nav.classList.remove('focused');
        });
    });
});


const scrollMusics = document.querySelectorAll('.scroll-music');
scrollMusics.forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelector('.videos_header').scrollIntoView();
    });
});


/*=================================

      Go to top

==================================*/
topBtn = document.querySelector("#topBtn");
botBtn = document.querySelector("#botBtn");

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "flex";
        botBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
        botBtn.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function botFunction() {
    document.body.scrollTop = document.documentElement.offsetHeight;
    document.documentElement.scrollTop = document.documentElement.offsetHeight;
}