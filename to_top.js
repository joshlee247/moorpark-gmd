let button;
function f(){
    button = document.querySelector('#to-top');
    if(!button)
        setTimeout(f, 300);
}
f();
window.onscroll = ()=>{
    if(!button)
        return;
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
        button.style.display = 'block';
    else
        button.style.display = '';
};
function to_top(){
    scroll(0, 0);
}
