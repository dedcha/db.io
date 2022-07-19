function animateSprite(src, x,y, width,height, scaleX,scaleY, index) {
    this.f = genSpriteSheet(src, width, height);
    
    this.index = index;
    this.end = genSpriteSheet.length;
    this.animate = () => {
        ctx.drawImage(girlImgSrc, this.f[this.index].clipX,this.f[this.index].clipY, width, height, x,y, width*scaleX, height*scaleY);
        this.index = (this.index + 1)%this.end;
    }
    this.animate();
}


function genSpriteSheet(img, width, height) {
    let frames = [];

    let rows = img.height/height;
    let cols = img.width/width;

    let sheetCounter = 0;


    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            frames[sheetCounter] = {clipX: width * j, clipY: height * i};
            sheetCounter++;
        }
    }

    return frames;

}