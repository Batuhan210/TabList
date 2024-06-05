function londonTab() {
    document.getElementById("tab1-content").classList.remove("tab-content");
    document.getElementById("tab1-button").style.backgroundColor="#FFB86F";
    
    /* London için, Paris ve Tokyo'yu gizledik */
    document.getElementById("tab2-content").classList.add("tab-content");
    document.getElementById("tab3-content").classList.add("tab-content");
        }

function parisTab() {
    document.getElementById("tab2-content").classList.remove("tab-content");
    document.getElementById("tab2-button").style.backgroundColor="#FFB86F";

    /* Paris için, London ve Tokyo'yu gizledik */
    document.getElementById("tab1-content").classList.add("tab-content");
    document.getElementById("tab3-content").classList.add("tab-content");
        }

function tokyoTab() {
    document.getElementById("tab3-content").classList.remove("tab-content");
    document.getElementById("tab3-button").style.backgroundColor="#FFB86F";

    /* Tokyo için, london ve Parisi gizledik */
    document.getElementById("tab1-content").classList.add("tab-content");
    document.getElementById("tab2-content").classList.add("tab-content");
            }

document.getElementById("tab1-button").addEventListener("click", londonTab);
document.getElementById("tab2-button").addEventListener("click", parisTab);
document.getElementById("tab3-button").addEventListener("click", tokyoTab);


/* Paris ve Tokyo için iteration */
const elements = document.getElementsByClassName("tab-content");
    for(element of elements) {
        element.style.fontSize="1.2rem";
        element.style.padding="10px";
        element.style.border="1px solid black";
        element.style.fontFamily="sans-serif";
            }

/* sadece london için */
const tabLondon = document.getElementById("tab1-content");
tabLondon.style.fontSize="1.2rem";
tabLondon.style.padding="10px";
tabLondon.style.border="1px solid black";
tabLondon.style.fontFamily="sans-serif";