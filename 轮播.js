window.addEventListener('load', function() {
    var left = document.querySelector('.button-left')
    var right = document.querySelector('.button-right')
    var shell = document.querySelector('.shell')
    var images = document.querySelector('.images')
    var min_images = document.querySelector('.min-images')
    var min = document.querySelectorAll('.min')
        //方向按钮隐藏
    shell.addEventListener('mouseenter', function() {
        left.style.display = 'block'
        right.style.display = 'block'
    })
    shell.addEventListener('mouseleave', function() {
            left.style.display = 'none'
            right.style.display = 'none'
        })
        //点击下方控制框添加白色边框
    for (var i = 0; i < min_images.children.length; i++) {
        min[i].onclick = function() {
            for (var i = 0; i < min_images.children.length; i++) {
                min_images.children[i].style.border = ''
            }
            this.style.borderColor = '#fff';

        }
    }
    //index控制图片位置，time作为定时器
    var index = 0
    var time
        //默认下面第一个控制框为选中状态
    min[0].style.borderColor = '#fff';
    //position复用函数，结合index来定义当前图片的位置及将展示的图片添加白色边框
    function position() {
        images.style.left = (-index * 100) + '%'
        for (var i = 0; i < min.length; i++) {
            min_images.children[i].style.border = ''
        }

        min[index].style.borderColor = '#fff';
    }
    //add复用函数，超出图片范围归0
    function add() {
        if (index >= min.length - 1) {
            index = 0
        } else
            index++
    }
    //desc复用函数，超出图片右侧范围则到最顶端
    function desc() {
        if (index < 1) {
            index = min.length - 1
        } else
            index--
    }
    //定时器
    function timer() {
        time = setInterval(() => {
            index++
            desc()
            add()
            position()
        }, 3000)
    }


    //左侧控制按钮
    left.addEventListener("click", () => {
            desc()
            position()
            clearInterval(time)
            timer()
        }) //右侧控制按钮
    right.addEventListener("click", () => {
            add()
            position()
            clearInterval(time)
            timer()
        }) //底部点击切换图片
    for (let i = 0; i < min.length; i++) {
        min[i].addEventListener("click", () => {
            index = i
            position()
            clearInterval(time)
            timer()
        })
    }
    //调用定时器
    timer()
})