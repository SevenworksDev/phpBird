canvas               = O('logo')
context              = canvas.getContext('2d')
context.font         = 'bold italic 75px Georgia'
context.textBaseline = 'top'
image                = new Image()
image.src            = 'logo.png'

image.onload = function()
{
  gradient = context.createLinearGradient(0, 0, 0, 89)
  gradient.addColorStop(0.00, 'blue')
  gradient.addColorStop(0.66, 'lightblue')
  context.fillStyle = gradient
  context.fillText(  "         phpBird", 0, 0)
  context.strokeText("         phpBird", 0, 0)
  context.drawImage(image, 54, 22)
}

function O(i) { return typeof i == 'object' ? i : document.getElementById(i) }
function S(i) { return O(i).style                                            }
function C(i) { return document.getElementsByClassName(i)                    }
