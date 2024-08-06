// 右侧电梯功能
// 获取元素
const elevator = document.querySelector('.elevator')
// 1. 当页面滚动大于300像素，就显示 电梯导航
// 2.给页面添加滚动事件
window.addEventListener('scroll', function(){
    // 被卷去的头部大于 300
    const n = document.documentElement.scrollTop
    if(n >= 300){
        elevator.style.opacity = 1
    } else {
        elevator.style.opacity = 0
    }
})

// 轮播图功能
    // 初始数据
    const sliderData = [
        { url: './images/paintings/banner1.png', title: '这是第一张画', color: 'rgb(100, 67, 68)' },
        { url: './images/paintings/banner2.png', title: '这是第二张画', color: 'rgb(43, 190, 97)'},
        { url: './images/paintings/banner3.png', title: '这是第三张画', color: 'rgb(79, 139, 33)'},
        { url: './images/paintings/banner4.png', title: '这是第四张画', color: 'rgb(67, 90, 92)'},
        { url: './images/paintings/banner5.png', title: '这是第五张画', color: 'rgb(210, 90, 92)'},
        { url: './images/paintings/banner6.png', title: '这是第六张画', color: 'rgb(67, 120, 92)'},
        { url: './images/paintings/banner7.png', title: '这是第七张画', color: 'rgb(67, 90, 92)'},
        { url: './images/paintings/banner8.png', title: '这是第八张画', color: 'rgb(117, 80, 92)'},
        { url: './images/paintings/banner9.png', title: '这是第九张画', color: 'rgb(150, 100, 92)'},
        { url: './images/paintings/banner10.png', title: '这是第十张画', color: 'rgb(17, 90, 220)'},
       ]
       // 获取元素
       const img = document.querySelector('.slider-wrapper img')
       const p = document.querySelector('.slider-footer p')
       const footer = document.querySelector('.slider-footer')
       // 1. 右按钮业务
       // 1.1 获取右侧按钮
       const next = document.querySelector('.next')
       let i = 0 // 信号量 控制播放图片张数
       // 1.2 注册点击事件
       next.addEventListener('click', function(){
        i++
        // 1.6 判断条件 如果大于10 就复原为0
       //  if(i >= sliderData.length) {
       //     i=0
       //  }
       i = i >= sliderData.length ? 0 : i
        // 1.3 得到对应的对象
       //  console.log(sliderData[i]);
       // 调用函数
       toggle()
       })

       // 2. 左侧按钮业务
       //2.1 获取左侧按钮
       const prev = document.querySelector('.prev')
       // 2.2 注册点击事件
       // 1.2 注册点击事件
       prev.addEventListener('click', function(){
        i--
        // 1.6 判断条件 如果小于0 就爬到最后一张图片 索引号是9
       //  if(i < 0) {
       //     i = 9
       //  }
       i = i < 0 ? sliderData.length - 1 : i
        // 1.3 得到对应的对象
       //  console.log(sliderData[i]);
       // 调用函数
       toggle()
       })
       
       // 声明一个渲染的函数作为复用
       function toggle(){
       // 1.4 渲染对应的数据
       img.src = sliderData[i].url
       p.innerHTML = sliderData[i].title
       footer.style.backgroundColor = sliderData[i].color
       // 1.5 更换小圆点  先移除原来的类名， 当前li再添加 这个 类名
       document.querySelector('.slider-indicator .active').classList.remove('active')
       document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active')
       }


       // 3. 自动轮播
       let timerId = setInterval(function(){
         next.click()
       }, 2000)

       // 4.鼠标经过大盒子，停止定时器
       const slider = document.querySelector('.slider')
       // 注册事件
       slider.addEventListener('mouseenter', function(){
           //停止定时器
           clearInterval(timerId)
       })

       // 4.鼠标离开大盒子，开启定时器
       // 注册事件
       slider.addEventListener('mouseleave', function(){
           //停止定时器
           clearInterval(timerId)                
           //开启定时器
           timerId = setInterval(function(){
         next.click()
       }, 2000)
       })

    // const sliderData = [
    //     {url: './images/banner1.png'},
    //     {url: './images/banner2.png'},
    //     {url: './images/banner3.png'},
    //     {url: './images/banner4.png'},
    //     {url: './images/banner6.png'},
    //     {url: './images/banner7.png'},
    //     {url: './images/banner8.png'},
    // ];

    // const img = document.querySelector('.banner-img img');
    // let i = 0;

    // setInterval(function() {
    //     i++;
    //     if (i >= sliderData.length) {
    //         i = 0;
    //     }
    //     img.src = sliderData[i].url;
    // }, 2000);


// Accordion 功能
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isActive = button.classList.contains('active');

        // 关闭所有打开的Accordion
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.display = 'none';
        });
        document.querySelectorAll('.accordion-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // 切换当前Accordion
        if (!isActive) {
            content.style.display = 'block';
            button.classList.add('active');
        }
    });
});

// 鼠标经过图片，让图片显示大图。
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const largeImage = card.querySelector('.large-image');
        if (largeImage) {
            largeImage.style.display = 'block';
        }
    });

    card.addEventListener('mouseleave', () => {
        const largeImage = card.querySelector('.large-image');
        if (largeImage) {
            largeImage.style.display = 'none';
        }
    });
});