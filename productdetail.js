let header=document.getElementsByTagName('header')[0];
let footer=document.getElementsByTagName('footer')[0];
let promisebox=document.getElementsByClassName('promisebox')[0];
document.querySelectorAll('.dis').forEach((item) => {
    item.addEventListener('click', () => {

        const productinfo={
            itemcontent:item.innerHTML,
            headercontent:header.innerHTML,
            promisecontent:promisebox.innerHTML,
            footercontent:footer.innerHTML
        }
        // Store the innerHTML of the clicked element in localStorage
        localStorage.setItem('productinfo',JSON.stringify(productinfo))
        // Redirect to the new page
        window.location.href = 'detail.html';
    });
});