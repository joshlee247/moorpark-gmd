const scholarships = document.querySelectorAll('.scholarship');
for(i of scholarships){
    const more_button = i.querySelector('.more-button');
    const more_recipients = i.querySelector('.more-recipients');
    if(more_button && more_recipients)
        more_button.onclick = ()=>{
            console.log(more_recipients);
            console.log(more_recipients.style.display);
            if(more_recipients.style.display)
                more_recipients.style.display = '';
            else
                more_recipients.style.display = 'block';
        };
}
