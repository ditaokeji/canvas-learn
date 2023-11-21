import React from 'react'

const CanvasTest03 = () => {
    React.useEffect(() => {
        const canvas = document.getElementById('test-canvas')
        const ctx = canvas.getContext('2d')
       // const gl = canvas.getContext('webgl') //绘制3d图形
        ctx.clearRect(0,0,canvas.width,canvas.height) //擦除（0,0）位置大小为200x200的矩形，擦除的意思是吧该区域变为透明
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 2
        ctx.shadowBlur = 2
        ctx.shadowColor = '#666666'
        ctx.font = '24px'
        ctx.fillStyle = '#333333' //设置颜色
        ctx.fillText('带阴影的文字', 20, 40) 
    },[])

    return <>
        <canvas id='test-canvas' width='300' height='200'>
            <p>您的浏览器不支持canvas</p>
        </canvas>
    </>
}

export default CanvasTest03