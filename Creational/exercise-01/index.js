// * ADDS THE LOG METHOD AS A PROTOTYPE 
Object.prototype.log = function () {
    console.log(this)
}

// * CREATES AN OBJECTS
const x = { a: 1 }

console.log(x)

if (!String.prototype.trim){
    String.prototype.trim = function () {
        try {
            return this.replace(/^\s+|s+$/g, "")
        } catch (e) {
            return this
        }
    }
}

const y = "   lalala  ".trim()

console.log(y)
