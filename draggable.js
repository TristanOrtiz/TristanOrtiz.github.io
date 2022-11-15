class Draggable {
  constructor(content, x, y, w, h, size, align) {
    this.dragging = false;
    this.rollover = false;
    this.content = content;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.size = size;
    this.align = align;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  over() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
  
  showText() {
    stroke(0);
    if (this.dragging) {
      fill(225, 225, 225, 100);
    } else if (this.rollover) {
      fill(225, 225, 225, 150);
    } else {
      fill(225, 225, 225, 225);
    }
    textSize(this.size);
    textAlign(this.align);
    text(this.content, this.x, this.y, this.w, this.h);
  }
  
  showImage() {
    stroke(0);
    if (this.dragging) {
      fill(225, 225, 225, 100);
    } else if (this.rollover) {
      fill(225, 225, 225, 150);
    } else {
      fill(225, 225, 225, 225);
    }
    image(this.content, this.x, this.y, this.w, this.h);
  }

  pressed() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    this.dragging = false;
  }
}