const tabList=document.querySelectorAll('.header-link--text');
const listItem = document.querySelectorAll('.list-item')


tabList.forEach(tab=>{
    tab.addEventListener('click',e=>{
        console.log(e.target)
        const type=e.target.getAttribute('type-list')
        let actives=document.querySelectorAll('.header-link--text.active')
        actives.forEach(active=>{
            active.classList.remove('active')
        })
        e.target.classList.add('active')
        listItem.forEach(item=>{
            if(item.getAttribute('type-list')===type){
                item.classList.remove('hide')

            }
            else{
                item.classList.add('hide')
            }
        })
    })
})