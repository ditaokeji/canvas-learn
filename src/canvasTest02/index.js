import React from 'react'

const CanvasTest02 = () => {
    React.useEffect(() => {
        const canvas = document.getElementById('test-canvas')
        const ctx = canvas.getContext('2d')
       // const gl = canvas.getContext('webgl') //绘制3d图形
        ctx.clearRect(0,0,200,200) //擦除（0,0）位置大小为200x200的矩形，擦除的意思是吧该区域变为透明
        ctx.fillStyle = '#dddddd' //设置颜色
        ctx.fillRect(10,10,130,130) //把（10,10）位置大小130x130的矩形涂色
        //利用path绘制复杂路径
        const path = new Path2D()
        path.arc(75,75,50,0,Math.PI*2, false)
        path.moveTo(110,75)
        path.arc(75,75,35,0,Math.PI, false)
        path.moveTo(65,65)
        path.arc(60,65,5,0,Math.PI*2, false)
        path.moveTo(95,65)
        path.arc(90,65,5,0,Math.PI*2, false)
        ctx.strokeStyle = '#0000ff'
        ctx.stroke(path)
    },[])

    return <>
        <canvas id='test-canvas' width='300' height='200'>
            <p>您的浏览器不支持canvas</p>
        </canvas>
    </>
}

export default CanvasTest02