import React from 'react'

const CanvasTest07 = () => {
    React.useEffect(() => {
        const canvas = document.getElementById('test-canvas')
        const ctx = canvas.getContext('2d')
        ctx.beginPath()//新建一条path
        ctx.moveTo(50,50)//把画笔移动到指定的坐标
        ctx.lineTo(200,50)//绘制一条从当前位置到指定坐标(200,50)的直线
        ctx.lineTo(200,200)//绘制一条从当前位置到指定坐标(200,50)的直线
        ctx.closePath()//虽然我们只绘制了两条线段，但是closePath会closePath,依然是一个三角形
        ctx.stroke()//描边，stroke不会自动closePath()
    },[])

    return <>
        <canvas id='test-canvas' width='300' height='200'>
            <p>您的浏览器不支持canvas</p>
        </canvas>
    </>
}

export default CanvasTest07